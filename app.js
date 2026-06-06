// ===== 座標→ハニカム変換済みステーションデータ =====
const STATIONS_TAMA = [
  {station_name:"パトリア桜ヶ丘",stationCd:"RB27",lat:35.65285,lng:139.44469,q:15,r:1},
  {station_name:"ＵＲプラザ永山",stationCd:"BH51",lat:35.63182,lng:139.44723,q:16,r:9},
  {station_name:"ＡＯＫＩ聖蹟桜ヶ丘店",stationCd:"QG74",lat:35.65185,lng:139.43947,q:13,r:2},
  {station_name:"アヴァンセ唐木田",stationCd:"LP58",lat:35.61578,lng:139.40835,q:0,r:24},
  {station_name:"多摩センター第３駐車場（小田急）",stationCd:"EA24",lat:35.62624,lng:139.42718,q:8,r:16},
  {station_name:"永山第７駐車場（小田急）",stationCd:"DN35",lat:35.62993,lng:139.43904,q:13,r:12},
  {station_name:"コメット",stationCd:"OJ88",lat:35.60979,lng:139.42806,q:8,r:23},
  {station_name:"聖蹟桜ヶ丘駅北第２",stationCd:"OX67",lat:35.65252,lng:139.44595,q:16,r:1},
  {station_name:"聖蹟桜ヶ丘東寺方１丁目",stationCd:"HH60",lat:35.64819,lng:139.44258,q:14,r:3},
  {station_name:"聖蹟桜ヶ丘モーリン駐車場",stationCd:"MC65",lat:35.64960,lng:139.44426,q:15,r:2},
  {station_name:"聖蹟桜ヶ丘ルートストレージ",stationCd:"KX72",lat:35.65050,lng:139.45317,q:19,r:0},
  {station_name:"タイムズ天本病院",stationCd:"QG60",lat:35.62220,lng:139.41341,q:3,r:20},
  {station_name:"タイムズガーデンヒルズ聖蹟桜ヶ丘",stationCd:"MF91",lat:35.65181,lng:139.44037,q:12,r:2},
  {station_name:"タイムズ聖蹟桜ヶ丘駅北",stationCd:"LM14",lat:35.65236,lng:139.44887,q:17,r:0},
  {station_name:"タイムズ聖蹟桜ヶ丘駅前交差点",stationCd:"R265",lat:35.65051,lng:139.44547,q:15,r:3},
  {station_name:"タイムズ聖蹟桜ヶ丘駅南口",stationCd:"DC98",lat:35.64886,lng:139.44754,q:16,r:2},
  {station_name:"タイムズ聖蹟和田",stationCd:"OO83",lat:35.64751,lng:139.43606,q:12,r:5},
  {station_name:"タイムズ多摩落合",stationCd:"R269",lat:35.62602,lng:139.42434,q:7,r:16},
  {station_name:"タイムズ多摩諏訪",stationCd:"HU00",lat:35.63418,lng:139.45078,q:17,r:8},
  {station_name:"タイムズ多摩諏訪２丁目",stationCd:"QP12",lat:35.62821,lng:139.44926,q:17,r:10},
  {station_name:"タイムズ多摩関戸第４",stationCd:"V070",lat:35.64181,lng:139.45135,q:18,r:4},
  {station_name:"タイムズ多摩関戸第５",stationCd:"T797",lat:35.65023,lng:139.44808,q:17,r:1},
  {station_name:"タイムズ多摩関戸第７",stationCd:"MF85",lat:35.64993,lng:139.45197,q:18,r:1},
  {station_name:"タイムズ多摩鶴牧第３",stationCd:"U501",lat:35.62359,lng:139.41787,q:4,r:19},
  {station_name:"タイムズ多摩鶴牧第４",stationCd:"KH83",lat:35.62281,lng:139.41697,q:5,r:19},
  {station_name:"タイムズプロムナード多摩",stationCd:"KH02",lat:35.61798,lng:139.42311,q:6,r:20},
  {station_name:"多摩愛宕４丁目",stationCd:"NY60",lat:35.63000,lng:139.43038,q:9,r:14},
  {station_name:"多摩一ノ宮",stationCd:"KG73",lat:35.65221,lng:139.44115,q:14,r:2},
  {station_name:"多摩一ノ宮鈴木駐車場",stationCd:"KW37",lat:35.64977,lng:139.44504,q:17,r:2},
  {station_name:"多摩落合１丁目",stationCd:"KU12",lat:35.62331,lng:139.43087,q:10,r:16},
  {station_name:"フォンテーヌ雅",stationCd:"RI38",lat:35.62565,lng:139.41934,q:5,r:18},
  {station_name:"タイムズ多摩乞田",stationCd:"IU60",lat:35.63212,lng:139.44126,q:14,r:10},
  {station_name:"タイムズ多摩センター中央第１",stationCd:"DG00",lat:35.62174,lng:139.42417,q:7,r:18},
  {station_name:"タイムズ多摩センター中央第３",stationCd:"R724",lat:35.62345,lng:139.42365,q:6,r:18},
  {station_name:"タイムズ多摩センター東第１",stationCd:"S306",lat:35.62455,lng:139.42851,q:9,r:16},
  {station_name:"多摩東寺方",stationCd:"II95",lat:35.64796,lng:139.44628,q:16,r:3},
  {station_name:"豊ヶ丘１丁目第１",stationCd:"ME81",lat:35.62623,lng:139.43088,q:10,r:15},
  {station_name:"タイムズ永山",stationCd:"OF51",lat:35.63330,lng:139.44610,q:15,r:9},
  {station_name:"永山第６駐車場（小田急）",stationCd:"KH39",lat:35.63042,lng:139.44111,q:14,r:11},
  {station_name:"馬場永山パーキング",stationCd:"QG86",lat:35.63405,lng:139.44810,q:18,r:8},
  {station_name:"ＵＲ諏訪一丁目ハイツ",stationCd:"DA16",lat:35.63168,lng:139.45020,q:17,r:9},
  {station_name:"ＵＲ多摩永山二丁目",stationCd:"Y755",lat:35.62515,lng:139.44953,q:17,r:12},
  {station_name:"ＵＲ多摩永山二丁目第２",stationCd:"LK45",lat:35.62604,lng:139.44927,q:17,r:11},
];

