import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer, OverlayView } from '@react-google-maps/api';
import AgentationClient from './components/AgentationClient';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSoyFDRrMUP7nCIqMVPCHiVxBxC5evqUfwmMhpq_zVUznEuaqor2Lnb0wMLnlWYlIIihf8_7oMSamDQ/pub?output=csv';
// 요약스냅샷 시트 공개 CSV URL (시트 게시 후 대표님이 확인 필요)
const SUMMARY_SNAPSHOT_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSoyFDRrMUP7nCIqMVPCHiVxBxC5evqUfwmMhpq_zVUznEuaqor2Lnb0wMLnlWYlIIihf8_7oMSamDQ/pub?gid=1133508969&single=true&output=csv';
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

// ── 증감 표시 헬퍼 ──────────────────────────────────────────
function DeltaBadge({ value, unit = '', isInteger = false }) {
  if (value === null || value === undefined || isNaN(value)) return null;
  const num = parseFloat(value);
  if (num === 0) return <span style={{ color: '#9ca3af', fontSize: '0.78em', marginLeft: 2, fontWeight: 500 }}>(-)</span>;
  const up = num > 0;
  const valStr = isInteger ? Math.abs(Math.round(num)).toLocaleString() : Math.abs(num).toFixed(1);
  return (
    <span style={{
      color: up ? '#60a5fa' : '#f87171',
      fontSize: '0.78em',
      marginLeft: 2,
      fontWeight: 600,
      letterSpacing: '-0.02em'
    }}>
      ({up ? '▲' : '▼'}{valStr}{unit})
    </span>
  );
}

// ── SVG 꺾은선 그래프 (우측 패널용) ────────────────────────
function SparkLine({ data, color, label }) {
  const W = 270, H = 95, PAD = { t: 18, r: 16, b: 22, l: 16 };
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;

  if (!data || data.length === 0) {
    return (
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height: H, color:'#6b7280', fontSize:'0.8rem' }}>
        데이터 수집 중...
      </div>
    );
  }

  const vals = data.map(d => d.value);
  const realMax = Math.max(...vals, 1);
  const realMin = Math.min(...vals);
  const diff = realMax - realMin;
  const margin = Math.max(diff * 0.4, 4); // 상하단 40% 여유 마진으로 변화 폭 완화
  const maxV = realMax + margin;
  const minV = Math.max(0, realMin - margin);
  const range = maxV - minV || 1;

  const toX = i => PAD.l + (i / (data.length - 1 || 1)) * innerW;
  const toY = v => PAD.t + innerH - ((v - minV) / range) * innerH;

  const polyline = data.map((d, i) => `${toX(i)},${toY(d.value)}`).join(' ');
  const fillPath = `M${toX(0)},${toY(data[0].value)} ` +
    data.map((d, i) => `L${toX(i)},${toY(d.value)}`).join(' ') +
    ` L${toX(data.length - 1)},${PAD.t + innerH} L${toX(0)},${PAD.t + innerH} Z`;

  return (
    <svg width={W} height={H} style={{ overflow: 'visible', display: 'block', margin: '0 auto' }}>
      <defs>
        <linearGradient id={`grad-${label}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.01" />
        </linearGradient>
      </defs>

      {/* 면적 채우기 */}
      <path d={fillPath} fill={`url(#grad-${label})`} />

      {/* 꺾은선 */}
      <polyline points={polyline} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

      {/* 데이터 포인트 + 상단 수치(값) 상시 표시 */}
      {data.map((d, i) => {
        const cx = toX(i);
        const cy = toY(d.value);
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={3} fill="#ffffff" stroke={color} strokeWidth="1.5" />
            <text x={cx} y={cy - 7} textAnchor="middle" fill="#e2e8f0" fontSize="9.5" fontWeight="700">
              {d.value.toLocaleString()}
            </text>
          </g>
        );
      })}

      {/* X축 날짜 라벨 (데이터값과 100% 동일한 폰트, 크기, 굵기, 색상) */}
      {data.map((d, i) => (
        <text key={i} x={toX(i)} y={H - 3} textAnchor="middle" fill="#e2e8f0" fontSize="9.5" fontWeight="700">
          {d.date.slice(5)}
        </text>
      ))}
    </svg>
  );
}

