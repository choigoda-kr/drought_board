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

// ── 수치 전역 포맷터 (저수량: 정수 버림, 저수율/평년대비: 소수점 1자리) ─────
const fmtVol = (val) => Math.floor(Number(val) || 0).toLocaleString();
const fmtRate = (val) => Number(val || 0).toFixed(1);
const fmtPerRate = (val) => Number(val || 0).toFixed(1);

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
  const W = 270, H = 75, PAD = { t: 14, r: 16, b: 18, l: 16 };
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

export function formatJisaName(name) {
  if (!name) return name;
  if (name === '속초.고성.양양') return '영북';
  if (name === '철원.화천') return '철원';
  return name;
}

function App() {
  const [data, setData] = useState({ national: null, bonbuList: [], jisaMap: {}, allReservoirs: [] });
  const [snapshotRows, setSnapshotRows] = useState([]); // 요약스냅샷 CSV 파싱 결과
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [nextRefreshSec, setNextRefreshSec] = useState(600);
  const [selectedBonbu, setSelectedBonbu] = useState('전국');
  const [selectedJisa, setSelectedJisa] = useState(null);
  const [hoveredRes, setHoveredRes] = useState(null);
  const [selectedJisaDetail, setSelectedJisaDetail] = useState(null);
  const [showRadar, setShowRadar] = useState(true);
  const [radarPath, setRadarPath] = useState(null);
  const [radarTimestamp, setRadarTimestamp] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [hoveredJisa, setHoveredJisa] = useState(null);
  const [pinnedJisa, setPinnedJisa] = useState(null);
  const [updateTime, setUpdateTime] = useState('');

  // 스마트 데이터창 & 동적 SVG 연결선(Leader Line) 픽셀 좌표 추적
  const [leaderCoords, setLeaderCoords] = useState(null);
  const mapContainerRef = useRef(null);
  const calloutCardRef = useRef(null);
  const hoveredAnchorRef = useRef(null);

  // 줌 레벨 추적용 상태 및 Ref
  const [currentZoom, setCurrentZoom] = useState(7.2);
  const [mapBounds, setMapBounds] = useState(null); // 뷰포트 컴링용
  const mapRef = useRef(null);

  // RainViewer API 연동 및 레이어 관리
  const fetchRadarData = useCallback(() => {
    fetch('https://api.rainviewer.com/public/weather-maps.json')
      .then(res => res.json())
      .then(d => {
        const past = d.radar.past;
        if (past && past.length > 0) {
          const latest = past[past.length - 1];
          setRadarPath(prev => prev !== latest.path ? latest.path : prev);
          setRadarTimestamp(prev => prev !== latest.time ? latest.time : prev);
        }
      })
      .catch(err => console.error("RainViewer API Error:", err));
  }, []);

  useEffect(() => {
    let radarInterval;
    if (showRadar) {
      // 켰을 때(또는 마운트 시) 최초 1회 즉시 호출
      fetchRadarData();
      // 이후 10분마다 갱신
      radarInterval = setInterval(() => {
        fetchRadarData();
      }, 600_000);
    }
    return () => {
      if (radarInterval) clearInterval(radarInterval);
    };
  }, [showRadar, fetchRadarData]);

  useEffect(() => {
    if (!mapRef.current) return;
    
    // 기존 레이어 제거
    mapRef.current.overlayMapTypes.clear();

    if (showRadar && radarPath) {
      const maxRadarZoom = 6;
      const radarMapType = {
        tileSize: new window.google.maps.Size(256, 256),
        maxZoom: 20,
        minZoom: 0,
        name: 'RainViewer',
        getTile: function (coord, zoom, ownerDocument) {
          const div = ownerDocument.createElement('div');
          div.style.width = '256px';
          div.style.height = '256px';
          div.style.overflow = 'hidden';
          div.style.opacity = '0.6';

          let z = zoom;
          let x = coord.x;
          let y = coord.y;
          let scale = 1;

          if (zoom > maxRadarZoom) {
            scale = Math.pow(2, zoom - maxRadarZoom);
            z = maxRadarZoom;
            x = Math.floor(coord.x / scale);
            y = Math.floor(coord.y / scale);
          }

          const img = ownerDocument.createElement('img');
          img.src = `https://tilecache.rainviewer.com${radarPath}/256/${z}/${x}/${y}/2/1_1.png`;
          img.style.width = `${256 * scale}px`;
          img.style.height = `${256 * scale}px`;
          img.style.border = 'none';
          img.style.margin = '0';
          img.style.padding = '0';

          if (scale > 1) {
            const offsetX = (coord.x % scale) * 256;
            const offsetY = (coord.y % scale) * 256;
            img.style.marginLeft = `-${offsetX}px`;
            img.style.marginTop = `-${offsetY}px`;
          }

          div.appendChild(img);
          return div;
        }
      };
      mapRef.current.overlayMapTypes.insertAt(0, radarMapType);
    }
  }, [showRadar, radarPath]);

  const activeJisa = hoveredJisa || pinnedJisa;

  const updateLeaderCoords = useCallback(() => {
    if (!activeJisa || !hoveredAnchorRef.current || !mapContainerRef.current || !calloutCardRef.current) {
      setLeaderCoords(null);
      return;
    }
    const mapRect = mapContainerRef.current.getBoundingClientRect();
    const anchorRect = hoveredAnchorRef.current.getBoundingClientRect();
    const cardRect = calloutCardRef.current.getBoundingClientRect();

    // 지사 박스 우측 테두리 외곽 지점에서 출발
    const startX = anchorRect.right - mapRect.left + 4;
    const startY = anchorRect.top + anchorRect.height / 2 - mapRect.top;
    
    // 동해 여백 화이트 박스 카드 좌측 테두리 외곽 지점에서 멈춤
    const endX = cardRect.left - mapRect.left - 2;
    const endY = cardRect.top + cardRect.height / 2 - mapRect.top;

    setLeaderCoords({ startX, startY, endX, endY });
  }, [activeJisa]);

  useEffect(() => {
    let animationFrameId;
    if (activeJisa) {
      const loop = () => {
        updateLeaderCoords();
        animationFrameId = requestAnimationFrame(loop);
      };
      loop();
      return () => cancelAnimationFrame(animationFrameId);
    } else {
      setLeaderCoords(null);
    }
  }, [activeJisa, updateLeaderCoords, currentZoom]);

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

  // 지사 클릭 시 지도 중심 이동 및 저수지 표출 배율(11.5) 확대 헬퍼
  const focusJisaOnMap = useCallback((jisa) => {
    if (!jisa || isNaN(jisa.lat) || isNaN(jisa.lng) || jisa.lat === 0 || jisa.lng === 0) return;
    if (mapRef.current) {
      mapRef.current.panTo({ lat: jisa.lat, lng: jisa.lng });
      mapRef.current.setZoom(11.5);
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
            date:         (r[0] || '').trim(),
            gubun:        (r[1] || '').trim(),
            bonbu:        (r[2] || '').trim(),
            jisa:         (r[3] || '').trim(),
            rate:         parseFloat(r[4]),
            change:       parseFloat(r[5]),
            perRate:      parseFloat(r[6]),
            safe:         parseInt(r[7]) || 0,
            warn:         parseInt(r[8]) || 0,
            alert:        parseInt(r[9]) || 0,
            severe:       parseInt(r[10]) || 0,
            total:        parseInt(r[11]) || 0,
            normalVol:    parseFloat(r[12]) || 0,
            currentVol:   parseFloat(r[13]) || 0,
            deficitVol:   parseFloat(r[14]) || 0,
            basinArea:    parseFloat(r[15]) || 0,
            neededRain:   parseFloat(r[16]) || 0,
            forecastRain: parseFloat(r[17]) || 0,
            addedVol:     parseFloat(r[18]) || 0,
            estVol:       parseFloat(r[19]) || 0,
            estRate:      parseFloat(r[20]) || 0,
            estNormalComp: parseFloat(r[21]) || 0,
            reliefStatus: (r[22] || '').trim(),
            forecastRain7d: parseFloat(r[23]) || 0,
            addedVol7d:     parseFloat(r[24]) || 0,
            estVol7d:       parseFloat(r[25]) || 0,
            estRate7d:      parseFloat(r[26]) || 0,
            estNormalComp7d: parseFloat(r[27]) || 0,
            reliefStatus7d: (r[28] || '').trim(),
          });

          if ((r[3] || '').trim() === '김해.양산.부산') {
            console.log('[DEBUG PARSE] 김해 CSV Row:', r);
          }
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

  // 그래프용: 날짜별 전국 요약 데이터 (최근 7일) - 최신 날짜는 실시간 집계 수치와 100% 동기화
  const getChartData = (field) => {
    const recentDates = sortedDates.slice(-7);
    return recentDates.map((d, index) => {
      if (index === recentDates.length - 1 && data.national?.counts && data.national.counts[field] !== undefined) {
        return { date: d, value: data.national.counts[field] };
      }
      const row = snapshotRows.find(r => r.date === d && r.gubun === '전국');
      return { date: d, value: row ? (row[field] || 0) : 0 };
    });
  };

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
      
      <div className="map-container" ref={mapContainerRef}>
        {isMobile ? (
          <div className="mobile-map-fallback">
            <div className="fallback-content">
              <span className="fallback-icon">🖥️</span>
              <p>자세한 내용은 PC에서 확인해 주세요</p>
            </div>
          </div>
        ) : (
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
                {/* 1. 뷰포트 컴링: 화면에 보이는 저수지 커스텀 칩 렌더링 (줌 11+) */}
                {visibleReservoirs.map((res, idx) => (
                  <OverlayView
                    key={`res-${res.lat}-${res.lng}`}
                    position={{ lat: res.lat, lng: res.lng }}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    getPixelPositionOffset={() => ({ x: 0, y: 0 })}
                  >
                    <div
                      className="res-marker-wrapper"
                      onClick={() => setSelectedJisa(res)}
                      onMouseEnter={() => setHoveredRes(res)}
                      onMouseLeave={() => setHoveredRes(null)}
                    >
                      {/* ① 물방울 SVG 마커 — 저수지 정확한 위치 anchor */}
                      <svg
                        className={`res-droplet-marker droplet-${res.riskClass}`}
                        viewBox="0 0 24 28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2 C12 2 3 10 3 16 A9 9 0 0 0 21 16 C21 10 12 2 12 2Z" />
                      </svg>

                      {/* ② 이름+저수율 라벨 — 물방울 우측상단 오프셋 */}
                      <div className={`res-label-chip chip-${res.riskClass}`}>
                        <span className="res-label-name">
                          {res.name}{res.jisa ? `(${formatJisaName(res.jisa)})` : ''}
                        </span>
                        <span className="res-label-rate">{fmtRate(res.rate)}%</span>
                      </div>
                    </div>
                  </OverlayView>
                ))}

                {/* 2. 그 위에 93개 지사 커스텀 칩 렌더링 (글자수 가변 뱃지 자동 밀착) */}
                {allJisas.map((jisa, idx) => {
                  const isWarnOrAbove = jisa.riskClass === 'warn' || jisa.riskClass === 'alert' || jisa.riskClass === 'severe';
                  const jSnap = isWarnOrAbove ? (
                    snapshotRows.find(r => r.date === todayStr && r.gubun === '지사' && r.jisa === jisa.name) ||
                    snapshotRows.find(r => r.gubun === '지사' && r.jisa === jisa.name)
                  ) : null;
                  
                  let badgeIcon = '';
                  let badgeClass = '';
                  let badgeIcon7d = '';
                  let badgeClass7d = '';
                  if (jSnap && jSnap.neededRain !== undefined) {
                    const predPerRate = jSnap.estNormalComp || 0;
                    if (predPerRate >= 60) { badgeIcon = '★'; badgeClass = 'safe'; }
                    else if (predPerRate >= 50) { badgeIcon = '★'; badgeClass = 'warn'; }
                    else if (predPerRate >= 40) { badgeIcon = '★'; badgeClass = 'alert'; }
                    else { badgeIcon = '★'; badgeClass = 'severe'; }
                    
                    const predPerRate7d = jSnap.estNormalComp7d || 0;
                    if (predPerRate7d >= 60) { badgeIcon7d = '★'; badgeClass7d = 'safe'; }
                    else if (predPerRate7d >= 50) { badgeIcon7d = '★'; badgeClass7d = 'warn'; }
                    else if (predPerRate7d >= 40) { badgeIcon7d = '★'; badgeClass7d = 'alert'; }
                    else { badgeIcon7d = '★'; badgeClass7d = 'severe'; }
                  }

                  return (
                    <OverlayView
                      key={`jisa-${idx}`}
                      position={{ lat: jisa.lat, lng: jisa.lng }}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                      <div 
                        ref={activeJisa?.name === jisa.name ? hoveredAnchorRef : null}
                        className={`custom-jisa-chip jisa-chip-${jisa.riskClass}`}
                        onClick={() => { setHoveredJisa(null); setPinnedJisa(jisa); setSelectedJisa(jisa); focusJisaOnMap(jisa); }}
                        onMouseOver={() => { if (!pinnedJisa) setHoveredJisa(jisa); }}
                        onMouseOut={() => { if (!pinnedJisa) setHoveredJisa(null); }}
                      >
                        <span className={`jisa-chip-risk-dot dot-${jisa.riskClass}`}></span>
                        <span className="jisa-chip-name">{formatJisaName(jisa.name)}</span>
                        {badgeIcon && (
                          <span className={`jisa-chip-badge ${badgeClass}`}>{badgeIcon}</span>
                        )}
                        {badgeIcon7d && (
                          <span className={`jisa-chip-badge ${badgeClass7d}`} style={{ marginLeft: '-4px' }}>{badgeIcon7d}</span>
                        )}
                      </div>
                    </OverlayView>
                  );
                })}

              </>
            )}

            {(() => {
              const activeRes = hoveredRes || (selectedJisa?.type === 'reservoir' ? selectedJisa : null);
              if (!activeRes) return null;
              return (
              <OverlayView
                position={{ lat: activeRes.lat, lng: activeRes.lng }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div className={`custom-reservoir-tooltip res-tooltip-${activeRes.riskClass}`}>
                  <div className="res-tooltip-header">
                    <div className="res-tooltip-title">
                      <span className="res-icon">💧</span>
                      <span className="res-name-text">{activeRes.name}{activeRes.jisa ? `(${formatJisaName(activeRes.jisa)})` : ''}</span>
                    </div>
                    <div className="res-header-right-group">
                      <span className={`res-risk-badge badge-${activeRes.riskClass}`}>
                        {activeRes.riskStr}
                      </span>
                      {selectedJisa?.type === 'reservoir' && selectedJisa === activeRes && (
                        <button className="tooltip-close-btn" onClick={(e) => { e.stopPropagation(); setSelectedJisa(null); }}>✕</button>
                      )}
                    </div>
                  </div>

                  <table className="res-tooltip-table">
                    <tbody>
                      <tr>
                        <th>유효저수량</th>
                        <td style={{ whiteSpace: 'nowrap' }}><strong>{fmtVol(activeRes.effVol / 1000)}</strong> 천m³</td>
                        <th>현재저수량</th>
                        <td style={{ whiteSpace: 'nowrap' }}><strong>{fmtVol(activeRes.curVol / 1000)}</strong> 천m³</td>
                      </tr>
                      <tr>
                        <th>현재 저수율</th>
                        <td className="highlight-rate"><strong>{fmtRate(activeRes.rate)}%</strong></td>
                        <th>평년 저수율</th>
                        <td><strong>{fmtRate(activeRes.nrRate)}%</strong></td>
                      </tr>
                      <tr>
                        <th>평년대비</th>
                        <td colSpan="3" className="highlight-comp"><strong>{fmtPerRate(activeRes.perRate)}%</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </OverlayView>
              );
            })()}
          </GoogleMap>
        </LoadScript>
        )}

        {/* 동해 여백 고정 스마트 세부 정보창 & SVG Leader Line */}
        {activeJisa && (
          <>
            {/* 1. SVG 동적 연결선 레이어 */}
            {leaderCoords && (
              <svg className="leader-line-svg">
                <defs>
                  <linearGradient id="leaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="1" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* 꺾인 연결선 (Smooth Bezier Curved Leader Line) */}
                <path
                  d={`M ${leaderCoords.startX} ${leaderCoords.startY} C ${leaderCoords.startX + (leaderCoords.endX - leaderCoords.startX) * 0.4} ${leaderCoords.startY}, ${leaderCoords.endX - 50} ${leaderCoords.endY}, ${leaderCoords.endX} ${leaderCoords.endY}`}
                  fill="none"
                  stroke="url(#leaderGrad)"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                  strokeDasharray="6 3"
                  className="leader-path-anim"
                />

                {/* 지사 마커 위치 글로우 핑 도트 */}
                <circle cx={leaderCoords.startX} cy={leaderCoords.startY} r="6" fill="#38bdf8" filter="url(#glow)" />
                <circle cx={leaderCoords.startX} cy={leaderCoords.startY} r="3" fill="#ffffff" />

                {/* 카드 입구 연결점 도트 */}
                <circle cx={leaderCoords.endX} cy={leaderCoords.endY} r="4" fill="#818cf8" />
              </svg>
            )}

            {/* 2. 동해 해상 여백 고정 화이트 세부정보 카드 (대표님 빨간 동그라미 스크린샷 표본 100% 동일 구현) */}
            <div ref={calloutCardRef} className="leader-callout-card white-style-tooltip">
              {(() => {
                const targetJisa = activeJisa;
                const isWarnOrAbove = targetJisa.riskClass === 'warn' || targetJisa.riskClass === 'alert' || targetJisa.riskClass === 'severe';
                const jSnap = snapshotRows.find(r => r.date === todayStr && r.gubun === '지사' && r.jisa === targetJisa.name) ||
                              snapshotRows.find(r => r.gubun === '지사' && r.jisa === targetJisa.name);
                
                if (targetJisa.name === '김해.양산.부산') {
                  console.log('[DEBUG] 김해.양산.부산 todayStr:', todayStr, 'isWarnOrAbove:', isWarnOrAbove);
                  console.log('[DEBUG] 매칭된 jSnap:', jSnap);
                }
                
                let neededRainVal = 0;
                if (jSnap) {
                  const targetVol = jSnap.normalVol * 0.6;
                  const targetDeficit = targetVol - jSnap.currentVol;
                  if (targetDeficit > 0 && jSnap.deficitVol > 0) {
                    neededRainVal = (targetDeficit / jSnap.deficitVol) * (jSnap.neededRain || 0);
                  }
                }
                neededRainVal = Math.max(0, Math.round(neededRainVal));

                let predPerRate = 100;
                let estRateNum = null;
                if (jSnap && jSnap.neededRain !== undefined) {
                  predPerRate = jSnap.estNormalComp || 0;
                  estRateNum = jSnap.estRate !== undefined ? jSnap.estRate : null;
                }
                
                let predPerRate7d = 100;
                let estRateNum7d = null;
                if (jSnap && jSnap.neededRain !== undefined) {
                  predPerRate7d = jSnap.estNormalComp7d || 0;
                  estRateNum7d = jSnap.estRate7d !== undefined ? jSnap.estRate7d : null;
                }

                const sBadge = (isWarnOrAbove && jSnap) ? (
                  predPerRate >= 60 ? { label: '관심(≥60%)', color: '#0891b2', bg: '#ecfeff', border: '#67e8f9' } :
                  predPerRate >= 50 ? { label: '주의(<60%)', color: '#d97706', bg: '#fffbeb', border: '#fcd34d' } :
                  predPerRate >= 40 ? { label: '경계(<50%)', color: '#f97316', bg: '#ffedd5', border: '#fdba74' } :
                  { label: '심각(<40%)', color: '#e11d48', bg: '#fff1f2', border: '#fda4af' }
                ) : null;
                
                const sBadge7d = (isWarnOrAbove && jSnap) ? (
                  predPerRate7d >= 60 ? { label: '관심(≥60%)', color: '#0891b2', bg: '#ecfeff', border: '#67e8f9' } :
                  predPerRate7d >= 50 ? { label: '주의(<60%)', color: '#d97706', bg: '#fffbeb', border: '#fcd34d' } :
                  predPerRate7d >= 40 ? { label: '경계(<50%)', color: '#f97316', bg: '#ffedd5', border: '#fdba74' } :
                  { label: '심각(<40%)', color: '#e11d48', bg: '#fff1f2', border: '#fda4af' }
                ) : null;

                return (
                  <>
                    <div className="tooltip-header">
                      <span className="title">{formatJisaName(targetJisa.name)}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ 
                          fontWeight: '800', fontSize: '12px', padding: '2px 8px', borderRadius: '10px',
                          background: targetJisa.riskClass === 'severe' ? 'rgba(239,68,68,0.2)' : 
                                      targetJisa.riskClass === 'alert' ? 'rgba(249,115,22,0.2)' : 
                                      targetJisa.riskClass === 'warn' ? 'rgba(245,158,11,0.2)' : 'rgba(59,130,246,0.2)',
                          color: targetJisa.riskClass === 'severe' ? '#ef4444' : 
                                 targetJisa.riskClass === 'alert' ? '#f97316' : 
                                 targetJisa.riskClass === 'warn' ? '#f59e0b' : '#3b82f6',
                          border: `1px solid ${
                            targetJisa.riskClass === 'severe' ? '#ef4444' : 
                            targetJisa.riskClass === 'alert' ? '#f97316' : 
                            targetJisa.riskClass === 'warn' ? '#f59e0b' : '#3b82f6'
                          }`
                        }}>
                          {targetJisa.riskStr}
                        </span>
                        <button className="tooltip-close-btn" onClick={(e) => { e.stopPropagation(); setPinnedJisa(null); setHoveredJisa(null); }}>✕</button>
                      </div>
                    </div>

                    <div className="tooltip-body">
                      <div className="tooltip-stat-row">
                        <span>현재 저수율: <strong>{fmtRate(targetJisa.rate)}%</strong></span>
                        <span>평년대비: <strong>{fmtPerRate(targetJisa.perRate)}%</strong></span>
                      </div>

                      <div className="tooltip-counts">
                        <div style={{ color: '#64748b', fontSize: '11px', display: 'flex', justifyContent: 'space-between' }}>
                          <span>🏠 <strong>{(targetJisa.totalCnt || ((targetJisa.counts?.safe || 0) + (targetJisa.counts?.warn || 0) + (targetJisa.counts?.alert || 0) + (targetJisa.counts?.severe || 0))).toLocaleString()}개소</strong></span>
                        </div>
                        <div className="counts-row">
                          <span style={{color: '#2563eb', fontWeight: 700}}>관심 {(targetJisa.counts?.safe || 0).toLocaleString()}</span>
                          <span style={{color: '#d97706', fontWeight: 700}}>주의 {(targetJisa.counts?.warn || 0).toLocaleString()}</span>
                          <span style={{color: '#ea580c', fontWeight: 700}}>경계 {(targetJisa.counts?.alert || 0).toLocaleString()}</span>
                          <span style={{color: '#dc2626', fontWeight: 700}}>심각 {(targetJisa.counts?.severe || 0).toLocaleString()}</span>
                        </div>
                      </div>

                      {/* 필요강수량 및 3일/1주 비교 */}
                      {jSnap && (
                        <div style={{ marginTop: '6px', paddingTop: '6px', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#475569', fontWeight: 600, marginTop: '2px', marginBottom: '2px' }}>
                            <span>관심단계 도달 필요강수량 :</span> <strong style={{ color: '#1d4ed8' }}>{neededRainVal}mm</strong>
                          </div>
                          
                          <div style={{ display: 'flex', gap: '6px' }}>
                            {/* 3일 후 */}
                            <div style={{ flex: 1, padding: '6px', background: '#f8fafc', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                              <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 800, marginBottom: '6px', textAlign: 'center' }}>[ 3일 후 ]</div>
                              {sBadge && (
                                <div style={{ marginBottom: '6px', textAlign: 'center' }}>
                                  <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 4px', borderRadius: '4px', color: sBadge.color, background: sBadge.bg, border: `1px solid ${sBadge.border}` }}>
                                    {sBadge.label}
                                  </span>
                                </div>
                              )}
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#475569', fontWeight: 600 }}>
                                <span>예상강수:</span> <strong style={{ color: '#047857' }}>{jSnap.forecastRain}mm</strong>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#475569', fontWeight: 600 }}>
                                <span>유입량:</span> <strong style={{ color: '#0ea5e9' }}>{jSnap.addedVol ? fmtVol(jSnap.addedVol / 1000) : 0}천m³</strong>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#475569', fontWeight: 600 }}>
                                <span>예상저수율:</span> <strong style={{ color: '#2563eb' }}>{estRateNum !== null ? `${fmtRate(estRateNum)}%` : '-'}</strong>
                              </div>
                            </div>
                            
                            {/* 1주일 후 */}
                            <div style={{ flex: 1, padding: '6px', background: '#f8fafc', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                              <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 800, marginBottom: '6px', textAlign: 'center' }}>[ 1주 후 ]</div>
                              {sBadge7d && (
                                <div style={{ marginBottom: '6px', textAlign: 'center' }}>
                                  <span style={{ fontSize: '10px', fontWeight: '800', padding: '2px 4px', borderRadius: '4px', color: sBadge7d.color, background: sBadge7d.bg, border: `1px solid ${sBadge7d.border}` }}>
                                    {sBadge7d.label}
                                  </span>
                                </div>
                              )}
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#475569', fontWeight: 600 }}>
                                <span>예상강수:</span> <strong style={{ color: '#047857' }}>{jSnap.forecastRain7d}mm</strong>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#475569', fontWeight: 600 }}>
                                <span>유입량:</span> <strong style={{ color: '#0ea5e9' }}>{jSnap.addedVol7d ? fmtVol(jSnap.addedVol7d / 1000) : 0}천m³</strong>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#475569', fontWeight: 600 }}>
                                <span>예상저수율:</span> <strong style={{ color: '#2563eb' }}>{estRateNum7d !== null ? `${fmtRate(estRateNum7d)}%` : '-'}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 저수지 목록 */}
                      <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '8px', paddingTop: '8px' }}>
                        <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, marginBottom: '5px' }}>
                          저수지 목록
                        </div>
                        <div className="callout-res-list">
                          {data.allReservoirs
                            .filter(r => r.jisa === targetJisa.name)
                            .map(res => {
                              const rCls = res.riskClass === 'severe' ? 'status-alert'
                                         : (res.riskClass === 'alert' || res.riskClass === 'warn') ? 'status-warn'
                                         : 'status-safe';
                              return (
                                <div key={res.name} className="callout-res-item">
                                  <span className="callout-res-name">💧 {res.name}</span>
                                  <div className="callout-res-right">
                                    <span className={`res-status ${rCls}`}>{res.riskStr}</span>
                                    <span className="callout-res-rate">{fmtRate(res.rate)}%</span>
                                  </div>
                                </div>
                              );
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </>
        )}
      </div>

      <header className="header-bar glass-panel">
        <div className="header-left">
          <span style={{ fontSize: '28px', marginRight: '10px' }}>💧</span>
          <h1 style={{ margin: 0, fontWeight: 800, fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>한국농어촌공사 가뭄상황실</h1>
        </div>
        
        <div className="header-center">
          {data.national && (
            <div className="header-national">
              <span className="header-national-label">전국</span>
              <span className="header-national-rate">
                저수율 <strong>{fmtRate(data.national.cr_rate)}%</strong>
                <DeltaBadge value={data.national.cr_change} unit="" />
              </span>
              <span className="header-national-rate">평년대비 <strong>{fmtPerRate(data.national.per_rate)}%</strong></span>
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

        <div className="header-right" style={{ flexDirection: 'column', gap: '4px', alignItems: 'flex-end', paddingRight: '5px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button className="header-link-btn" onClick={() => window.open('https://choigoda-kr.github.io/gg-disaster-center/', '_blank')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', marginBottom: '-2px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              종합상황실
            </button>
            <button className="header-link-btn" onClick={() => window.open('https://choigoda-kr.github.io/weather-report/', '_blank')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', marginBottom: '-2px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              기상상황실
            </button>
          </div>
          <span className="header-badge" style={{ fontSize: '0.65rem', padding: '1px 6px', opacity: 0.7 }}>업데이트: {updateTime}</span>
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
                    <div className="bonbu-card-sub">
                      <span>현재 <strong>{fmtRate(bonbu.rate)}%</strong><DeltaBadge value={bonbu.crChange} /></span>
                      <span>평년대비 <strong>{fmtPerRate(bonbu.perRate)}%</strong></span>
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
                            onClick={() => {
                              const nextJisa = selectedJisaDetail?.name === jisa.name ? null : jisa;
                              setSelectedJisaDetail(nextJisa);
                              if (nextJisa) focusJisaOnMap(nextJisa);
                            }}
                          >
                            <div className="card-left">
                              <h3 style={{fontSize: '0.9rem'}}>{formatJisaName(jisa.name)}</h3>
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
                                  <div className="jisa-card-sub">
                                    <span>현재 <strong>{fmtRate(jisa.rate)}%</strong><DeltaBadge value={rateDiff} /></span>
                                    <span>평년대비 <strong>{fmtPerRate(jisa.perRate)}%</strong></span>
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

                          {/* 모바일용 저수지 리스트 (지사 요약 헤더 + 3일/1주 예보박스 + 저수지 목록) */}
                          {selectedJisaDetail?.name === jisa.name && (() => {
                            const mJSnap = snapshotRows.find(r => r.date === todayStr && r.gubun === '지사' && r.jisa === jisa.name)
                                        || snapshotRows.find(r => r.gubun === '지사' && r.jisa === jisa.name);
                            let mNeededRain = 0;
                            if (mJSnap) {
                              const targetVol = mJSnap.normalVol * 0.6;
                              const targetDeficit = targetVol - mJSnap.currentVol;
                              if (targetDeficit > 0 && mJSnap.deficitVol > 0) {
                                mNeededRain = (targetDeficit / mJSnap.deficitVol) * (mJSnap.neededRain || 0);
                              }
                            }
                            mNeededRain = Math.max(0, Math.round(mNeededRain));
                            const mEstRate   = mJSnap?.estRate ?? null;
                            const mEstRate7d = mJSnap?.estRate7d ?? null;
                            const mPredPer   = mJSnap?.estNormalComp || 0;
                            const mPredPer7d = mJSnap?.estNormalComp7d || 0;
                            const mBadge   = mJSnap ? (mPredPer   >= 60 ? {label:'관심(≥60%)',color:'#0891b2',bg:'#ecfeff',border:'#67e8f9'}
                                             : mPredPer   >= 50 ? {label:'주의(<60%)',color:'#d97706',bg:'#fffbeb',border:'#fcd34d'}
                                             : mPredPer   >= 40 ? {label:'경계(<50%)',color:'#f97316',bg:'#ffedd5',border:'#fdba74'}
                                             : {label:'심각(<40%)',color:'#e11d48',bg:'#fff1f2',border:'#fda4af'}) : null;
                            const mBadge7d = mJSnap ? (mPredPer7d >= 60 ? {label:'관심(≥60%)',color:'#0891b2',bg:'#ecfeff',border:'#67e8f9'}
                                             : mPredPer7d >= 50 ? {label:'주의(<60%)',color:'#d97706',bg:'#fffbeb',border:'#fcd34d'}
                                             : mPredPer7d >= 40 ? {label:'경계(<50%)',color:'#f97316',bg:'#ffedd5',border:'#fdba74'}
                                             : {label:'심각(<40%)',color:'#e11d48',bg:'#fff1f2',border:'#fda4af'}) : null;
                            const totalCnt = (jisa.counts?.safe||0)+(jisa.counts?.warn||0)+(jisa.counts?.alert||0)+(jisa.counts?.severe||0);

                            return (
                              <div className="mobile-res-list">
                                {/* 지사 요약 헤더 */}
                                <div className="mobile-jisa-summary-header">
                                  <div className="mobile-jisa-summary-title">
                                    {formatJisaName(jisa.name)} 저수지 현황
                                  </div>
                                  <div className="mobile-jisa-summary-stats">
                                    <span>현재 <strong>{fmtRate(jisa.rate)}%</strong></span>
                                    <span>평년대비 <strong>{fmtPerRate(jisa.perRate)}%</strong></span>
                                  </div>
                                  <div className="mobile-jisa-summary-counts">
                                    총<strong>{totalCnt}</strong>&nbsp;
                                    관심<strong className="text-safe">{jisa.counts?.safe||0}</strong>&nbsp;
                                    주의<strong className="text-warn">{jisa.counts?.warn||0}</strong>&nbsp;
                                    경계<strong className="text-alert">{jisa.counts?.alert||0}</strong>&nbsp;
                                    심각<strong className="text-severe">{jisa.counts?.severe||0}</strong>
                                  </div>
                                  {mJSnap && (
                                    <div className="mobile-jisa-forecast">
                                      <div className="mobile-jisa-needed-rain">
                                        관심단계 도달 필요강수량 : <strong>{mNeededRain}mm</strong>
                                      </div>
                                      <div className="mobile-jisa-forecast-boxes">
                                        <div className="mobile-forecast-box">
                                          <div className="mobile-forecast-box-title">[ 3일 후 ]</div>
                                          {mBadge && <div className="mobile-forecast-badge" style={{color:mBadge.color,background:mBadge.bg,border:`1px solid ${mBadge.border}`}}>{mBadge.label}</div>}
                                          <div className="mobile-forecast-row"><span>예상강수:</span><strong style={{color:'#047857'}}>{mJSnap.forecastRain}mm</strong></div>
                                          <div className="mobile-forecast-row"><span>유입량:</span><strong style={{color:'#0ea5e9'}}>{mJSnap.addedVol ? fmtVol(mJSnap.addedVol / 1000) : 0}천m³</strong></div>
                                          <div className="mobile-forecast-row"><span>예상저수율:</span><strong style={{color:'#2563eb'}}>{mEstRate !== null ? `${fmtRate(mEstRate)}%` : '-'}</strong></div>
                                        </div>
                                        <div className="mobile-forecast-box">
                                          <div className="mobile-forecast-box-title">[ 1주 후 ]</div>
                                          {mBadge7d && <div className="mobile-forecast-badge" style={{color:mBadge7d.color,background:mBadge7d.bg,border:`1px solid ${mBadge7d.border}`}}>{mBadge7d.label}</div>}
                                          <div className="mobile-forecast-row"><span>예상강수:</span><strong style={{color:'#047857'}}>{mJSnap.forecastRain7d}mm</strong></div>
                                          <div className="mobile-forecast-row"><span>유입량:</span><strong style={{color:'#0ea5e9'}}>{mJSnap.addedVol7d ? fmtVol(mJSnap.addedVol7d / 1000) : 0}천m³</strong></div>
                                          <div className="mobile-forecast-row"><span>예상저수율:</span><strong style={{color:'#2563eb'}}>{mEstRate7d !== null ? `${fmtRate(mEstRate7d)}%` : '-'}</strong></div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                {/* 저수지 목록 (원본 순서 유지) */}
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
                                          <span className="res-rate">{fmtRate(res.rate)}%</span>
                                        </div>
                                      </div>
                                    );
                                  })
                                }
                              </div>
                            );
                          })()}
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
      <div className={`detail-panel glass-panel ${selectedBonbu && selectedBonbu !== '전국' ? 'open' : ''}`}>
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
                onClick={() => { setSelectedJisaDetail(jisa); focusJisaOnMap(jisa); }}
              >
                <div className="card-left">
                  <h3>{formatJisaName(jisa.name)}</h3>
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
          <h2>{formatJisaName(selectedJisaDetail?.name)} 저수지 현황</h2>
          <button className="close-btn" onClick={() => setSelectedJisaDetail(null)}>✕</button>
        </div>

        {/* 신규: PC 우측 패널 지사 상세 요약 정보 */}
        {selectedJisaDetail && (() => {
          const jisa = selectedJisaDetail;
          const mJSnap = snapshotRows.find(r => r.date === todayStr && r.gubun === '지사' && r.jisa === jisa.name)
                      || snapshotRows.find(r => r.gubun === '지사' && r.jisa === jisa.name);
          let mNeededRain = 0;
          if (mJSnap) {
            const targetVol = mJSnap.normalVol * 0.6;
            const targetDeficit = targetVol - mJSnap.currentVol;
            if (targetDeficit > 0 && mJSnap.deficitVol > 0) {
              mNeededRain = (targetDeficit / mJSnap.deficitVol) * (mJSnap.neededRain || 0);
            }
          }
          mNeededRain = Math.max(0, Math.round(mNeededRain));
          const mEstRate   = mJSnap?.estRate ?? null;
          const mEstRate7d = mJSnap?.estRate7d ?? null;
          const mPredPer   = mJSnap?.estNormalComp || 0;
          const mPredPer7d = mJSnap?.estNormalComp7d || 0;
          const mBadge   = mJSnap ? (mPredPer >= 60 ? {label:'관심(≥60%)',color:'#0891b2',bg:'#ecfeff',border:'#67e8f9'}
                                  : mPredPer >= 50 ? {label:'주의(<60%)',color:'#d97706',bg:'#fffbeb',border:'#fcd34d'}
                                  : mPredPer >= 40 ? {label:'경계(<50%)',color:'#f97316',bg:'#ffedd5',border:'#fdba74'}
                                  : {label:'심각(<40%)',color:'#e11d48',bg:'#fff1f2',border:'#fda4af'}) : null;
          const mBadge7d = mJSnap ? (mPredPer7d >= 60 ? {label:'관심(≥60%)',color:'#0891b2',bg:'#ecfeff',border:'#67e8f9'}
                                  : mPredPer7d >= 50 ? {label:'주의(<60%)',color:'#d97706',bg:'#fffbeb',border:'#fcd34d'}
                                  : mPredPer7d >= 40 ? {label:'경계(<50%)',color:'#f97316',bg:'#ffedd5',border:'#fdba74'}
                                  : {label:'심각(<40%)',color:'#e11d48',bg:'#fff1f2',border:'#fda4af'}) : null;
          const totalCnt = (jisa.counts?.safe||0)+(jisa.counts?.warn||0)+(jisa.counts?.alert||0)+(jisa.counts?.severe||0);

          return (
            <div className="mobile-jisa-summary-header" style={{ margin: '0 10px 10px 10px' }}>
              <div className="mobile-jisa-summary-stats">
                <span>현재 <strong>{fmtRate(jisa.rate)}%</strong></span>
                <span>평년대비 <strong>{fmtPerRate(jisa.perRate)}%</strong></span>
              </div>
              <div className="mobile-jisa-summary-counts">
                총<strong>{totalCnt}</strong>&nbsp;
                관심<strong className="text-safe">{jisa.counts?.safe||0}</strong>&nbsp;
                주의<strong className="text-warn">{jisa.counts?.warn||0}</strong>&nbsp;
                경계<strong className="text-alert">{jisa.counts?.alert||0}</strong>&nbsp;
                심각<strong className="text-severe">{jisa.counts?.severe||0}</strong>
              </div>
              {mJSnap && (
                <div className="mobile-jisa-forecast">
                  <div className="mobile-jisa-needed-rain">
                    관심단계 도달 필요강수량 : <strong>{mNeededRain}mm</strong>
                  </div>
                  <div className="mobile-jisa-forecast-boxes">
                    <div className="mobile-forecast-box">
                      <div className="mobile-forecast-box-title">[ 3일 후 ]</div>
                      {mBadge && <div className="mobile-forecast-badge" style={{color:mBadge.color,background:mBadge.bg,border:`1px solid ${mBadge.border}`}}>{mBadge.label}</div>}
                      <div className="mobile-forecast-row"><span>예상강수:</span><strong style={{color:'#047857'}}>{mJSnap.forecastRain}mm</strong></div>
                      <div className="mobile-forecast-row"><span>유입량:</span><strong style={{color:'#0ea5e9'}}>{mJSnap.addedVol ? fmtVol(mJSnap.addedVol / 1000) : 0}천m³</strong></div>
                      <div className="mobile-forecast-row"><span>예상저수율:</span><strong style={{color:'#2563eb'}}>{mEstRate !== null ? `${fmtRate(mEstRate)}%` : '-'}</strong></div>
                    </div>
                    <div className="mobile-forecast-box">
                      <div className="mobile-forecast-box-title">[ 1주 후 ]</div>
                      {mBadge7d && <div className="mobile-forecast-badge" style={{color:mBadge7d.color,background:mBadge7d.bg,border:`1px solid ${mBadge7d.border}`}}>{mBadge7d.label}</div>}
                      <div className="mobile-forecast-row"><span>예상강수:</span><strong style={{color:'#047857'}}>{mJSnap.forecastRain7d}mm</strong></div>
                      <div className="mobile-forecast-row"><span>유입량:</span><strong style={{color:'#0ea5e9'}}>{mJSnap.addedVol7d ? fmtVol(mJSnap.addedVol7d / 1000) : 0}천m³</strong></div>
                      <div className="mobile-forecast-row"><span>예상저수율:</span><strong style={{color:'#2563eb'}}>{mEstRate7d !== null ? `${fmtRate(mEstRate7d)}%` : '-'}</strong></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

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
                    <span className="res-rate">{fmtRate(res.rate)}%</span>
                  </div>
                </div>
              )
          })}
        </div>
      </div>

      {/* 우측 4개 박스 — 최근 7일 꺾은선 그래프 */}
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
              <span className="trend-box-sub">최근 7일 (전국)</span>
            </div>
            <SparkLine data={getChartData(field)} color={color} label={field} />
          </div>
        ))}

        {/* 5번째 통합 박스: 폭이 우측 차트 박스와 100% 동일하게 맞춰진 가뭄해소 예측 범례 */}
        <div className="trend-legend-box glass-panel">
          <div className="legend-card-header">
            <span>3일, 7일 후 가뭄해소 예측 범례</span>
          </div>
          <table className="legend-table">
            <tbody>
              <tr>
                <td className="icon-col"><div className="legend-star safe">★</div></td>
                <td className="badge-col"><span className="badge safe">관심</span></td>
                <td className="desc-col">평년 60% 이상 예상 (3일/1주 후)</td>
              </tr>
              <tr>
                <td className="icon-col"><div className="legend-star warn">★</div></td>
                <td className="badge-col"><span className="badge warn">주의</span></td>
                <td className="desc-col">평년 50% 이상 예상 (3일/1주 후)</td>
              </tr>
              <tr>
                <td className="icon-col"><div className="legend-star alert">★</div></td>
                <td className="badge-col"><span className="badge alert">경계</span></td>
                <td className="desc-col">평년 40% 이상 예상 (3일/1주 후)</td>
              </tr>
              <tr>
                <td className="icon-col"><div className="legend-star severe">★</div></td>
                <td className="badge-col"><span className="badge severe">심각</span></td>
                <td className="desc-col">평년 40% 미만 지속 (3일/1주 후)</td>
              </tr>
            </tbody>
          </table>
          <div className="legend-footer-note">* 3일(KMA)+4일(OpenMeteo) 적용</div>
        </div>
      </div>
    </>
  );
}

export default App;