const STATIONS_FUCHU = [
  {station_name:"エリオ駐車場",stationCd:"KB50",lat:35.674979,lng:139.483962,q:6,r:6},
  {station_name:"タイムズ北府中",stationCd:"BP54",lat:35.682679,lng:139.471187,q:0,r:6},
  {station_name:"タイムズ多摩川競艇場前",stationCd:"BX03",lat:35.658916,lng:139.499385,q:12,r:10},
  {station_name:"タイムズ大國魂神社",stationCd:"BJ56",lat:35.669808,lng:139.479747,q:4,r:9},
  {station_name:"タイムズ大國魂神社（ＥＶ）",stationCd:"RJ77",lat:35.669808,lng:139.479747,q:4,r:10},
  {station_name:"タイムズ府中宮町第４",stationCd:"Q486",lat:35.669884,lng:139.482495,q:5,r:9},
  {station_name:"タイムズ府中宮町第６",stationCd:"U074",lat:35.670128,lng:139.480657,q:4,r:8},
  {station_name:"タイムズ府中宮西町第３",stationCd:"KV42",lat:35.670739,lng:139.475488,q:2,r:10},
  {station_name:"タイムズ府中寿町第２",stationCd:"U641",lat:35.674918,lng:139.475320,q:2,r:8},
  {station_name:"タイムズ府中小柳町第２",stationCd:"OK22",lat:35.664278,lng:139.502608,q:13,r:7},
  {station_name:"タイムズ府中小柳町第３",stationCd:"QA10",lat:35.662024,lng:139.502427,q:13,r:8},
  {station_name:"タイムズ府中新町１丁目",stationCd:"QB10",lat:35.687322,lng:139.487356,q:7,r:0},
  {station_name:"タイムズ府中栄町",stationCd:"BA69",lat:35.689633,lng:139.479922,q:4,r:1},
  {station_name:"タイムズ府中栄町第３",stationCd:"IU62",lat:35.688779,lng:139.479370,q:5,r:1},
  {station_name:"タイムズ府中町第３",stationCd:"T864",lat:35.674777,lng:139.481244,q:4,r:7},
  {station_name:"タイムズ府中緑町第３",stationCd:"EL20",lat:35.672004,lng:139.484468,q:6,r:7},
  {station_name:"タイムズ府中緑町第４",stationCd:"MJ91",lat:35.671460,lng:139.486792,q:7,r:7},
  {station_name:"タイムズ府中若松町第２",stationCd:"KE79",lat:35.673812,lng:139.498579,q:11,r:4},
  {station_name:"タイムズ府中ＦＲＣ",stationCd:"EJ52",lat:35.670787,lng:139.477875,q:3,r:9},
  {station_name:"タイムズ東京競馬場横",stationCd:"Y343",lat:35.662479,lng:139.491297,q:9,r:10},
  {station_name:"タイムズ東京競馬場横第２",stationCd:"RN89",lat:35.661728,lng:139.491862,q:10,r:10},
  {station_name:"タイムズ東府中駅前",stationCd:"BE95",lat:35.669504,lng:139.496397,q:11,r:6},
  {station_name:"フォトレ府中",stationCd:"DP94",lat:35.672102,lng:139.475670,q:2,r:9},
  {station_name:"マイプレイス東府中",stationCd:"IR04",lat:35.668110,lng:139.496191,q:10,r:7},
  {station_name:"メルベーユ多磨霊園",stationCd:"LJ16",lat:35.665129,lng:139.505486,q:14,r:6},
  {station_name:"ユーコート府中",stationCd:"CN26",lat:35.672585,lng:139.482908,q:5,r:7},
  {station_name:"レジデンス若松一番館",stationCd:"KU17",lat:35.672820,lng:139.501841,q:13,r:3},
  {station_name:"ヴェルト府中",stationCd:"QV05",lat:35.672478,lng:139.483006,q:5,r:8},
  {station_name:"北府中駅前",stationCd:"OL69",lat:35.678863,lng:139.473652,q:1,r:7},
  {station_name:"天神町１丁目",stationCd:"NH42",lat:35.678210,lng:139.488135,q:7,r:4},
  {station_name:"天神町２丁目",stationCd:"QE33",lat:35.681208,lng:139.491883,q:9,r:2},
  {station_name:"天神町４丁目",stationCd:"OC70",lat:35.681550,lng:139.492950,q:10,r:2},
  {station_name:"府中八幡町２丁目",stationCd:"BW45",lat:35.670268,lng:139.487017,q:8,r:7},
  {station_name:"府中大久保駐車場",stationCd:"BS67",lat:35.674966,lng:139.483232,q:5,r:6},
  {station_name:"府中幸町１丁目",stationCd:"OT24",lat:35.678407,lng:139.481923,q:5,r:5},
  {station_name:"府中是政６丁目",stationCd:"MT68",lat:35.655486,lng:139.483026,q:5,r:15},
  {station_name:"府中栄町第４",stationCd:"QE32",lat:35.690177,lng:139.479696,q:4,r:0},
  {station_name:"府中浅間町２丁目",stationCd:"QZ63",lat:35.683984,lng:139.497154,q:11,r:0},
  {station_name:"府中町２丁目駐車場",stationCd:"DX27",lat:35.673969,lng:139.484253,q:7,r:6},
  {station_name:"府中緑町１丁目",stationCd:"DB87",lat:35.671030,lng:139.486794,q:7,r:8},
  {station_name:"府中緑町２丁目第２",stationCd:"MH17",lat:35.672586,lng:139.490149,q:8,r:6},
  {station_name:"府中緑町２丁目第３",stationCd:"OG99",lat:35.671273,lng:139.487823,q:6,r:8},
  {station_name:"府中若松町１丁目第２",stationCd:"MR39",lat:35.669958,lng:139.501518,q:12,r:5},
  {station_name:"府中若松町２丁目",stationCd:"LR95",lat:35.672551,lng:139.496466,q:10,r:5},
  {station_name:"東府中マンション",stationCd:"KR74",lat:35.669518,lng:139.496391,q:12,r:6},
  {station_name:"清水が丘１丁目",stationCd:"QZ05",lat:35.666925,lng:139.493610,q:9,r:8},
  {station_name:"ＭＡＸＩＶ東府中",stationCd:"LV90",lat:35.671863,lng:139.497634,q:11,r:5},
  {station_name:"Ｔ'ｓ ｇａｒｄｅｎ府中",stationCd:"EA57",lat:35.678233,lng:139.486989,q:8,r:4},
  {station_name:"ＵＲ府中グリーンハイツ",stationCd:"V216",lat:35.678543,lng:139.477863,q:3,r:6},
];

// 現在のエリア
let CURRENT_AREA = 'tama';
let STATIONS = STATIONS_TAMA.map(s => ({...s}));

// GASから取得したデータをstationCdをキーにして保持
let gasStationMap = new Map();

const GAS_URL = 'https://script.google.com/macros/s/AKfycbywQoNFA2x7qn8cMelt_5OVPiNumBYqPbTNnK3nzXWv59q0FmP2Mt8qmVxT5Zk6wPEr/exec';
// AREA_KEYはCURRENT_AREAを参照
const AREA_KEY = () => CURRENT_AREA;

