import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer, OverlayView } from '@react-google-maps/api';
import AgentationClient from './components/AgentationClient';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSoyFDRrMUP7nCIqMVPCHiVxBxC5evqUfwmMhpq_zVUznEuaqor2Lnb0wMLnlWYlIIihf8_7oMSamDQ/pub?output=csv';
const MAPS_API_KEY = 'AIzaSyCCJuqCzR1TyMz86V8AWUUnu9MB7vbjncI';

const mapContainerStyle = { width: '100%', height: '100%' };
const center = { lat: 36.5, lng: 127.8 };

function parseCSVRow(str) {
  let inQuote = false, curr = '';
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '"' && str[i+1] === '"') { curr += '"'; i++; }
    else if (char === '"') { inQuote = !inQuote; }
    else if (char === ',' && !inQuote) { result.push(curr); curr = ''; }
    else { curr += char; }
  }
  result.push(curr);
  return result;
}

// 아이콘 SVG Paths
const PATH_BUILDING = "M4 22V10L12 2L20 10V22H4Z"; // 심플한 집 모양
const PATH_DROPLET = "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 12 2 12 2C12 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"; // 물방울 모양

function App() {
  const [data, setData] = useState({ national: null, bonbuList: [], jisaMap: {}, allReservoirs: [] });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [nextRefreshSec, setNextRefreshSec] = useState(600);
  const [selectedBonbu, setSelectedBonbu] = useState(null);
  const [selectedJisa, setSelectedJisa] = useState(null);
  const [hoveredJisa, setHoveredJisa] = useState(null);
  const [selectedJisaDetail, setSelectedJisaDetail] = useState(null);
  const [updateTime, setUpdateTime] = useState('');

  // 줌 레벨 추적용 상태 및 Ref
  const [currentZoom, setCurrentZoom] = useState(7.2);
  const [mapBounds, setMapBounds] = useState(null); // 뷰포트 컴링용
  const mapRef = useRef(null);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
    // GeoJSON 레이어로 행정구역 경계선 추가 렌더링 (적색 굵은 선)
    try {
      map.data.loadGeoJson(
        'https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-provinces-2018-geo.json'
      );
      map.data.setStyle({
        fillColor: 'transparent',
        fillOpacity: 0,
        strokeColor: '#dc2626',
        strokeWeight: 1.5,
        strokeOpacity: 0.8,
      });
    } catch (e) {
      console.warn('GeoJSON 경계선 로드 실패:', e);
    }
  }, []);

  const onZoomChanged = () => {
    if (mapRef.current) {
      setCurrentZoom(mapRef.current.getZoom());
    }
  };

  // 지도 이동/확대 완료 시 보이는 영역 갱신
  const onIdle = useCallback(() => {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds();
      if (bounds) {
        const sw = bounds.getSouthWest();
        const ne = bounds.getNorthEast();
        setMapBounds({ swLat: sw.lat(), swLng: sw.lng(), neLat: ne.lat(), neLng: ne.lng() });
      }
      setCurrentZoom(mapRef.current.getZoom());
    }
  }, []);

  const fetchData = useCallback((isFirstLoad = false) => {
    if (isFirstLoad) setLoading(true);
    else setRefreshing(true);

    // 캐시 우회를 위해 타임스탬프 파라미터 추가
    const url = `${SHEET_CSV_URL}&t=${Date.now()}`;
    fetch(url)
      .then(res => res.text())
      .then(csvText => {
        const lines = csvText.split('\n').filter(line => line.trim() !== '');
        let natData = null;
        const bMap = {}; 
        const jMap = {}; 
        const resArr = []; // 3,000여 개 개별 저수지 담을 배열

        for (let i = 1; i < lines.length; i++) {
          const row = parseCSVRow(lines[i]);
          const bonbuCol = (row[0] || '').trim();
          const jisaCol = (row[1] || '').trim();
          const crRate = parseFloat(row[6]);
          const nrRate = parseFloat(row[8]);
          const perRate = parseFloat(row[9]); // 평년대비
          const riskLevel = row[13]; 
          let lat = parseFloat(row[14]);
          let lng = parseFloat(row[15]);

          if (bonbuCol.startsWith('전국') && jisaCol.includes('전체 평균')) {
            natData = { cr_rate: crRate, nr_rate: nrRate, per_rate: perRate, counts: { safe: 0, warn: 0, alert: 0, severe: 0 } };
            continue;
          }

          // 1. 본부 요약
          if (bonbuCol.includes('개소') && jisaCol.includes('평균') && !jisaCol.includes('전체')) {
            const rawBonbu = bonbuCol.split(' ')[0]; 
            bMap[rawBonbu] = { 
              name: rawBonbu, rate: crRate, nrRate: nrRate, perRate: perRate, riskStr: riskLevel,
              counts: { safe:0, warn:0, alert:0, severe:0 } // 관심/주의/경계/심각 갯수 카운터
            };
            if(!jMap[rawBonbu]) jMap[rawBonbu] = [];
            continue;
          }

          // 2. 지사 요약
          if (bonbuCol.length > 0 && !bonbuCol.includes('개소') && bonbuCol !== '전국' && jisaCol.includes('평균')) {
            const rawName = jisaCol.split(' 평균')[0];
            let riskClass = 'safe';
            if (riskLevel === '심각') riskClass = 'severe';
            else if (riskLevel === '경계') riskClass = 'alert';
            else if (riskLevel === '주의') riskClass = 'warn';

            if (isNaN(lat) || isNaN(lng) || lat === 0 || lng === 0) {
              lat = 36.5; lng = 127.8; // 최후 방어
            }

            const jisaObj = {
              type: 'jisa', name: rawName, fullName: jisaCol, rate: crRate, perRate: perRate, riskStr: riskLevel, riskClass: riskClass, lat, lng,
              counts: { safe: 0, warn: 0, alert: 0, severe: 0 }
            };
            if (!jMap[bonbuCol]) jMap[bonbuCol] = [];
            jMap[bonbuCol].push(jisaObj);
            continue;
          }

          // 3. 개별 저수지 (수천 개)
          if (bonbuCol.length > 0 && bonbuCol !== '전국' && !jisaCol.includes('평균') && row[2]) {
            const resName = row[2].trim();
            
            // 좌표가 0이거나 없는 놈은 버린다 (지도 밖으로 튕기는 것 방지)
            if (isNaN(lat) || isNaN(lng) || lat < 30 || lng < 120) continue;

            let riskClass = 'safe'; // 기본은 관심(안전)
            if (riskLevel === '심각') riskClass = 'severe';
            else if (riskLevel === '경계') riskClass = 'alert';
            else if (riskLevel === '주의') riskClass = 'warn';

            const effVol = parseFloat(row[4]) || 0;
            const curVol = parseFloat(row[5]) || 0;

            const resObj = {
              type: 'reservoir', bonbu: bonbuCol, jisa: jisaCol, name: resName, 
              effVol, curVol, rate: crRate, nrRate: nrRate, perRate: perRate, 
              riskStr: riskLevel, riskClass: riskClass, lat, lng
            };
            resArr.push(resObj);

            // 해당 본부 및 지사의 개소수 누적 합산 (관심/주의/경계/심각)
            if (bMap[bonbuCol]) {
              bMap[bonbuCol].counts[riskClass] += 1;
            }
            if (jMap[bonbuCol]) {
              const targetJisa = jMap[bonbuCol].find(j => j.name === jisaCol);
              if (targetJisa && targetJisa.counts) {
                targetJisa.counts[riskClass] += 1;
              }
            }
            if (natData) {
              natData.counts[riskClass] += 1;
            }
          }
        }
        setData({ national: natData, bonbuList: Object.values(bMap), jisaMap: jMap, allReservoirs: resArr });
        setUpdateTime(new Date().toLocaleString());
        setNextRefreshSec(600);
      })
      .catch(err => { console.error("로딩 실패:", err); })
      .finally(() => { setLoading(false); setRefreshing(false); });
  }, []);

  useEffect(() => {
    fetchData(true);
    // 10분(600초)마다 자동 갱신
    const autoRefreshTimer = setInterval(() => fetchData(false), 600_000);
    // 1초마다 카운트다운
    const countdownTimer = setInterval(() => {
      setNextRefreshSec(s => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(autoRefreshTimer);
      clearInterval(countdownTimer);
    };
  }, [fetchData]);

  // 마커 아이콘 생성 함수 (지사 vs 저수지 구분)
  const getMarkerIcon = (type, riskClass, zoomLevel) => {
    // safe(관심/정상), warn(주의), alert(경계), severe(심각)
    const colors = { safe: '#0066ff', warn: '#ffcc00', alert: '#ff6600', severe: '#ff0000' }; // 쨍한 원색
    const color = colors[riskClass] || colors.safe;

    if (type === 'jisa') {
      // 라벨 주변에 투명한 영역(Hit Area)을 만들어서 마우스 호버 이벤트를 정상적으로 감지
      return {
        path: "M -15,-15 h30 v30 h-30 z",
        fillColor: '#ffffff',
        fillOpacity: 0.01,
        strokeOpacity: 0,
        scale: 1
      };
    } else {
      let rScale = 0.75;
      if (zoomLevel <= 6) rScale = 0.25;
      else if (zoomLevel >= 11) rScale = 0.75;
      else rScale = 0.25 + (zoomLevel - 6) * 0.1;

      return {
        path: PATH_DROPLET,
        fillColor: color, // 속을 위험도로 원복
        fillOpacity: 0.85,
        strokeColor: '#ffffff',
        strokeWeight: 1,
        scale: rScale, // 줌 레벨에 따른 동적 크기
        anchor: window.google ? new window.google.maps.Point(12, 12) : null
      };
    }
  };

  // 구글맵 스타일: 기본 지명 숨기기 + 행정구역 경계 강조
  const mapStyles = [
    // 행정구역 경계선 강조 (적색 선 -> 두께 더 얇게 축소)
    { featureType: 'administrative.province', elementType: 'geometry.stroke', stylers: [{ color: '#dc2626' }, { weight: 1 }, { visibility: 'on' }] },
    { featureType: 'administrative.province', elementType: 'labels', stylers: [{ visibility: 'on' }, { color: '#ffffff' }] },
    { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{ color: '#ffffff' }, { weight: 2 }] },
    // 불필요한 라벨 숨기기 (지사 라벨과의 혼동 방지)
    { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
    { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
    { featureType: 'road', elementType: 'labels', stylers: [{ visibility: 'off' }] },
    { featureType: 'transit', elementType: 'labels', stylers: [{ visibility: 'off' }] },
    // 시/군/구 이름 축소 (지사명과 경쟁 최소화)
    { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#9ca3af' }, { lightness: 30 }] },
    { featureType: 'administrative.locality', elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
  ];

  const allJisas = Object.values(data.jisaMap).flat();

  // 뷰포트 컴링: 화면에 보이는 저수지만 필터링
  const visibleReservoirs = React.useMemo(() => {
    if (currentZoom < 11 || !mapBounds) return [];
    return data.allReservoirs.filter(res =>
      res.lat >= mapBounds.swLat && res.lat <= mapBounds.neLat &&
      res.lng >= mapBounds.swLng && res.lng <= mapBounds.neLng
    );
  }, [currentZoom, mapBounds, data.allReservoirs]);

  return (
    <>
      <AgentationClient />
      <div className="map-container">
        <LoadScript googleMapsApiKey={MAPS_API_KEY}>
          <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            center={center} 
            zoom={7.2} 
            mapTypeId="satellite" 
            options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
            onLoad={onLoad}
            onZoomChanged={onZoomChanged}
            onIdle={onIdle}
          >
            {!loading && (
              <>
                {/* 1. 뷰포트 컴링: 화면에 보이는 저수지만 렌더링 (줌 10+) */}
                {visibleReservoirs.map((res, idx) => (
                  <Marker 
                    key={`res-${res.lat}-${res.lng}`} 
                    position={{ lat: res.lat, lng: res.lng }} 
                    icon={getMarkerIcon('reservoir', res.riskClass, currentZoom)}
                    onClick={() => setSelectedJisa(res)}
                    {...(currentZoom >= 11 ? { label: {
                      text: `${res.name}, ${res.rate}%`,
                      color: '#ffffff',
                      fontSize: '11px',
                      className: 'reservoir-label'
                    }} : {})}
                  />
                ))}

                {/* 2. 그 위에 93개 지사 덮기 (건물) - 지사가 더 눈에 띄게 */}
                {allJisas.map((jisa, idx) => (
                  <Marker 
                    key={`jisa-${idx}`} 
                    position={{ lat: jisa.lat, lng: jisa.lng }} 
                    icon={getMarkerIcon('jisa', jisa.riskClass, currentZoom)}
                    onClick={() => setSelectedJisa(jisa)}
                    onMouseOver={() => setHoveredJisa(jisa)}
                    onMouseOut={() => setHoveredJisa(null)}
                    zIndex={999}
                    label={{
                      text: `${jisa.name}`,
                      color: '#ffffff',
                      fontSize: '13px',
                      className: `jisa-label jisa-label-${jisa.riskClass}`
                    }}
                  />
                ))}
              </>
            )}

            {hoveredJisa && (
              <OverlayView
                position={{ lat: hoveredJisa.lat, lng: hoveredJisa.lng }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div className="custom-jisa-tooltip">
                  <div className="tooltip-header">
                    <span className="title">{hoveredJisa.name}</span>
                    <span style={{ 
                      fontWeight: 'bold', fontSize: '13px',
                      color: hoveredJisa.riskClass === 'severe' ? '#ff0000' : 
                             hoveredJisa.riskClass === 'alert' ? '#ff6600' : 
                             hoveredJisa.riskClass === 'warn' ? '#ffcc00' : '#0066ff' 
                    }}>
                      {hoveredJisa.riskStr}
                    </span>
                  </div>
                  <div className="tooltip-body">
                    <div className="tooltip-stat"><span>저수율</span><strong>{hoveredJisa.rate}%</strong></div>
                    <div className="tooltip-divider"></div>
                    <div className="tooltip-stat"><span>평년대비</span><strong>{hoveredJisa.perRate}%</strong></div>
                    <div className="tooltip-divider"></div>
                    <div className="tooltip-counts">
                      <div><strong>총 {((hoveredJisa.counts?.safe || 0) + (hoveredJisa.counts?.warn || 0) + (hoveredJisa.counts?.alert || 0) + (hoveredJisa.counts?.severe || 0)).toLocaleString()}개소</strong></div>
                      <div className="counts-row">
                        <span style={{color: '#0066ff'}}>관심 {(hoveredJisa.counts?.safe || 0).toLocaleString()}</span>
                        <span style={{color: '#f59e0b'}}>주의 {(hoveredJisa.counts?.warn || 0).toLocaleString()}</span>
                        <span style={{color: '#f97316'}}>경계 {(hoveredJisa.counts?.alert || 0).toLocaleString()}</span>
                        <span style={{color: '#ef4444'}}>심각 {(hoveredJisa.counts?.severe || 0).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </OverlayView>
            )}

            {selectedJisa && selectedJisa.type === 'reservoir' && (
              <OverlayView
                position={{ lat: selectedJisa.lat, lng: selectedJisa.lng }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div className="custom-reservoir-tooltip">
                  <div className="tooltip-header">
                    <span className="title">💧 {selectedJisa.name}</span>
                    <span style={{ 
                      fontWeight: 'bold', fontSize: '13px',
                      color: selectedJisa.riskClass === 'severe' ? '#ff0000' : 
                             selectedJisa.riskClass === 'alert' ? '#ff6600' : 
                             selectedJisa.riskClass === 'warn' ? '#ffcc00' : '#0066ff' 
                    }}>
                      {selectedJisa.riskStr}
                    </span>
                  </div>
                  <div className="tooltip-body">
                    <div className="tooltip-stat"><span>유효저수량</span><strong>{selectedJisa.effVol.toLocaleString()} 톤</strong></div>
                    <div className="tooltip-stat"><span>현재저수량</span><strong>{selectedJisa.curVol.toLocaleString()} 톤</strong></div>
                    <div className="tooltip-divider"></div>
                    <div className="tooltip-stat"><span>저수율</span><strong>{selectedJisa.rate}%</strong></div>
                    <div className="tooltip-divider"></div>
                    <div className="tooltip-stat"><span>평년저수율</span><strong>{selectedJisa.nrRate}%</strong></div>
                    <div className="tooltip-stat"><span>평년대비</span><strong>{selectedJisa.perRate}%</strong></div>
                  </div>
                  <button className="tooltip-close-btn" onClick={(e) => { e.stopPropagation(); setSelectedJisa(null); }}>✕</button>
                </div>
              </OverlayView>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      <header className="header-bar glass-panel">
        <div className="header-left">
          <span style={{ fontSize: '28px', marginRight: '10px' }}>💧</span>
          <h1 style={{ margin: 0, fontWeight: 800, fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>한국농어촌공사 가뭄상황실</h1>
        </div>
        
        <div className="header-center">
          {data.national && (
            <div className="header-national">
              <span className="header-national-label">전국 종합</span>
              <span className="header-national-rate">저수율 <strong>{data.national.cr_rate}%</strong></span>
              <span className="header-national-rate">평년대비 <strong>{data.national.per_rate}%</strong></span>
              <span className="header-national-divider">│</span>
              <span className="header-national-counts">
                총 <strong style={{color:'#fff'}}>{(data.national.counts.safe + data.national.counts.warn + data.national.counts.alert + data.national.counts.severe).toLocaleString()}</strong>{' '}
                관심 <strong style={{color:'#0066ff'}}>{data.national.counts.safe.toLocaleString()}</strong>{' '}
                주의 <strong style={{color:'#ffcc00'}}>{data.national.counts.warn.toLocaleString()}</strong>{' '}
                경계 <strong style={{color:'#ff6600'}}>{data.national.counts.alert.toLocaleString()}</strong>{' '}
                심각 <strong style={{color:'#ff0000'}}>{data.national.counts.severe.toLocaleString()}</strong>
              </span>
            </div>
          )}
        </div>

        <div className="header-right">
          <span className="header-badge">업데이트: {updateTime}</span>
          <span className="header-badge refresh-countdown">
            {refreshing ? (
              <span className="refresh-spinning">🔄 갱신 중...</span>
            ) : (
              <>
                다음 갱신까지{' '}
                <strong>
                  {String(Math.floor(nextRefreshSec / 60)).padStart(2, '0')}:{String(nextRefreshSec % 60).padStart(2, '0')}
                </strong>
              </>
            )}
          </span>
          <button
            className="header-refresh-btn"
            onClick={() => { fetchData(false); setNextRefreshSec(600); }}
            disabled={refreshing}
            title="지금 즉시 데이터 갱신"
          >
            {refreshing ? '⏳' : '↺'} 수동 갱신
          </button>
        </div>
      </header>

      {/* 좌측: 지역본부 리스트 */}
      <aside className="sidebar glass-panel">
        <div className="sidebar-list">
          {loading ? <div style={{padding:'20px', textAlign:'center'}}>데이터 로딩중...</div> : 
            data.bonbuList.map((bonbu) => {
              // 본부 카드 전체 위험도 칩 상태 산출
              let bRiskStr = '관심'; let bRiskStatusClass = 'status-safe';
              if (bonbu.riskStr === '심각') { bRiskStr = '심각'; bRiskStatusClass = 'status-alert'; }
              else if (bonbu.riskStr === '경계') { bRiskStr = '경계'; bRiskStatusClass = 'status-warn'; /* 오렌지색이 css에 없어서 주의로 매핑하거나 추가 가능 */ }
              else if (bonbu.riskStr === '주의') { bRiskStr = '주의'; bRiskStatusClass = 'status-warn'; }

              return (
                <div 
                  key={bonbu.name} 
                  className={`bonbu-card ${selectedBonbu === bonbu.name ? 'active' : ''}`}
                  onClick={() => setSelectedBonbu(bonbu.name === selectedBonbu ? null : bonbu.name)}
                >
                  <div className="card-left">
                    <h3>{bonbu.name}</h3>
                    <div className={`overall-risk ${bRiskStatusClass}`}>{bRiskStr}</div>
                  </div>
                  <div className="card-right">
                    <div className="card-right-top">
                      <span>현재 <strong>{bonbu.rate}%</strong></span>
                      <span>평년대비 <strong>{bonbu.perRate > 0 ? bonbu.perRate.toFixed(1) : '0.0'}%</strong></span>
                    </div>
                    <div className="card-right-bottom">
                      <div className="risk-summary">
                        <span>총<strong>{(bonbu.counts.safe + bonbu.counts.warn + bonbu.counts.alert + bonbu.counts.severe).toLocaleString()}</strong></span>
                        <span>관심<strong className="text-safe">{bonbu.counts.safe.toLocaleString()}</strong></span>
                        <span>주의<strong className="text-warn">{bonbu.counts.warn.toLocaleString()}</strong></span>
                        <span>경계<strong className="text-alert">{bonbu.counts.alert.toLocaleString()}</strong></span>
                        <span>심각<strong className="text-severe">{bonbu.counts.severe.toLocaleString()}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </aside>

      {/* 중앙 지사 리스트 패널 */}
      <div className={`detail-panel glass-panel ${selectedBonbu ? 'open' : ''}`}>
        <div className="detail-header">
          <h2>{selectedBonbu} 지사 리스트</h2>
          <button className="close-btn" onClick={() => { setSelectedBonbu(null); setSelectedJisaDetail(null); }}>✕</button>
        </div>
        <div className="sidebar-list">
          {selectedBonbu && data.jisaMap[selectedBonbu] && data.jisaMap[selectedBonbu].map(jisa => {
            let bRiskStatusClass = 'status-safe';
            if(jisa.riskClass === 'severe') bRiskStatusClass = 'status-alert';
            else if(jisa.riskClass === 'warn' || jisa.riskClass === 'alert') bRiskStatusClass = 'status-warn';

            return (
              <div 
                key={jisa.name} 
                className={`bonbu-card ${selectedJisaDetail?.name === jisa.name ? 'selected' : ''}`}
                onClick={() => setSelectedJisaDetail(jisa)}
              >
                <div className="card-left">
                  <h3>{jisa.name}</h3>
                  <div className={`overall-risk ${bRiskStatusClass}`}>{jisa.riskStr}</div>
                </div>
                <div className="card-right">
                  <div className="card-right-top">
                    <span>현재 <strong>{jisa.rate}%</strong></span>
                    <span>평년대비 <strong>{jisa.perRate > 0 ? jisa.perRate.toFixed(1) : '0.0'}%</strong></span>
                  </div>
                  <div className="card-right-bottom">
                    <div className="risk-summary">
                      <span>총<strong>{((jisa.counts?.safe || 0) + (jisa.counts?.warn || 0) + (jisa.counts?.alert || 0) + (jisa.counts?.severe || 0)).toLocaleString()}</strong></span>
                      <span>관심<strong className="text-safe">{(jisa.counts?.safe || 0).toLocaleString()}</strong></span>
                      <span>주의<strong className="text-warn">{(jisa.counts?.warn || 0).toLocaleString()}</strong></span>
                      <span>경계<strong className="text-alert">{(jisa.counts?.alert || 0).toLocaleString()}</strong></span>
                      <span>심각<strong className="text-severe">{(jisa.counts?.severe || 0).toLocaleString()}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 우측 개별 저수지 슬라이드 패널 */}
      <div className={`sub-detail-panel glass-panel ${selectedJisaDetail ? 'open' : ''}`}>
        <div className="detail-header">
          <h2>{selectedJisaDetail?.name} 저수지 현황</h2>
          <button className="close-btn" onClick={() => setSelectedJisaDetail(null)}>✕</button>
        </div>
        <div className="res-list">
          {selectedJisaDetail && data.allReservoirs
            .filter(r => r.bonbu === selectedBonbu && r.jisa === selectedJisaDetail.name)
            .map(res => {
              let rStatusClass = 'status-safe';
              if(res.riskClass === 'severe') rStatusClass = 'status-alert';
              else if(res.riskClass === 'warn' || res.riskClass === 'alert') rStatusClass = 'status-warn';

              return (
                <div key={res.name} className="res-item">
                  <span className="res-name">💧 {res.name}</span>
                  <div>
                    <span className={`res-status ${rStatusClass}`}>{res.riskStr}</span>
                    <span className="res-rate">{res.rate}%</span>
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