// ── 가뭄위험 단일 판정 헬퍼 (Code.gs와 100% 동일) ───────────────────
function classifyDroughtRisk(riskStr, normalComp) {
  const rStr = (riskStr || '').toString().trim();
  if (rStr === '심각') return 'severe';
  if (rStr === '경계') return 'alert';
  if (rStr === '주의') return 'warn';
  if (rStr === '관심') return 'safe';

  const comp = parseFloat(normalComp);
  if (!isNaN(comp) && comp > 0) {
    if (comp > 60) return 'safe';
    if (comp > 50) return 'warn';
    if (comp > 40) return 'alert';
    return 'severe';
  }
  return 'safe'; // 결측치는 기본 관심(safe)으로 귀속
}

function App() {
  const [data, setData] = useState({ national: null, bonbuList: [], jisaMap: {}, allReservoirs: [] });
  const [snapshotRows, setSnapshotRows] = useState([]); // 요약스냅샷 CSV 파싱 결과
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
          const crChange = parseFloat(row[7]); // 변화율(%) = 현재-전일
          const nrRate = parseFloat(row[8]);
          const perRate = parseFloat(row[9]); // 평년대비
          const riskLevel = row[13]; 
          let lat = parseFloat(row[14]);
          let lng = parseFloat(row[15]);

          if (bonbuCol.startsWith('전국') && jisaCol.includes('전체 평균')) {
            natData = { cr_rate: crRate, cr_change: isNaN(crChange) ? 0 : crChange, nr_rate: nrRate, per_rate: perRate, counts: { safe: 0, warn: 0, alert: 0, severe: 0 } };
            continue;
          }

          // 1. 본부 요약
          if (bonbuCol.includes('개소') && jisaCol.includes('평균') && !jisaCol.includes('전체')) {
            const rawBonbu = bonbuCol.split(' ')[0]; 
            bMap[rawBonbu] = { 
              name: rawBonbu, rate: crRate, crChange: isNaN(crChange) ? 0 : crChange,
              nrRate: nrRate, perRate: perRate, riskStr: riskLevel,
              counts: { safe:0, warn:0, alert:0, severe:0 } // 관심/주의/경계/심각 갯수 카운터
            };
            if(!jMap[rawBonbu]) jMap[rawBonbu] = [];
            continue;
          }

          // 2. 지사 요약
          if (bonbuCol.length > 0 && !bonbuCol.includes('개소') && bonbuCol !== '전국' && jisaCol.includes('평균')) {
            const rawName = jisaCol.split(' 평균')[0];
            const riskClass = classifyDroughtRisk(riskLevel, perRate);

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

            const riskClass = classifyDroughtRisk(riskLevel, perRate);

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

    // 요약스냅샷 CSV 병렬 fetch
    const snapUrl = `${SUMMARY_SNAPSHOT_CSV_URL}&t=${Date.now()}`;
    fetch(snapUrl)
      .then(res => res.text())
      .then(csvText => {
        const lines = csvText.split('\n').filter(l => l.trim() !== '');
        const parsed = [];
        for (let i = 1; i < lines.length; i++) {
          const r = parseCSVRow(lines[i]);
          parsed.push({
            date:    (r[0] || '').trim(),
            gubun:   (r[1] || '').trim(),
            bonbu:   (r[2] || '').trim(),
            jisa:    (r[3] || '').trim(),
            rate:    parseFloat(r[4]),
            change:  parseFloat(r[5]),
            perRate: parseFloat(r[6]),
            safe:    parseInt(r[7]) || 0,
            warn:    parseInt(r[8]) || 0,
            alert:   parseInt(r[9]) || 0,
            severe:  parseInt(r[10]) || 0,
            total:   parseInt(r[11]) || 0,
          });
        }
        setSnapshotRows(parsed);
      })
      .catch(err => console.warn('요약스냅샷 로딩 실패(URL 미설정 가능):', err));
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

  // ── 스냅샷에서 전일 데이터 추출 헬퍼 ──────────────────────────
  const todayStr = new Date().toISOString().slice(0, 10);
  const sortedDates = [...new Set(snapshotRows.map(r => r.date))].sort();
  const todayIdx = sortedDates.indexOf(todayStr);
  const prevDate = todayIdx > 0 ? sortedDates[todayIdx - 1] : (sortedDates.length > 0 ? null : null);
  // 전일이 없을 경우 가장 최근 날짜를 전일로 간주
  const prevDateFinal = prevDate || (sortedDates.length >= 2 ? sortedDates[sortedDates.length - 2] : null);

  const getPrevNational = () => snapshotRows.find(r => r.date === prevDateFinal && r.gubun === '전국');
  const getPrevBonbu = (bonbuName) => snapshotRows.find(r => r.date === prevDateFinal && r.gubun === '본부' && r.bonbu === bonbuName);
  const getPrevJisa = (bonbuName, jisaName) => snapshotRows.find(r => r.date === prevDateFinal && r.gubun === '지사' && r.bonbu === bonbuName && r.jisa === jisaName);

  // 그래프용: 날짜별 전국 요약 데이터 (최근 10일)
  const getChartData = (field) =>
    sortedDates.slice(-10).map(d => {
      const row = snapshotRows.find(r => r.date === d && r.gubun === '전국');
      return { date: d, value: row ? (row[field] || 0) : 0 };
    });

  const prevNat = getPrevNational();

  // 가뭄단계 개소수 전일대비 계산
  const natDelta = prevNat ? {
    safe:   (data.national?.counts?.safe   || 0) - prevNat.safe,
    warn:   (data.national?.counts?.warn   || 0) - prevNat.warn,
    alert:  (data.national?.counts?.alert  || 0) - prevNat.alert,
    severe: (data.national?.counts?.severe || 0) - prevNat.severe,
  } : null;

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

            {(hoveredJisa || (selectedJisa && selectedJisa.type === 'jisa')) && (
              <OverlayView
                position={{ lat: (hoveredJisa || selectedJisa).lat, lng: (hoveredJisa || selectedJisa).lng }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div className="custom-jisa-tooltip">
                  <div className="tooltip-header">
                    <span className="title">{(hoveredJisa || selectedJisa).name}</span>
                    <span style={{ 
                      fontWeight: 'bold', fontSize: '13px',
                      color: (hoveredJisa || selectedJisa).riskClass === 'severe' ? '#ff0000' : 
                             (hoveredJisa || selectedJisa).riskClass === 'alert' ? '#ff6600' : 
                             (hoveredJisa || selectedJisa).riskClass === 'warn' ? '#ffcc00' : '#0066ff' 
                    }}>
                      {(hoveredJisa || selectedJisa).riskStr}
                    </span>
                  </div>
                  <div className="tooltip-body">
                    <div className="tooltip-stat"><span>저수율</span><strong>{(hoveredJisa || selectedJisa).rate}%</strong></div>
                    <div className="tooltip-divider"></div>
                    <div className="tooltip-stat"><span>평년대비</span><strong>{(hoveredJisa || selectedJisa).perRate}%</strong></div>
                    <div className="tooltip-divider"></div>
                    <div className="tooltip-counts">
                      <div><strong>총 {(((hoveredJisa || selectedJisa).counts?.safe || 0) + (((hoveredJisa || selectedJisa).counts?.warn || 0)) + (((hoveredJisa || selectedJisa).counts?.alert || 0)) + (((hoveredJisa || selectedJisa).counts?.severe || 0))).toLocaleString()}개소</strong></div>
                      <div className="counts-row">
                        <span style={{color: '#0066ff'}}>관심 {((hoveredJisa || selectedJisa).counts?.safe || 0).toLocaleString()}</span>
                        <span style={{color: '#f59e0b'}}>주의 {((hoveredJisa || selectedJisa).counts?.warn || 0).toLocaleString()}</span>
                        <span style={{color: '#f97316'}}>경계 {((hoveredJisa || selectedJisa).counts?.alert || 0).toLocaleString()}</span>
                        <span style={{color: '#ef4444'}}>심각 {((hoveredJisa || selectedJisa).counts?.severe || 0).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <button className="tooltip-close-btn" onClick={(e) => { e.stopPropagation(); setHoveredJisa(null); if (selectedJisa && selectedJisa.type === 'jisa') setSelectedJisa(null); }}>✕</button>
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
              <span className="header-national-rate">
                저수율 <strong>{data.national.cr_rate}%</strong>
                <DeltaBadge value={data.national.cr_change} unit="" />
              </span>
              <span className="header-national-rate">평년대비 <strong>{data.national.per_rate}%</strong></span>
              <span className="header-national-divider">│</span>
              <span className="header-national-counts">
                총 <strong style={{color:'#fff'}}>{(data.national.counts.safe + data.national.counts.warn + data.national.counts.alert + data.national.counts.severe).toLocaleString()}</strong>{' '}
                관심 <strong style={{color:'#0066ff'}}>{data.national.counts.safe.toLocaleString()}</strong>
                {natDelta && <DeltaBadge value={natDelta.safe} isInteger={true} />}{' '}
                주의 <strong style={{color:'#ffcc00'}}>{data.national.counts.warn.toLocaleString()}</strong>
                {natDelta && <DeltaBadge value={natDelta.warn} isInteger={true} />}{' '}
                경계 <strong style={{color:'#ff6600'}}>{data.national.counts.alert.toLocaleString()}</strong>
                {natDelta && <DeltaBadge value={natDelta.alert} isInteger={true} />}{' '}
                심각 <strong style={{color:'#ff0000'}}>{data.national.counts.severe.toLocaleString()}</strong>
                {natDelta && <DeltaBadge value={natDelta.severe} isInteger={true} />}
              </span>
            </div>
          )}
        </div>

        <div className="header-right">
          <span className="header-badge">업데이트: {updateTime}</span>
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
                <React.Fragment key={bonbu.name}>
                <div 
                  className={`bonbu-card ${selectedBonbu === bonbu.name ? 'active' : ''}`}
                  onClick={() => setSelectedBonbu(bonbu.name === selectedBonbu ? null : bonbu.name)}
                >
                  <div className="card-left">
                    <h3>{bonbu.name}</h3>
                    <div className={`overall-risk ${bRiskStatusClass}`}>{bRiskStr}</div>
                  </div>
                  <div className="card-right">
                    <div className="card-right-top">
                      <span>현재 <strong>{bonbu.rate}%</strong><DeltaBadge value={bonbu.crChange} /></span>
                      <span>평년대비 <strong>{bonbu.perRate > 0 ? bonbu.perRate.toFixed(1) : '0.0'}%</strong></span>
                    </div>
                    <div className="card-right-bottom">
                      {(() => {
                        const prevB = getPrevBonbu(bonbu.name);
                        const bd = prevB ? {
                          safe:   bonbu.counts.safe   - prevB.safe,
                          warn:   bonbu.counts.warn   - prevB.warn,
                          alert:  bonbu.counts.alert  - prevB.alert,
                          severe: bonbu.counts.severe - prevB.severe,
                        } : null;
                        return (
                          <div className="risk-summary">
                            <span>총<strong>{(bonbu.counts.safe + bonbu.counts.warn + bonbu.counts.alert + bonbu.counts.severe).toLocaleString()}</strong></span>
                            <span>관심<strong className="text-safe">{bonbu.counts.safe.toLocaleString()}</strong>{bd && <DeltaBadge value={bd.safe} isInteger={true} />}</span>
                            <span>주의<strong className="text-warn">{bonbu.counts.warn.toLocaleString()}</strong>{bd && <DeltaBadge value={bd.warn} isInteger={true} />}</span>
                            <span>경계<strong className="text-alert">{bonbu.counts.alert.toLocaleString()}</strong>{bd && <DeltaBadge value={bd.alert} isInteger={true} />}</span>
                            <span>심각<strong className="text-severe">{bonbu.counts.severe.toLocaleString()}</strong>{bd && <DeltaBadge value={bd.severe} isInteger={true} />}</span>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>

                {/* 모바일용 아코디언 패널 (지사 리스트 및 저수지) */}
                {selectedBonbu === bonbu.name && (
                  <div className="mobile-accordion">
                    {data.jisaMap[bonbu.name] && data.jisaMap[bonbu.name].map(jisa => {
                      let jRiskStatusClass = 'status-safe';
                      if(jisa.riskClass === 'severe') jRiskStatusClass = 'status-alert';
                      else if(jisa.riskClass === 'warn' || jisa.riskClass === 'alert') jRiskStatusClass = 'status-warn';

                      return (
                        <React.Fragment key={`mobile-jisa-${jisa.name}`}>
                          <div 
                            className={`bonbu-card accordion-card ${selectedJisaDetail?.name === jisa.name ? 'selected' : ''}`}
                            onClick={() => setSelectedJisaDetail(selectedJisaDetail?.name === jisa.name ? null : jisa)}
                          >
                            <div className="card-left">
                              <h3 style={{fontSize: '0.9rem'}}>{jisa.name}</h3>
                              <div className={`overall-risk ${jRiskStatusClass}`}>{jisa.riskStr}</div>
                            </div>
                            {(() => {
                              const prevJ = getPrevJisa(bonbu.name, jisa.name);
                              const jd = prevJ ? {
                                safe:   (jisa.counts?.safe || 0)   - prevJ.safe,
                                warn:   (jisa.counts?.warn || 0)   - prevJ.warn,
                                alert:  (jisa.counts?.alert || 0)  - prevJ.alert,
                                severe: (jisa.counts?.severe || 0) - prevJ.severe,
                              } : null;
                              const rateDiff = jisa.change !== undefined ? jisa.change : (prevJ ? jisa.rate - prevJ.rate : null);

                              return (
                                <div className="card-right">
                                  <div className="card-right-top" style={{fontSize: '0.95rem'}}>
                                    <span>현재 <strong>{jisa.rate}%</strong><DeltaBadge value={rateDiff} /></span>
                                    <span>평년대비 <strong>{jisa.perRate > 0 ? jisa.perRate.toFixed(1) : '0.0'}%</strong></span>
                                  </div>
                                  <div className="card-right-bottom" style={{fontSize: '0.85rem'}}>
                                    <div className="risk-summary">
                                      <span>총<strong>{((jisa.counts?.safe || 0) + (jisa.counts?.warn || 0) + (jisa.counts?.alert || 0) + (jisa.counts?.severe || 0)).toLocaleString()}</strong></span>
                                      <span>관심<strong className="text-safe">{(jisa.counts?.safe || 0).toLocaleString()}</strong>{jd && <DeltaBadge value={jd.safe} isInteger={true} />}</span>
                                      <span>주의<strong className="text-warn">{(jisa.counts?.warn || 0).toLocaleString()}</strong>{jd && <DeltaBadge value={jd.warn} isInteger={true} />}</span>
                                      <span>경계<strong className="text-alert">{(jisa.counts?.alert || 0).toLocaleString()}</strong>{jd && <DeltaBadge value={jd.alert} isInteger={true} />}</span>
                                      <span>심각<strong className="text-severe">{(jisa.counts?.severe || 0).toLocaleString()}</strong>{jd && <DeltaBadge value={jd.severe} isInteger={true} />}</span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>

                          {/* 모바일용 저수지 리스트 */}
                          {selectedJisaDetail?.name === jisa.name && (
                            <div className="mobile-res-list">
                              {data.allReservoirs
                                .filter(r => r.bonbu === selectedBonbu && r.jisa === selectedJisaDetail.name)
                                .map(res => {
                                  let rStatusClass = 'status-safe';
                                  if(res.riskClass === 'severe') rStatusClass = 'status-alert';
                                  else if(res.riskClass === 'warn' || res.riskClass === 'alert') rStatusClass = 'status-warn';
                    
                                  return (
                                    <div key={`mobile-res-${res.name}`} className="res-item">
                                      <span className="res-name">💧 {res.name}</span>
                                      <div>
                                        <span className={`res-status ${rStatusClass}`}>{res.riskStr}</span>
                                        <span className="res-rate">{res.rate}%</span>
                                      </div>
                                    </div>
                                  )
                              })}
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
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
                {(() => {
                  const prevJ = getPrevJisa(selectedBonbu, jisa.name);
                  const jd = prevJ ? {
                    safe:   (jisa.counts?.safe || 0)   - prevJ.safe,
                    warn:   (jisa.counts?.warn || 0)   - prevJ.warn,
                    alert:  (jisa.counts?.alert || 0)  - prevJ.alert,
                    severe: (jisa.counts?.severe || 0) - prevJ.severe,
                  } : null;
                  const rateDiff = jisa.change !== undefined ? jisa.change : (prevJ ? jisa.rate - prevJ.rate : null);

                  return (
                    <div className="card-right">
                      <div className="card-right-top">
                        <span>현재 <strong>{jisa.rate}%</strong><DeltaBadge value={rateDiff} /></span>
                        <span>평년대비 <strong>{jisa.perRate > 0 ? jisa.perRate.toFixed(1) : '0.0'}%</strong></span>
                      </div>
                      <div className="card-right-bottom">
                        <div className="risk-summary">
                          <span>총<strong>{((jisa.counts?.safe || 0) + (jisa.counts?.warn || 0) + (jisa.counts?.alert || 0) + (jisa.counts?.severe || 0)).toLocaleString()}</strong></span>
                          <span>관심<strong className="text-safe">{(jisa.counts?.safe || 0).toLocaleString()}</strong>{jd && <DeltaBadge value={jd.safe} isInteger={true} />}</span>
                          <span>주의<strong className="text-warn">{(jisa.counts?.warn || 0).toLocaleString()}</strong>{jd && <DeltaBadge value={jd.warn} isInteger={true} />}</span>
                          <span>경계<strong className="text-alert">{(jisa.counts?.alert || 0).toLocaleString()}</strong>{jd && <DeltaBadge value={jd.alert} isInteger={true} />}</span>
                          <span>심각<strong className="text-severe">{(jisa.counts?.severe || 0).toLocaleString()}</strong>{jd && <DeltaBadge value={jd.severe} isInteger={true} />}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
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

      {/* 우측 4개 박스 — 최근 10일 꺾은선 그래프 */}
      <div className="trend-panels">
        {[
          { label: '심각', field: 'severe', color: '#ef4444' },
          { label: '경계', field: 'alert',  color: '#f97316' },
          { label: '주의', field: 'warn',   color: '#f59e0b' },
          { label: '관심', field: 'safe',   color: '#3b82f6' },
        ].map(({ label, field, color }) => (
          <div key={field} className="trend-box glass-panel">
            <div className="trend-box-header" style={{ borderColor: color }}>
              <span className="trend-box-title" style={{ color }}>{label} 추이</span>
              <span className="trend-box-sub">최근 10일 (전국)</span>
            </div>
            <SparkLine data={getChartData(field)} color={color} label={field} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