// ===== エリア切り替え =====
async function switchArea(areaKey) {
  if (CURRENT_AREA === areaKey) return;
  CURRENT_AREA = areaKey;

  // STATIONSを差し替え
  STATIONS.length = 0;
  const src = areaKey === 'fuchu' ? STATIONS_FUCHU : STATIONS_TAMA;
  src.forEach(s => STATIONS.push({...s}));

  // bbox再計算
  recalcBbox();
  recalcGpsRef();
  recalcAxialMin();

  // ヘッダータブのactive切り替え
  document.querySelectorAll('.area-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.area === areaKey);
  });

  // グリッドと空白セルをリセット
  grid._emptyDrawn = false;
  gasStationMap = new Map();
  clearScanBadges();

  // データ再取得→描画→ミニマップ再初期化→パンズーム再初期化
  await fetchMapData();
}

async function fetchMapData() {
  showLoading(true);
  try {
    const res = await fetch(`${GAS_URL}?action=getMapData&area=${AREA_KEY()}`);
    const data = await res.json();
    if (data.result !== 'OK') throw new Error(data.error || 'GASエラー');

    data.stations.forEach(st => {
      gasStationMap.set(st.stationCd, st);
    });

    STATIONS.forEach(s => {
      const gas = gasStationMap.get(s.stationCd);
      s.status    = gas ? gas.status    : 'unknown';
      s.total     = gas ? gas.total     : 0;
      s.standby   = gas ? gas.standby   : 0;
      s.checked   = gas ? gas.checked   : 0;
      s.hasUrgent = gas ? gas.hasUrgent : false;
    });

  } catch(err) {
    console.error('データ取得失敗:', err);
    STATIONS.forEach(s => { s.status = 'standby'; s.total = 0; });
  }

  // 描画は成功・失敗どちらでも同じ順序で実行
  renderGrid();
  updateCounts();
  initMinimap();
  initPanZoom();
  showLoading(false);
  // グリッドDOM確定後にGPS起動（初回のみ）
  if (!window._gpsStarted) {
    window._gpsStarted = true;
    startGps();
  }
}

function showLoading(show) {
  document.getElementById('loadingOverlay').style.display = show ? 'flex' : 'none';
}

// ===== ハニカム描画 =====
const SIZE = 40;
const W = Math.sqrt(3) * SIZE;
const H = 2 * SIZE;
const PADDING = 20;

function hexToPixel(q, r) {
  const x = W * (q + r/2);
  const y = H * (3/4) * r;
  return { x, y };
}

// グリッド全体のbbox（エリア切り替え時に再計算）
let minX, minY, maxX, maxY;
let gridW, gridH, offX, offY;

const grid = document.getElementById('hexGrid');

function recalcBbox() {
  minX = Infinity; minY = Infinity; maxX = -Infinity; maxY = -Infinity;
  STATIONS.forEach(s => {
    const {x, y} = hexToPixel(s.q, s.r);
    s.px = x; s.py = y;
    minX = Math.min(minX, x); minY = Math.min(minY, y);
    maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
  });
  gridW = maxX - minX + W + PADDING*2;
  gridH = maxY - minY + H + PADDING*2;
  offX = -minX + PADDING + W/2;
  offY = -minY + PADDING + H/2;
  grid.style.width = gridW + 'px';
  grid.style.height = gridH + 'px';
  grid.style.minWidth = '100%';
}

// 初回計算
recalcBbox();

function hexPath(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 180 * (60 * i - 30);
    pts.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
  }
  return 'M' + pts.join('L') + 'Z';
}

function statusColor(status) {
  switch(status) {
    case 'standby':    return 'var(--standby)';
    case 'checked':    return 'var(--checked)';
    case '7days_rule': return 'var(--sevenday)';
    case 'stopped':    return 'var(--stopped-border)';
    default:           return 'var(--cell-empty-border)';
  }
}

function statusFill(status) {
  switch(status) {
    case 'standby':    return 'rgba(0,229,160,0.06)';
    case 'checked':    return 'rgba(255,77,141,0.06)';
    case '7days_rule': return 'rgba(61,155,255,0.06)';
    case 'stopped':    return 'rgba(68,80,96,0.1)';
    default:           return 'transparent';
  }
}

// ステーションwrapperの参照を保持
const stationWrappers = new Map();

// グリッド範囲（renderGrid・initMinimap・GPS共用）
let allQ, allR, qMin, qMax, rMin, rMax, occupiedKeys;

function updateGridRanges() {
  allQ = STATIONS.map(s => s.q);
  allR = STATIONS.map(s => s.r);
  qMin = Math.min(...allQ); qMax = Math.max(...allQ);
  rMin = Math.min(...allR); rMax = Math.max(...allR);
  occupiedKeys = new Set(STATIONS.map(s => `${s.q},${s.r}`));
}
updateGridRanges();

function renderGrid() {
  updateGridRanges();

  // 既存のステーションセルをクリア
  document.querySelectorAll('.hex-wrapper, .hex-label').forEach(el => el.remove());
  stationWrappers.clear();

  // 空白セル（初回のみ描画）
  if (!grid._emptyDrawn) {
    for (let r = rMin; r <= rMax; r++) {
      for (let q = qMin; q <= qMax; q++) {
        if (occupiedKeys.has(`${q},${r}`)) continue;
        const {x, y} = hexToPixel(q, r);
        const cx = x + offX;
        const cy = y + offY;
        if (cx < -W || cx > gridW + W || cy < -H || cy > gridH + H) continue;

        const svgEl = document.createElementNS('http://www.w3.org/2000/svg','svg');
        svgEl.setAttribute('width', W+4);
        svgEl.setAttribute('height', H+4);
        svgEl.style.cssText = `position:absolute;left:${cx-W/2-2}px;top:${cy-H/2-2}px;pointer-events:none;`;
        const path = document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d', hexPath(W/2+2, H/2+2, SIZE-1));
        path.setAttribute('fill', '#111d2a');
        path.setAttribute('stroke', '#1e3045');
        path.setAttribute('stroke-width', '0.8');
        svgEl.appendChild(path);
        grid.appendChild(svgEl);
      }
    }
    grid._emptyDrawn = true;
  }

  // ステーションセル
  STATIONS.forEach(s => {
    const cx = s.px + offX;
    const cy = s.py + offY;
    const color = statusColor(s.status);
    const fill  = statusFill(s.status);

    const wrapper = document.createElement('div');
    wrapper.className = `hex-wrapper hex-${s.status}`;
    wrapper.style.cssText = `position:absolute;left:${cx-W/2-2}px;top:${cy-H/2-2}px;width:${W+4}px;height:${H+4}px;`;

    const svgEl = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgEl.setAttribute('width', W+4);
    svgEl.setAttribute('height', H+4);
    svgEl.classList.add('hex-svg');

    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d', hexPath(W/2+2, H/2+2, SIZE-1));
    path.setAttribute('fill', fill);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', s.status === 'standby' ? '1.5' : '1');
    svgEl.appendChild(path);
    wrapper.appendChild(svgEl);

    const label = document.createElement('div');
    label.className = 'hex-label';
    label.style.cssText = `left:${cx-W/2}px;top:${cy-H/2+2}px;width:${W}px;height:${H-4}px;`;
    label.innerHTML = `<div class="hex-name" style="color:#e8f4ff;">${shortName(s.station_name)}</div>`;
    grid.appendChild(label);

    if (s.status === 'checked' || s.status === 'unnecessary') {
      wrapper.style.cursor = 'default';
      wrapper.style.opacity = '0.6';
      wrapper.addEventListener('click', () => {});
    } else {
      wrapper.addEventListener('click', () => openDetail(s));
    }
    grid.appendChild(wrapper);
    stationWrappers.set(s.stationCd, wrapper);
  });
}

function updateCounts() {
  // standby/checked表示は削除済み
}

function shortName(name) {
  return name
    .replace('タイムズ','T ')
    .replace('駐車場','P')
    .replace('第','#');
}


let selfWrapper = null;   // 現在点滅中のセルwrapper
let selfSvgEl = null;     // 現在地専用SVG（空白セル上に乗せる用）
let watchId = null;

let LAT_REF = Math.max(...STATIONS.map(s => s.lat)) + 0.001;
let LNG_REF = Math.min(...STATIONS.map(s => s.lng)) - 0.001;
const LAT_M = 111320;
const LNG_M = 111320 * Math.cos(35.63 * Math.PI / 180);
const CELL_M = 150;

function recalcGpsRef() {
  LAT_REF = Math.max(...STATIONS.map(s => s.lat)) + 0.001;
  LNG_REF = Math.min(...STATIONS.map(s => s.lng)) - 0.001;
}

function axialRound(q, r) {
  const s = -q - r;
  let rq = Math.round(q), rr = Math.round(r), rs = Math.round(s);
  const dq = Math.abs(rq-q), dr = Math.abs(rr-r), ds = Math.abs(rs-s);
  if (dq > dr && dq > ds) rq = -rr - rs;
  else if (dr > ds) rr = -rq - rs;
  return [rq, rr];
}

function latLngToAxial(lat, lng) {
  // 緯度経度→メートル変換してからaxial座標に変換
  const xm = (lng - LNG_REF) * LNG_M;
  const ym = (LAT_REF - lat) * LAT_M;
  // pointy-top hex: size=CELL_M(メートル)
  const q = (2/3 * xm) / CELL_M;
  const r = (-1/3 * xm + Math.sqrt(3)/3 * ym) / CELL_M;
  return axialRound(q, r);
}

// STATIONSのaxial座標の最小値（オフセット基準）
let AXIAL_MIN_Q = Math.min(...STATIONS.map(s => {
  const [q] = latLngToAxial(s.lat, s.lng);
  return q;
}));
let AXIAL_MIN_R = Math.min(...STATIONS.map(s => {
  const [, r] = latLngToAxial(s.lat, s.lng);
  return r;
}));

function recalcAxialMin() {
  AXIAL_MIN_Q = Math.min(...STATIONS.map(s => {
    const [q] = latLngToAxial(s.lat, s.lng);
    return q;
  }));
  AXIAL_MIN_R = Math.min(...STATIONS.map(s => {
    const [, r] = latLngToAxial(s.lat, s.lng);
    return r;
  }));
}

function clearSelfCell() {
  if (selfWrapper) {
    selfWrapper.classList.remove('hex-self');
    selfWrapper = null;
  }
  if (selfSvgEl) {
    if (selfSvgEl._blink) clearInterval(selfSvgEl._blink);
    selfSvgEl.remove();
    selfSvgEl = null;
  }
}

function setSelfCell(q, r) {
  clearSelfCell();

  // q,rに対応するピクセル座標を計算
  const {x, y} = hexToPixel(q, r);
  const cx = x + offX;
  const cy = y + offY;

  // グリッド上に黄色の点滅SVGを直接生成（ステーション有無に関わらず）
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', W + 4);
  svg.setAttribute('height', H + 4);
  svg.style.cssText = `position:absolute;left:${cx-W/2-2}px;top:${cy-H/2-2}px;pointer-events:none;z-index:20;`;

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', hexPath(W/2+2, H/2+2, SIZE - 1));
  path.setAttribute('fill', 'rgba(255,224,77,0.15)');
  path.setAttribute('stroke', '#ffe04d');
  path.setAttribute('stroke-width', '2.5');
  svg.appendChild(path);
  grid.appendChild(svg);
  selfSvgEl = svg;

  // 点滅
  let visible = true;
  selfSvgEl._blink = setInterval(() => {
    visible = !visible;
    svg.style.opacity = visible ? '1' : '0.2';
  }, 600);

  // ミニマップ更新
  if (window._minimapRedraw) window._minimapRedraw(q, r);
}

function onGpsSuccess(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const [rawQ, rawR] = latLngToAxial(lat, lng);
  // STATIONSのq,r座標系に合わせてオフセット補正
  const q = rawQ - AXIAL_MIN_Q;
  const r = rawR - AXIAL_MIN_R;
  setSelfCell(q, r);
}

function onGpsError(err) {
  console.warn('GPS取得失敗:', err.message);
}

function startGps() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(onGpsSuccess, onGpsError, {
    enableHighAccuracy: true, timeout: 10000
  });
  watchId = navigator.geolocation.watchPosition(onGpsSuccess, onGpsError, {
    enableHighAccuracy: true, maximumAge: 30000
  });
}

// ===== 詳細パネル =====
let currentStation = null;

function openDetail(station) {
  currentStation = station;
  window._detailOpen = true;
  document.getElementById('detailStation').textContent = station.station_name;
  document.getElementById('detailCd').textContent = `ST: ${station.stationCd} ／ ${station.total || 0}台`;

  const container = document.getElementById('detailVehicles');
  container.innerHTML = '<div style="color:var(--text-dim);font-size:12px;padding:8px;text-align:center;">読み込み中...</div>';

  document.getElementById('detailPanel').classList.add('show');
  document.getElementById('overlay').classList.add('show');

  // GASからステーション詳細を取得
  fetch(`${GAS_URL}?action=getStationDetail&station=${encodeURIComponent(station.station_name)}&area=${AREA_KEY()}`)
    .then(r => r.json())
    .then(data => {
      if (data.result !== 'OK') throw new Error(data.error || 'GASエラー');
      renderVehicleCards(container, data.vehicles, station);
    })
    .catch(err => {
      container.innerHTML = `<div style="color:#ff4d4d;font-size:12px;padding:8px;">取得失敗: ${err.message}</div>`;
    });
}

function renderVehicleCards(container, vehicles, station) {
  container.innerHTML = '';

  if (!vehicles || vehicles.length === 0) {
    container.innerHTML = '<div style="color:var(--text-dim);font-size:12px;padding:8px;">車両データなし</div>';
    return;
  }

  vehicles.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.style.flexDirection = 'column';
    card.style.gap = '8px';

    // 上段: ステータスバー + 車両情報 + ボタン群
    const topRow = document.createElement('div');
    topRow.style.cssText = 'display:flex;align-items:center;gap:10px;width:100%;';
    topRow.innerHTML = `
      <div class="vehicle-status" style="background:${statusColor(v.status)};opacity:0.8;flex-shrink:0;"></div>
      <div class="vehicle-info" style="flex:1;min-width:0;">
        <div class="vehicle-plate">${v.plate}</div>
        <div class="vehicle-model">${v.model} ／ <span style="color:${statusColor(v.status)};font-size:12px;font-family:'Noto Sans JP',sans-serif;">${v.status}</span></div>
        ${v.lastChecked ? `<div style="font-size:11px;font-family:'Noto Sans JP',sans-serif;color:var(--text-dim);margin-top:2px;">前回: ${v.lastChecked}</div>` : ''}
      </div>
      <div class="vehicle-actions">
        <button class="btn-small btn-tire" onclick="goTireApp('${v.plate}','${station.station_name}','${v.model}')">点検</button>
      </div>
    `;
    card.appendChild(topRow);

    // 下段: 予約タイムライン
    if (v.timeline) {
      const tlRow = document.createElement('div');
      tlRow.style.cssText = 'width:100%;padding-top:6px;border-top:1px solid #1a2d40;';
      tlRow.appendChild(buildTimeline(v.timeline, v.getTime));
      card.appendChild(tlRow);
    }

    container.appendChild(card);
  });
}

function buildTimeline(timeline, getTime) {
  const timelineStr = timeline;
  if (!timelineStr) return document.createElement('div');

  // 予約表示アプリと同じロジック: getTimeを基準にそのまま表示
  let baseDate = new Date((getTime || '').replace(/-/g, '/'));
  if (isNaN(baseDate.getTime())) baseDate = new Date();

  const totalSlots = timelineStr.length; // 288 or 576
  const totalHours = totalSlots / 4;     // 72 or 144
  const timelineWidth = totalHours === 144 ? 3200 : 1600;

  // タイムラインバー（予約表示アプリと同じ）
  let slotsHtml = '';
  for (const ch of timelineStr) {
    const cls = ch === '○' ? 'tl-ok' : (ch === 's' ? 'tl-stopped' : 'tl-ng');
    slotsHtml += `<div class="tl-slot ${cls}"></div>`;
  }

  // ラベルとグリッドライン（予約表示アプリと同じ）
  let labelsHtml = '', gridsHtml = '';
  for (let h = 0; h < totalHours; h++) {
    const leftPos = (h / totalHours) * 100;
    const slotDate = new Date(baseDate.getTime() + h * 3600 * 1000);
    const currentHour = slotDate.getHours();
    if (currentHour % 2 === 0) {
      labelsHtml += `<div class="tl-label" style="left:${leftPos}%">${currentHour}</div>`;
      if (currentHour === 0) {
        const mm = slotDate.getMonth() + 1, dd = slotDate.getDate();
        labelsHtml += `<div class="tl-label tl-date" style="left:${leftPos}%;margin-left:6px;">${mm}/${dd}</div>`;
      }
    }
    gridsHtml += `<div class="tl-grid" style="left:${leftPos}%"></div>`;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'tl-scroll';
  wrapper.innerHTML = `
    <div class="tl-full" style="width:${timelineWidth}px">
      ${labelsHtml}
      <div class="tl-bar">${slotsHtml}</div>
      ${gridsHtml}
    </div>
  `;
  return wrapper;
}

const TIRE_APP_URL = 'https://rkworks2025-coder.github.io/TireCheck/';
const WORK_APP_URL = 'https://rkworks2025-coder.github.io/work/';
const JUNKAI_GAS_URL = 'https://script.google.com/macros/s/AKfycbyXbPaarnD7mQa_rqm6mk-Os3XBH6C731aGxk7ecJC5U3XjtwfMkeF429rezkAo79jN/exec';

// ===== 更新ボタン → yoyakuワークフローをトリガー =====
function triggerUpdate() {
  const btn = document.getElementById('updateBtn');
  btn.disabled = true;
  btn.textContent = '送信中...';

  const requestId = 'req-' + Date.now() + '-' + Math.random().toString(36).slice(-4);

  fetch(GAS_URL, {
    method: 'POST',
    body: JSON.stringify({
      action: 'update',
      area: AREA_KEY(),
      requestId
    }),
    keepalive: true
  })
  .then(r => r.json())
  .then(data => {
    if (data.result === 'OK') {
      btn.textContent = '更新中...';
      // 5分後にデータを再取得してグリッドを更新
      setTimeout(() => {
        btn.textContent = '再読込中';
        fetchMapData().then(() => {
          btn.disabled = false;
          btn.textContent = '更新';
        });
      }, 5 * 60 * 1000);
    } else {
      throw new Error(data.error || '更新失敗');
    }
  })
  .catch(err => {
    console.error('更新エラー:', err);
    btn.disabled = false;
    btn.textContent = '更新';
    alert('更新リクエストに失敗しました。再度お試しください。');
  });
}
// ===== スキャン機能 =====
let scanWrappers = [];
let scanMode = localStorage.getItem('jks_scan_mode') || 'normal';

function switchScanMode(mode) {
  scanMode = mode;
  localStorage.setItem('jks_scan_mode', mode);
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  clearScanBadges();
}

// 初期モードをボタンに反映（DOM構築後）
document.addEventListener('DOMContentLoaded', () => {
  switchScanMode(scanMode);
});




function clearScanBadges() {
  scanWrappers.forEach(({wrapper, blinkId}) => {
    wrapper.classList.remove('hex-scan-blink');
    const badge = wrapper.querySelector('.scan-badge');
    if (badge) badge.remove();
    if (blinkId) clearInterval(blinkId);
    const svgEl = wrapper.querySelector('svg');
    if (svgEl) svgEl.style.opacity = '1';
  });
  scanWrappers = [];
}

function filterByClusterMode(items) {
  // ステーション単位でグループ化
  const groups = new Map();
  items.forEach(item => {
    if (!groups.has(item.station)) groups.set(item.station, []);
    groups.get(item.station).push(item);
  });

  const displayItems = [];
  groups.forEach((group, stationName) => {
    const rep = group.find(c => c.isUrgent) || group[0];
    const activeCount = group.length;
    const total = rep.stationTotal || activeCount;
    const checked = rep.stationChecked || 0;
    const remaining = total - checked;

    // 初代JKSと同じ完遂条件ロジック
    let shouldShow = false;
    if (remaining === 1 && activeCount >= 1) {
      shouldShow = true;
    } else if (remaining === 2 && activeCount >= 2) {
      shouldShow = true;
    } else if (remaining === 3 && activeCount >= 3) {
      shouldShow = true;
    } else if (total >= 4 && remaining >= 4 && activeCount >= 2) {
      shouldShow = true;
      // 作業後に残り1台になる場合は非表示
      if ((remaining - activeCount) === 1) shouldShow = false;
    }

    if (shouldShow) {
      rep.clusterInfo = { activeCount, total, remaining };
      displayItems.push(rep);
    }
  });

  return displayItems.slice(0, 5);
}

function applyScanBadges(items) {
  clearScanBadges();

  let displayItems;
  if (scanMode === 'cluster') {
    displayItems = filterByClusterMode(items);
    if (displayItems.length === 0) {
      alert('完遂条件を満たすステーションが見つかりません');
      return;
    }
  } else {
    // ノーマルモード: 同一ステーションをユニーク化して上位5件
    const seen = new Set();
    displayItems = [];
    for (const item of items) {
      if (!seen.has(item.station)) {
        seen.add(item.station);
        displayItems.push(item);
      }
      if (displayItems.length >= 5) break;
    }
  }

  displayItems.forEach((item, idx) => {
    const s = STATIONS.find(st => st.station_name === item.station);
    if (!s) return;
    const wrapper = stationWrappers.get(s.stationCd);
    if (!wrapper) return;

    // バッジ（赤丸に白数字）
    const badge = document.createElement('div');
    badge.className = 'scan-badge';
    badge.textContent = String(idx + 1);

    // クラスターモードはバッジ色を変える（青）
    if (scanMode === 'cluster') badge.style.background = '#3d9bff';
    wrapper.appendChild(badge);

    // 枠の点滅
    const svgEl = wrapper.querySelector('svg');
    let blinkOn = true;
    const blinkId = setInterval(() => {
      blinkOn = !blinkOn;
      if (svgEl) svgEl.style.opacity = blinkOn ? '1' : '0.25';
    }, 500);

    scanWrappers.push({ wrapper, blinkId });
  });
}

async function triggerScan() {
  const btn = document.getElementById('scanBtn');
  if (!navigator.geolocation) {
    alert('GPS非対応のブラウザです');
    return;
  }

  btn.disabled = true;
  btn.classList.add('scanning');
  btn.textContent = '取得中...';

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    btn.textContent = 'スキャン中...';
    try {
      const res = await fetch(`${GAS_URL}?action=scan&lat=${lat}&lng=${lng}&area=${AREA_KEY()}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      applyScanBadges(data.items || []);
    } catch(err) {
      console.error('スキャンエラー:', err);
      alert('スキャン失敗: ' + err.message);
    } finally {
      btn.disabled = false;
      btn.classList.remove('scanning');
      btn.textContent = 'スキャン';
    }
  }, (err) => {
    console.warn('GPS取得失敗:', err.message);
    alert('現在地を取得できませんでした');
    btn.disabled = false;
    btn.classList.remove('scanning');
    btn.textContent = 'スキャン';
  }, { enableHighAccuracy: true, timeout: 10000 });
}

function showToast(msg) {
  let toast = document.getElementById('jks2-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'jks2-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  if (toast._timer) clearTimeout(toast._timer);
  // タップで早期に閉じられる
  toast.onclick = () => { toast.classList.remove('show'); };
}

function goTireApp(plate, stationName, model) {
  const JUNKAI_AREA_URL = `https://rkworks2025-coder.github.io/-/area.html?city=${CURRENT_AREA}`;

  // 巡回アプリ側に「この車両の点検ボタンを自動クリックして」という指示をlocalStorageで渡す
  try {
    localStorage.setItem('junkai:auto_tire_plate',   plate);
    localStorage.setItem('junkai:auto_tire_station', stationName);
    localStorage.setItem('junkai:auto_tire_model',   model);
  } catch(e) { console.error(e); }

  // 巡回アプリへの切り替えを促すトースト
  showToast(`【${plate}】\n巡回アプリに切り替えてください`);
}

// ===== TMAボタン → 作業管理アプリへ遷移 =====
function goTmaAction(plate, stationName, model, btnEl) {
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = '遷移中'; }

  const requestId = 'req-' + Date.now() + '-' + Math.random().toString(36).slice(-4);
  const params = new URLSearchParams({
    station:    stationName,
    model:      model,
    plate_full: plate,
    tma_plate:  plate,
    tma_req_id: requestId
  });

  // タイヤ点検アプリがプリロードした splash_img があれば引き継ぐ
  const preloadedImg = localStorage.getItem('junkai:preloaded_splash_url');
  if (preloadedImg) {
    params.set('splash_img', preloadedImg);
    localStorage.removeItem('junkai:preloaded_splash_url');
  }

  // GAS通信は作業管理アプリ側で行う（ここでは遷移のみ）
  location.href = `${WORK_APP_URL}?${params.toString()}`;
}

// ===== チェックボタン =====
function doCheck(plate, stationName, checked, btnEl) {
  // モーダル確認
  showCheckModal(plate, checked, () => {
    _executeCheck(plate, stationName, checked, btnEl);
  });
}

function _executeCheck(plate, stationName, checked, btnEl) {
  if (btnEl) { btnEl.disabled = true; }

  // 巡回アプリと同じsyncInspectionAll形式でPOST
  const payload = [{
    plate,
    station: stationName,
    checked,
    status: checked ? 'checked' : 'standby'
  }];

  fetch(JUNKAI_GAS_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'syncInspection', data: payload }),
    keepalive: true
  })
  .then(r => r.json())
  .then(() => {
    // UIを即座に反映
    const s = STATIONS.find(st => st.station_name === stationName);
    if (s) {
      if (checked) {
        s.standby = Math.max(0, (s.standby || 1) - 1);
        s.checked = (s.checked || 0) + 1;
        if (s.standby === 0) s.status = 'checked';
      } else {
        s.standby = (s.standby || 0) + 1;
        s.checked = Math.max(0, (s.checked || 1) - 1);
        if (s.standby > 0) s.status = 'standby';
      }
      renderGrid();
      updateCounts();
    }
    closeDetail();
  })
  .catch(() => {
    if (btnEl) { btnEl.disabled = false; }
    alert('送信失敗。再度お試しください。');
  });
}

// チェック確認モーダル
function showCheckModal(plate, checked, onOk) {
  const msg = checked ? `【${plate}】\nチェックしますか？` : `【${plate}】\nチェックを外しますか？`;
  if (confirm(msg)) onOk();
}

// ===== pageshow: 戻り時の自動アクション（巡回アプリのhandleReturnActionsと同等） =====
window.addEventListener('pageshow', (e) => {
  if (!e.persisted) return;

  // 1. 作業管理アプリからの戻り → 該当車両を自動チェック
  const compPlate = localStorage.getItem('junkai:completed_plate');
  if (compPlate) {
    localStorage.removeItem('junkai:completed_plate');
    // JKS-IIでは詳細パネルが開いたままの場合があるため、
    // 該当ステーションを再取得してチェック処理
    const station = STATIONS.find(s =>
      s.station_name === currentStation?.station_name
    );
    if (station && currentStation) {
      _executeCheck(compPlate, currentStation.station_name, true, null);
    }
  }

  // 2. タイヤ点検アプリからの戻り → TMAボタンを自動発火
  const tireCompPlate = localStorage.getItem('junkai:tire_completed_plate');
  if (!tireCompPlate) return;

  const workMode = localStorage.getItem('junkai:work_mode') || 'single';
  if (workMode === 'continuous') {
    localStorage.removeItem('junkai:tire_completed_plate');
    return;
  }

  // 詳細パネルが開いていれば該当車両のTMAボタンを自動クリック
  // 最大3秒（100ms × 30回）監視
  let retryCount = 0;
  const maxRetries = 30;
  const monitorInterval = setInterval(() => {
    // 車両カード内のTMAボタンを探す
    const tmaBtns = document.querySelectorAll('.tma-btn-real');
    let fired = false;
    tmaBtns.forEach(btn => {
      if (btn.dataset.plate === tireCompPlate && !btn.disabled) {
        clearInterval(monitorInterval);
        localStorage.removeItem('junkai:tire_completed_plate');
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => btn.click(), 400);
        fired = true;
      }
    });
    if (fired) return;

    retryCount++;
    if (retryCount >= maxRetries) {
      clearInterval(monitorInterval);
      localStorage.removeItem('junkai:tire_completed_plate');
    }
  }, 100);
});

// ===== visibilitychange: JKS-IIがフォアグラウンドに戻った時 =====
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;

  // 詳細パネルが開いていれば該当ステーションのデータを再取得
  if (window._detailOpen && currentStation) {
    const container = document.getElementById('detailVehicles');
    fetch(`${GAS_URL}?action=getStationDetail&station=${encodeURIComponent(currentStation.station_name)}&area=${AREA_KEY()}`)
      .then(r => r.json())
      .then(data => {
        if (data.result !== 'OK') return;
        if (data.vehicles.length === 0) {
          // 全台完了 → パネルを閉じてグリッドを更新
          closeDetail();
          fetchMapData();
        } else {
          // 残り台数あり → パネルを再描画してグリッドも更新
          renderVehicleCards(container, data.vehicles, currentStation);
          fetchMapData();
        }
      })
      .catch(() => {});
  } else {
    // 詳細パネルが閉じていれば全体グリッドを更新
    fetchMapData();
  }
});

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
  window._detailOpen = false;
}

function openNav() {
  if (!currentStation) return;
  const url = `https://www.google.com/maps/dir/?api=1&destination=${currentStation.lat},${currentStation.lng}&travelmode=driving`;
  window.open(url, '_blank');
}

// オーバーレイタッチでcloseDetail
document.getElementById('overlay').addEventListener('touchstart', (e) => {
  e.preventDefault();
  closeDetail();
}, { passive: false });

// ===== ミニマップ =====
function initMinimap() {
  const MINI_W = 120, MINI_H = 120;
  const canvas = document.getElementById('minimapCanvas');
  canvas.width = MINI_W;
  canvas.height = MINI_H;
  const ctx = canvas.getContext('2d');

  // グリッド全体 → ミニマップのスケール
  const scaleX = MINI_W / gridW;
  const scaleY = MINI_H / gridH;
  const scale = Math.min(scaleX, scaleY) * 0.95;
  const padX = (MINI_W - gridW * scale) / 2;
  const padY = (MINI_H - gridH * scale) / 2;

  function drawMinimap() {
    ctx.clearRect(0, 0, MINI_W, MINI_H);

    // 空白セル（薄いグレー点）
    for (let r = rMin; r <= rMax; r++) {
      for (let q = qMin; q <= qMax; q++) {
        if (occupiedKeys.has(`${q},${r}`)) continue;
        const {x, y} = hexToPixel(q, r);
        const mx = (x + offX) * scale + padX;
        const my = (y + offY) * scale + padY;
        ctx.beginPath();
        ctx.arc(mx, my, 1.5, 0, Math.PI*2);
        ctx.fillStyle = '#1e3045';
        ctx.fill();
      }
    }

    // ステーションセル（ステータス色の点）
    STATIONS.forEach(s => {
      const mx = (s.px + offX) * scale + padX;
      const my = (s.py + offY) * scale + padY;
      const r = Math.max(2.5, SIZE * scale * 0.6);
      ctx.beginPath();
      ctx.arc(mx, my, r, 0, Math.PI*2);
      const colors = {
        standby: '#00e5a0',
        checked: '#ff4d8d',
        '7days_rule': '#3d9bff',
        stopped: '#2a3545',
      };
      ctx.fillStyle = colors[s.status] || '#2a3545';
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
  }

  drawMinimap();

  let _selfQ = null, _selfR = null;

  window._minimapRedraw = (q, r) => {
    _selfQ = q; _selfR = r;
    drawMinimap();
    const {x, y} = hexToPixel(q, r);
    const mx = (x + offX) * scale + padX;
    const my = (y + offY) * scale + padY;
    ctx.beginPath();
    ctx.arc(mx, my, 3.5, 0, Math.PI*2);
    ctx.fillStyle = '#ffe04d';
    ctx.globalAlpha = 1;
    ctx.fill();
  };

  // ビューポート枠の更新（transformベース）
  const viewport = document.getElementById('minimapViewport');

  window._updateMinimapViewport = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight - 52;
    // 現在のtransform状態から表示領域を計算
    const visLeft   = (-panX / curScale) * scale + padX;
    const visTop    = (-panY / curScale) * scale + padY;
    const visW      = (vw / curScale) * scale;
    const visH      = (vh / curScale) * scale;
    viewport.style.left   = Math.max(0, visLeft) + 'px';
    viewport.style.top    = Math.max(0, visTop)  + 'px';
    viewport.style.width  = Math.min(visW, MINI_W) + 'px';
    viewport.style.height = Math.min(visH, MINI_H) + 'px';
  };

  window._updateMinimapViewport = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight - 52;
    const visLeft   = (-panX / curScale) * scale + padX;
    const visTop    = (-panY / curScale) * scale + padY;
    const visW      = (vw / curScale) * scale;
    const visH      = (vh / curScale) * scale;
    viewport.style.left   = Math.max(0, visLeft) + 'px';
    viewport.style.top    = Math.max(0, visTop)  + 'px';
    viewport.style.width  = Math.min(visW, MINI_W) + 'px';
    viewport.style.height = Math.min(visH, MINI_H) + 'px';
  };

  // resizeリスナーは一度だけ登録
  if (!window._minimapResizeAdded) {
    window.addEventListener('resize', () => { if (window._updateMinimapViewport) window._updateMinimapViewport(); });
    window._minimapResizeAdded = true;
  }

  // ミニマップのtouchstart/clickはoldListenerを除去して再登録
  const minimap = document.getElementById('minimap');
  if (minimap._clickHandler) minimap.removeEventListener('click', minimap._clickHandler);

  // ドラッグ移動（タッチ）
  if (!minimap._dragInited) {
    minimap._dragInited = true;
    let dragStartX, dragStartY, origLeft, origTop, isDragging = false;

    minimap.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      dragStartX = touch.clientX;
      dragStartY = touch.clientY;
      const rect = minimap.getBoundingClientRect();
      origLeft = rect.left;
      origTop  = rect.top;
      isDragging = false;
    }, { passive: true });

    minimap.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      const dx = touch.clientX - dragStartX;
      const dy = touch.clientY - dragStartY;
      if (!isDragging && Math.abs(dx) + Math.abs(dy) > 6) isDragging = true;
      if (!isDragging) return;
      e.stopPropagation();
      minimap.classList.add('dragging');
      const vw = window.innerWidth, vh = window.innerHeight;
      const newLeft = Math.max(0, Math.min(vw - 120, origLeft + dx));
      const newTop  = Math.max(52, Math.min(vh - 120, origTop  + dy));
      minimap.style.right  = 'auto';
      minimap.style.bottom = 'auto';
      minimap.style.left   = newLeft + 'px';
      minimap.style.top    = newTop  + 'px';
    }, { passive: true });

    minimap.addEventListener('touchend', () => {
      minimap.classList.remove('dragging');
      // ドラッグ中だった場合はclickを発火させない
      minimap._wasDragged = isDragging;
      isDragging = false;
    }, { passive: true });
  }

  // クリックでグリッドジャンプ（ドラッグ直後は無視）
  minimap._clickHandler = (e) => {
    if (minimap._wasDragged) { minimap._wasDragged = false; return; }
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const gridX = (mx - padX) / scale;
    const gridY = (my - padY) / scale;
    panX = -(gridX * curScale) + window.innerWidth  / 2;
    panY = -(gridY * curScale) + (window.innerHeight - 52) / 2;
    applyTransform();
  };
  minimap.addEventListener('click', minimap._clickHandler);
}

// ===== ピンチズーム・パン =====
const mainArea    = document.getElementById('mainArea');
const gridTransform = document.getElementById('gridTransform');

let curScale = 1;
let panX = 0, panY = 0;
let isPinching = false;
let lastDist = 0;
let lastMidX = 0, lastMidY = 0;
let isDragging = false;
let dragStartX = 0, dragStartY = 0;
let dragPanX = 0, dragPanY = 0;

function applyTransform() {
  gridTransform.style.transform = `translate(${panX}px,${panY}px) scale(${curScale})`;
  if (window._updateMinimapViewport) window._updateMinimapViewport();
}

function clampPan() {
  const vw = window.innerWidth;
  const vh = window.innerHeight - 52;
  const scaledW = gridW * curScale;
  const scaledH = gridH * curScale;
  // グリッドが画面より小さい場合は中央揃え、大きい場合ははみ出し防止
  if (scaledW <= vw) {
    panX = (vw - scaledW) / 2;
  } else {
    panX = Math.min(0, Math.max(vw - scaledW, panX));
  }
  if (scaledH <= vh) {
    panY = (vh - scaledH) / 2;
  } else {
    panY = Math.min(0, Math.max(vh - scaledH, panY));
  }
}

function initPanZoom() {
  const vw = window.innerWidth;
  const vh = window.innerHeight - 52;
  const scaleX = vw / gridW;
  const scaleY = vh / gridH;
  curScale = Math.min(scaleX, scaleY) * 0.92;

  // 初期フォーカス: エリアに応じた中心ステーション
  const focusCd = CURRENT_AREA === 'fuchu' ? 'T864' : 'R265'; // 府中町第３ or 聖蹟桜ヶ丘駅前交差点
  const target = STATIONS.find(s => s.stationCd === focusCd) || STATIONS[0];
  if (target) {
    panX = vw / 2 - (target.px + offX) * curScale;
    panY = vh / 2 - (target.py + offY) * curScale;
  }
  clampPan();
  applyTransform();
}

// タッチイベント
mainArea.addEventListener('touchstart', (e) => {
  if (window._detailOpen) {
    // タッチ位置が詳細パネルの外かどうか判定
    const panel = document.getElementById('detailPanel');
    const panelRect = panel.getBoundingClientRect();
    const touch = e.touches[0];
    const isOutsidePanel = touch.clientY < panelRect.top;
    if (isOutsidePanel) {
      closeDetail();
    }
    return;
  }
  if (e.touches.length === 2) {
    isPinching = true;
    isDragging = false;
    const dx = e.touches[1].clientX - e.touches[0].clientX;
    const dy = e.touches[1].clientY - e.touches[0].clientY;
    lastDist = Math.hypot(dx, dy);
    lastMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    lastMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - 52;
  } else if (e.touches.length === 1) {
    isDragging = true;
    isPinching = false;
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
    dragPanX = panX;
    dragPanY = panY;
  }
}, { passive: true });

mainArea.addEventListener('touchmove', (e) => {
  if (window._detailOpen) return;
  e.preventDefault();
  if (isPinching && e.touches.length === 2) {
    const dx = e.touches[1].clientX - e.touches[0].clientX;
    const dy = e.touches[1].clientY - e.touches[0].clientY;
    const dist = Math.hypot(dx, dy);
    const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - 52;

    const zoomFactor = dist / lastDist;
    const newScale = Math.min(3, Math.max(0.3, curScale * zoomFactor));

    // ズームの中心点を維持
    panX = midX - (midX - panX) * (newScale / curScale);
    panY = midY - (midY - panY) * (newScale / curScale);
    curScale = newScale;

    // パン移動
    panX += midX - lastMidX;
    panY += midY - lastMidY;

    lastDist = dist;
    lastMidX = midX;
    lastMidY = midY;

    clampPan();
    applyTransform();
  } else if (isDragging && e.touches.length === 1) {
    panX = dragPanX + (e.touches[0].clientX - dragStartX);
    panY = dragPanY + (e.touches[0].clientY - dragStartY);
    clampPan();
    applyTransform();
  }
}, { passive: false });

mainArea.addEventListener('touchend', (e) => {
  if (e.touches.length < 2) isPinching = false;
  if (e.touches.length === 0) isDragging = false;
}, { passive: true });

// マウスイベント（PC用）
mainArea.addEventListener('mousedown', (e) => {
  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragPanX = panX;
  dragPanY = panY;
  mainArea.style.cursor = 'grabbing';
});
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  panX = dragPanX + (e.clientX - dragStartX);
  panY = dragPanY + (e.clientY - dragStartY);
  clampPan();
  applyTransform();
});
window.addEventListener('mouseup', () => {
  isDragging = false;
  mainArea.style.cursor = '';
});
mainArea.addEventListener('wheel', (e) => {
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.1 : 0.9;
  const newScale = Math.min(3, Math.max(0.3, curScale * factor));
  const mx = e.clientX;
  const my = e.clientY - 52;
  panX = mx - (mx - panX) * (newScale / curScale);
  panY = my - (my - panY) * (newScale / curScale);
  curScale = newScale;
  clampPan();
  applyTransform();
}, { passive: false });

// ===== 起動 =====
window.addEventListener('load', () => {
  fetchMapData();
});
