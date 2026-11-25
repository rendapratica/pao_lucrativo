/* art.js — fotos dos bolos (img/receitas) e, na falta delas, ilustrações originais (SVG) usadas quando
   não há uma fotografia. Nenhuma imagem externa: funciona offline e sem direitos autorais. */
(function (global) {
  'use strict';
  const DL = (global.DL = global.DL || {});
  let uid = 0;

  function pseudo(seed) {
    let a = seed >>> 0;
    return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  const f = (n) => Math.round(n * 10) / 10;

  // Configuração de cada bolo: cores do fundo/mesa, da bola, da forminha e do acabamento
  const K = {
    brigadeiro: { label: 'Brigadeiros tradicionais com granulado', bg: ['#fbefd6', '#efd3a6'], table: ['#d9a86c', '#b9824a'], base: ['#8a4f2c', '#2c150b'], cup: ['#e6c25f', '#f8e8b0'], top: 'sprinkles', colors: ['#24110a', '#4d2814', '#150804'] },
    gourmet: { label: 'Brigadeiros gourmet brilhantes', bg: ['#f5e6d0', '#e0bd92'], table: ['#caa06a', '#a8794a'], base: ['#6c3a22', '#220f08'], cup: ['#d8b25a', '#f2dea0'], top: 'gloss', colors: ['#e8c866', '#f6e7a8'] },
    beijinho: { label: 'Beijinhos de coco com cravo', bg: ['#fdf3df', '#f0d9ad'], table: ['#dcb27a', '#bd8b55'], base: ['#fffaf0', '#e8d9b8'], cup: ['#e9b8a2', '#f9ded0'], top: 'coconut', colors: ['#ffffff', '#f6ecd5'] },
    trufa: { label: 'Trufas de chocolate com cacau', bg: ['#f4e4cf', '#dcb88f'], table: ['#c49462', '#9d6f43'], base: ['#7b4a2f', '#3a1d10'], cup: ['#9b6a3f', '#d9b787'], top: 'cocoa', colors: ['#9a6a45', '#5c3420', '#b88a62'] },
    maracuja: { label: 'Trufas de maracujá', bg: ['#fff3d2', '#f4d98a'], table: ['#dcb27a', '#bd8b55'], base: ['#fbe08a', '#e0a92e'], cup: ['#f0a14a', '#f8d9a0'], top: 'seeds', colors: ['#3a2418', '#7a5b2a'] },
    ninho: { label: 'Docinhos de leite em pó', bg: ['#fdf5e3', '#f1dcb2'], table: ['#d9ad74', '#b98a56'], base: ['#fffbee', '#f0e2bd'], cup: ['#f2d58a', '#fbeec2'], top: 'powder', colors: ['#ffffff', '#fff3d4'] },
    cajuzinho: { label: 'Cajuzinhos açucarados', bg: ['#f8e9d0', '#e5c391'], table: ['#cfa066', '#a97a47'], base: ['#8a5530', '#3f2112'], cup: ['#c9923f', '#ecd09a'], top: 'sugar', colors: ['#ffffff', '#f4e9d6'] },
    olho: { label: 'Olhos de sogra', bg: ['#f4e6d8', '#dcbb9a'], table: ['#c99a68', '#a2733f'], base: ['#6a3b4a', '#2c1520'], cup: ['#cfa458', '#f0dba6'], top: 'sugar', colors: ['#ffffff', '#fbeedd'] },
    'pao-frances': { label: 'Pão francês', bg: ['#fff4d0', '#f7de8a'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'baguette', crust: ['#e9ad4d', '#b9741f'] },
    'pao-forma': { label: 'Pão de forma', bg: ['#fff4d0', '#f7de8a'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'loaf', crust: ['#ebb85f', '#b97a26'] },
    'pao-integral': { label: 'Pão integral', bg: ['#fff1c8', '#f3d98a'], table: ['#dcbd7a', '#bf9a4e'], bread: true, shape: 'loaf', crust: ['#b8873f', '#7a5220'] },
    'pao-doce': { label: 'Pão doce', bg: ['#fff3cf', '#f8dc84'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'rolls', crust: ['#f4b94f', '#c9822a'] },
    'pao-queijo': { label: 'Pão de queijo', bg: ['#fff6d6', '#f9e08f'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'cheese', crust: ['#f8d67f', '#e0a83a'] },
    rosca: { label: 'Rosca doce', bg: ['#fff3cf', '#f8dc84'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'ring', crust: ['#f2b758', '#c98a30'] },
    broa: { label: 'Broa de milho', bg: ['#fff1c8', '#f6d97c'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'loaf', crust: ['#e8bb55', '#b8862c'] },
    croissant: { label: 'Croissants folhados', bg: ['#fff3d2', '#f6d98a'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'croissant', crust: ['#eeb54f', '#a8641a'] },
    brioche: { label: 'Brioches', bg: ['#fff1cc', '#f5d684'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'brioche', crust: ['#eaa94a', '#a65d16'] },
    sonho: { label: 'Sonhos com açúcar', bg: ['#fff3d6', '#f6dc96'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'sonho', crust: ['#f0b968', '#c07a2a'] },
    donut: { label: 'Donuts glaceados', bg: ['#fdeee4', '#f5d3c0'], table: ['#dcb27a', '#bd8b55'], bread: true, shape: 'donut', crust: ['#e8b266', '#b9772a'], glaze: ['#f7c6d4', '#ffffff'] },
    churros: { label: 'Churros com açúcar e canela', bg: ['#fff1d2', '#f4d890'], table: ['#dcb27a', '#bd8b55'], bread: true, shape: 'churros', crust: ['#e8ae5e', '#b4701f'] },
    canela: { label: 'Rolinhos de canela', bg: ['#fdf0dc', '#f2d6a8'], table: ['#dcb27a', '#bd8b55'], bread: true, shape: 'spiral', crust: ['#f3bd6c', '#c07f2c'] },
    tranca: { label: 'Pão trançado', bg: ['#fff2d0', '#f6da8c'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'braid', crust: ['#f0b858', '#b26c1e'] },
    focaccia: { label: 'Focaccia', bg: ['#fff4d6', '#f5de9a'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'focaccia', crust: ['#f3c872', '#c58a2c'] },
    sirio: { label: 'Pão sírio', bg: ['#fff6e0', '#f5e1ae'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'sirio', crust: ['#f6dca4', '#d2a85c'] },
    esfiha: { label: 'Esfihas abertas', bg: ['#fff1d6', '#f4d39a'], table: ['#dcb27a', '#bd8b55'], bread: true, shape: 'esfiha', crust: ['#f0bb66', '#b87a28'] },
    enrolado: { label: 'Enroladinhos assados', bg: ['#fff1d4', '#f4d894'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'enrolado', crust: ['#f2bd62', '#b5701f'] },
    creme: { label: 'Recheios e coberturas', bg: ['#fff6e2', '#f6e3b4'], table: ['#e3c37a', '#c9a24b'], bread: true, shape: 'bowl', crust: ['#fff3c9', '#f0cf7a'] },
    brownie: { label: 'Brownies de chocolate', bg: ['#f6e5cd', '#e3c08f'], table: ['#c99a63', '#9d6e3f'], square: true },
    palha: { label: 'Palha italiana', bg: ['#f8e8cf', '#e6c796'], table: ['#d3a56c', '#ad7d49'], square: true, palha: true },
    'pote-choc': { label: 'Bolo no pote de chocolate', bg: ['#f7e6d0', '#e4bf94'], table: ['#caa06a', '#a8794a'], jar: true, layers: ['#4a2616', '#a8683a', '#4a2616', '#a8683a'], topc: '#5a2e1b', sprinkles: true },
    'pote-ninho': { label: 'Bolo no pote de ninho com morango', bg: ['#fdeee4', '#f4cfba'], table: ['#d9ad74', '#b98a56'], jar: true, layers: ['#f7e3b4', '#fbf4e2', '#e06a78', '#fbf4e2'], topc: '#fffaf0', berry: true },
  };
  DL.ART_KINDS = Object.keys(K).concat(['mix']);

  // Categoria de produto -> ilustração padrão
  DL.artForCategory = (cat) => ({ 'Pães salgados': 'pao-frances', 'Pães doces': 'pao-doce', 'Roscas e broas': 'rosca', 'Salgados de forno': 'pao-queijo', 'Massas e recheios': 'creme', 'Brioches e folhados': 'croissant', 'Sonhos e fritos': 'sonho' })[cat] || 'mix';

  function ballScene(id, cfg, rand, balls) {
    let s = '';
    balls.forEach((b) => {
      const c = b.cfg || cfg, r = b.r, cx = b.x, cy = b.y;
      const topY = cy + r * 0.42, botY = cy + r * 1.08, wTop = r * 1.08, wBot = r * 0.74, gid = id + b.n;
      s += '<defs><radialGradient id="' + gid + 'b" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="' + c.base[0] + '"/><stop offset="1" stop-color="' + c.base[1] + '"/></radialGradient>' +
        '<linearGradient id="' + gid + 'c" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + c.cup[0] + '"/><stop offset=".5" stop-color="' + c.cup[1] + '"/><stop offset="1" stop-color="' + c.cup[0] + '"/></linearGradient></defs>';
      s += '<ellipse cx="' + cx + '" cy="' + f(cy + r * 1.07) + '" rx="' + f(r * 1.05) + '" ry="' + f(r * 0.2) + '" fill="rgba(60,30,10,.28)"/>';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="url(#' + gid + 'b)"/>';
      const n = c.top === 'sprinkles' ? 70 : c.top === 'coconut' ? 130 : c.top === 'cocoa' ? 90 : c.top === 'powder' ? 110 : c.top === 'sugar' ? 120 : c.top === 'seeds' ? 22 : 10;
      for (let i = 0; i < n; i++) {
        const ang = rand() * Math.PI * 2, d = Math.sqrt(rand()) * r * 0.93, x = cx + Math.cos(ang) * d, y = cy + Math.sin(ang) * d, col = c.colors[Math.floor(rand() * c.colors.length)];
        if (c.top === 'sprinkles') s += '<rect x="' + f(x - 4.5) + '" y="' + f(y - 1.3) + '" width="9" height="2.6" rx="1.3" fill="' + col + '" transform="rotate(' + f(rand() * 180) + ' ' + f(x) + ' ' + f(y) + ')"/>';
        else if (c.top === 'seeds') s += '<ellipse cx="' + f(x) + '" cy="' + f(y) + '" rx="2.2" ry="1.5" fill="' + col + '" opacity=".85"/>';
        else if (c.top === 'gloss') s += '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + f(1 + rand() * 1.6) + '" fill="' + col + '" opacity=".9"/>';
        else s += '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + f(1 + rand() * (c.top === 'coconut' ? 2.6 : 1.9)) + '" fill="' + col + '" opacity="' + (c.top === 'cocoa' ? '.55' : '.92') + '"/>';
      }
      if (c.top === 'cocoa') s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="rgba(140,90,55,.28)"/>';
      if (c.top === 'gloss') s += '<ellipse cx="' + f(cx - r * 0.34) + '" cy="' + f(cy - r * 0.42) + '" rx="' + f(r * 0.3) + '" ry="' + f(r * 0.15) + '" fill="#fff" opacity=".55" transform="rotate(-28 ' + f(cx - r * 0.34) + ' ' + f(cy - r * 0.42) + ')"/>';
      else s += '<ellipse cx="' + f(cx - r * 0.36) + '" cy="' + f(cy - r * 0.42) + '" rx="' + f(r * 0.24) + '" ry="' + f(r * 0.12) + '" fill="#fff" opacity=".22" transform="rotate(-28 ' + f(cx - r * 0.36) + ' ' + f(cy - r * 0.42) + ')"/>';
      if (c.top === 'coconut') s += '<g transform="translate(' + f(cx) + ' ' + f(cy - r * 0.12) + ')"><circle r="4.2" fill="#4b2a18"/><path d="M-5 -5 L0 -1 L5 -5 M-5 5 L0 1 L5 5 M-5 0 L5 0" stroke="#4b2a18" stroke-width="1.6" stroke-linecap="round" fill="none"/></g>';
      s += '<path d="M' + f(cx - wTop) + ' ' + f(topY) + ' L' + f(cx - wBot) + ' ' + f(botY) + ' L' + f(cx + wBot) + ' ' + f(botY) + ' L' + f(cx + wTop) + ' ' + f(topY) + ' Z" fill="url(#' + gid + 'c)"/>';
      for (let i = -5; i <= 5; i++) s += '<line x1="' + f(cx + (i * wTop) / 5.2) + '" y1="' + f(topY) + '" x2="' + f(cx + (i * wBot) / 5.2) + '" y2="' + f(botY) + '" stroke="rgba(110,70,20,.32)" stroke-width="1.3"/>';
      s += '<path d="M' + f(cx - wTop) + ' ' + f(topY) + ' Q' + f(cx) + ' ' + f(topY + r * 0.22) + ' ' + f(cx + wTop) + ' ' + f(topY) + '" fill="none" stroke="rgba(110,70,20,.4)" stroke-width="2"/>';
    });
    return s;
  }

  function brownieScene(id, rand, palha) {
    let s = '<defs><linearGradient id="' + id + 'bt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + (palha ? '#8a5836' : '#5a3019') + '"/><stop offset="1" stop-color="' + (palha ? '#4d2a16' : '#2d160c') + '"/></linearGradient></defs>';
    s += '<ellipse cx="200" cy="232" rx="165" ry="30" fill="#fffaf0" opacity=".9"/><ellipse cx="200" cy="232" rx="165" ry="30" fill="none" stroke="#ead9bd" stroke-width="3"/>';
    const pieces = palha ? [[92, 150, 78, 60], [168, 134, 78, 60], [244, 150, 78, 60], [130, 186, 78, 56], [206, 182, 78, 56]] : [[96, 150, 128, 78], [188, 118, 128, 78], [150, 176, 128, 78]];
    pieces.forEach((q, qi) => {
      const [x, y, w, h] = q, depth = palha ? 18 : 26;
      s += '<rect x="' + (x + 6) + '" y="' + (y + depth + 3) + '" width="' + w + '" height="' + (h * 0.12) + '" rx="6" fill="rgba(50,25,10,.25)"/>';
      s += '<rect x="' + x + '" y="' + (y + 6) + '" width="' + w + '" height="' + (h + depth - 6) + '" rx="10" fill="' + (palha ? '#3d2012' : '#24110a') + '"/>';
      for (let i = 0; i < 6; i++) s += '<line x1="' + (x + 8 + rand() * (w - 16)) + '" y1="' + (y + h + 2) + '" x2="' + (x + 8 + rand() * (w - 16)) + '" y2="' + (y + h + depth - 4) + '" stroke="' + (palha ? '#7a4b2b' : '#5a3019') + '" stroke-width="2" opacity=".5" stroke-linecap="round"/>';
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="url(#' + id + 'bt)"/>';
      if (palha) { for (let i = 0; i < 46; i++) s += '<circle cx="' + f(x + 5 + rand() * (w - 10)) + '" cy="' + f(y + 5 + rand() * (h - 10)) + '" r="' + f(0.8 + rand() * 1.6) + '" fill="#fff5dc" opacity=".85"/>'; }
      else {
        for (let i = 0; i < 5; i++) { const px = x + 14 + rand() * (w - 28), py = y + 12 + rand() * (h - 24); s += '<path d="M' + f(px) + ' ' + f(py) + ' q' + f(8 + rand() * 12) + ' ' + f(-5 + rand() * 10) + ' ' + f(14 + rand() * 18) + ' ' + f(rand() * 8) + '" stroke="#c9a074" stroke-width="1.6" fill="none" opacity=".55" stroke-linecap="round"/>'; }
        s += '<path d="M' + (x + 10) + ' ' + (y + 8) + ' h' + (w - 20) + '" stroke="#fff" stroke-width="2" opacity=".18" stroke-linecap="round"/>';
        if (qi !== 2) { const nx = x + w * 0.5, ny = y + h * 0.5; s += '<path d="M' + f(nx - 12) + ' ' + f(ny) + ' q4 -12 14 -8 q10 -4 12 8 q-6 12 -14 8 q-8 4 -12 -8z" fill="#c9985c"/><path d="M' + f(nx - 6) + ' ' + f(ny - 1) + ' q6 -4 10 0 M' + f(nx - 4) + ' ' + f(ny + 5) + ' q6 -3 10 0" stroke="#8a5a2a" stroke-width="1.3" fill="none"/>'; }
        for (let i = 0; i < 30; i++) s += '<circle cx="' + f(x + 6 + rand() * (w - 12)) + '" cy="' + f(y + 6 + rand() * (h - 12)) + '" r="' + f(0.7 + rand() * 1.1) + '" fill="#fff6e6" opacity=".6"/>';
      }
    });
    return s;
  }

  function jarScene(id, cfg, rand) {
    const x = 128, w = 144, top = 64, bot = 246, h = bot - top;
    let s = '<defs><clipPath id="' + id + 'jc"><rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + h + '" rx="22"/></clipPath><linearGradient id="' + id + 'gl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".25" stop-color="#fff" stop-opacity=".05"/><stop offset=".8" stop-color="#fff" stop-opacity=".0"/><stop offset="1" stop-color="#fff" stop-opacity=".35"/></linearGradient></defs>';
    s += '<ellipse cx="200" cy="' + (bot + 4) + '" rx="108" ry="15" fill="rgba(60,30,10,.28)"/>';
    s += '<g clip-path="url(#' + id + 'jc)"><rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + h + '" fill="rgba(255,255,255,.6)"/>';
    const layerH = (h - 46) / cfg.layers.length;
    cfg.layers.forEach((c, i) => {
      const y = bot - (i + 1) * layerH;
      s += '<rect x="' + x + '" y="' + f(y) + '" width="' + w + '" height="' + f(layerH + 1) + '" fill="' + c + '"/>';
      if (i % 2 === 0 && !cfg.berry) for (let k = 0; k < 24; k++) s += '<circle cx="' + f(x + 6 + rand() * (w - 12)) + '" cy="' + f(y + 4 + rand() * (layerH - 8)) + '" r="' + f(1 + rand() * 1.8) + '" fill="rgba(255,225,180,.4)"/>';
      if (cfg.berry && (i === 2)) for (let k = 0; k < 12; k++) s += '<ellipse cx="' + f(x + 8 + rand() * (w - 16)) + '" cy="' + f(y + 4 + rand() * (layerH - 8)) + '" rx="5" ry="3" fill="#c9414f" opacity=".75"/>';
    });
    s += '</g>';
    const ty = bot - cfg.layers.length * layerH;
    s += '<path d="M' + (x + 4) + ' ' + f(ty) + ' q' + (w / 8) + ' -30 ' + (w / 4) + ' -6 t' + (w / 4) + ' -2 t' + (w / 4) + ' 0 t' + (w / 4 - 4) + ' 8 v10 h-' + (w - 8) + 'z" fill="' + cfg.topc + '"/>';
    if (cfg.berry) s += '<g transform="translate(200 ' + f(ty - 22) + ')"><path d="M0 -14 C-18 -14 -22 4 -12 18 Q0 30 12 18 C22 4 18 -14 0 -14Z" fill="#d6303f"/><path d="M-9 -14 l9 -9 9 9" fill="#3f8a4a"/>' + [[-8, -2], [4, 2], [-2, 10], [9, -4], [-10, 8]].map((p) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.3" fill="#ffd9a8"/>').join('') + '</g>';
    else if (cfg.sprinkles) { for (let i = 0; i < 26; i++) { const px = x + 14 + rand() * (w - 28), py = ty - 14 + rand() * 20; s += '<rect x="' + f(px) + '" y="' + f(py) + '" width="8" height="2.4" rx="1.2" fill="' + (rand() > 0.5 ? '#2a140b' : '#e6c25f') + '" transform="rotate(' + f(rand() * 180) + ' ' + f(px) + ' ' + f(py) + ')"/>'; } s += '<circle cx="200" cy="' + f(ty - 22) + '" r="15" fill="#4a2616"/><ellipse cx="195" cy="' + f(ty - 28) + '" rx="5" ry="3" fill="#fff" opacity=".3"/>'; }
    s += '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + h + '" rx="22" fill="url(#' + id + 'gl)" stroke="rgba(255,255,255,.9)" stroke-width="2.5"/>';
    s += '<rect x="' + (x - 6) + '" y="' + (top - 8) + '" width="' + (w + 12) + '" height="14" rx="6" fill="#fff" opacity=".85" stroke="#e4d6bd"/>';
    s += '<g transform="rotate(14 330 150)"><rect x="326" y="76" width="9" height="140" rx="4.5" fill="#d9b45a"/><ellipse cx="330" cy="86" rx="12" ry="16" fill="#e9c872"/></g>';
    return s;
  }

  // Gera o SVG completo. opts.label sobrescreve o texto de acessibilidade.
  function cakeScene(id, cfg, rand) {
    const b1 = cfg.base[0], b2 = cfg.base[1], fr = cfg.frost;
    let s = '<defs><linearGradient id="' + id + 'ck" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + b2 + '"/><stop offset=".45" stop-color="' + b1 + '"/><stop offset="1" stop-color="' + b2 + '"/></linearGradient></defs>';
    s += '<ellipse cx="200" cy="228" rx="140" ry="17" fill="rgba(60,20,20,.18)"/><ellipse cx="200" cy="222" rx="136" ry="16" fill="#fff"/><ellipse cx="200" cy="219" rx="136" ry="16" fill="#f6ecea"/>';
    s += '<rect x="108" y="128" width="184" height="88" rx="9" fill="url(#' + id + 'ck)"/><rect x="108" y="162" width="184" height="13" fill="' + cfg.fill + '"/>';
    s += '<path d="M100 130 Q100 108 130 106 L270 106 Q300 108 300 130 L300 140 Q294 156 284 140 Q276 164 264 142 Q254 154 244 140 Q234 172 222 142 Q212 156 200 140 Q188 166 176 142 Q166 154 156 140 Q146 170 134 142 Q124 156 116 140 Q106 150 100 140 Z" fill="' + fr + '"/>';
    s += '<ellipse cx="200" cy="106" rx="100" ry="13" fill="' + fr + '"/><ellipse cx="200" cy="103" rx="100" ry="12" fill="rgba(255,255,255,.22)"/>';
    const t = cfg.top, cols = ['#e63946', '#ffd166', '#2a9d8f', '#4cc9f0', '#f4f1de'];
    if (t === 'morango') [152, 176, 200, 224, 248].forEach((x, i) => { const y = 98 + (i % 2) * 3; s += '<path d="M' + x + ' ' + (y - 8) + ' q-10 2 -10 12 q4 13 10 14 q6 -1 10 -14 q0 -10 -10 -12z" fill="#d62839"/><path d="M' + (x - 5) + ' ' + (y - 8) + ' l5 -4 l5 4z" fill="#3f8a3f"/>'; });
    else if (t === 'granulado') for (let i = 0; i < 40; i++) s += '<circle cx="' + f(120 + rand() * 160) + '" cy="' + f(97 + rand() * 11) + '" r="1.9" fill="' + cols[Math.floor(rand() * cols.length)] + '"/>';
    else if (t === 'cereja') s += '<circle cx="200" cy="96" r="10" fill="#b00020"/><path d="M200 86 Q206 74 214 70" stroke="#3f6b2a" stroke-width="2.4" fill="none"/>';
    else if (t === 'raspas') for (let i = 0; i < 26; i++) s += '<path d="M' + f(118 + rand() * 160) + ' ' + f(96 + rand() * 11) + ' l3 2" stroke="rgba(60,25,15,.7)" stroke-width="2" stroke-linecap="round"/>';
    else if (t === 'limao') s += '<circle cx="200" cy="98" r="15" fill="#f7e26b" stroke="#fff" stroke-width="3"/><path d="M200 84 V112 M186 98 H214" stroke="#fff" stroke-width="1.6"/>';
    return s;
  }
  function breadScene(id, cfg, rand) {
    const c1 = cfg.crust[0], c2 = cfg.crust[1], g = 'url(#' + id + 'cr)', sc = 'rgba(255,243,205,.8)';
    let s = '<defs><radialGradient id="' + id + 'cr" cx=".4" cy=".35" r=".85"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></radialGradient></defs>';
    s += '<ellipse cx="200" cy="228" rx="152" ry="16" fill="rgba(70,45,10,.2)"/>';
    if (cfg.shape === 'baguette') [140, 172, 204].forEach((y, r) => { s += '<ellipse cx="200" cy="' + y + '" rx="128" ry="19" fill="' + g + '" transform="rotate(-8 200 ' + y + ')"/>'; [100, 140, 180, 220, 260].forEach((x) => { s += '<path d="M' + x + ' ' + (y - 9 + (200 - x) * 0.14) + ' q8 8 14 18" stroke="' + sc + '" stroke-width="3.4" fill="none" stroke-linecap="round"/>'; }); });
    else if (cfg.shape === 'loaf') { s += '<path d="M88 192 Q88 112 200 108 Q312 112 312 192 Q312 216 288 216 L112 216 Q88 216 88 192Z" fill="' + g + '"/>'; [138, 172, 206, 240].forEach((x) => { s += '<path d="M' + x + ' 128 q14 12 22 34" stroke="' + sc + '" stroke-width="4" fill="none" stroke-linecap="round"/>'; }); }
    else if (cfg.shape === 'rolls') [[128, 172], [272, 172], [200, 146], [164, 204], [236, 204]].forEach((p) => { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="40" fill="' + g + '"/><path d="M' + (p[0] - 16) + ' ' + (p[1] - 10) + ' q16 10 32 0" stroke="' + sc + '" stroke-width="3" fill="none" stroke-linecap="round"/>'; });
    else if (cfg.shape === 'ring') { s += '<circle cx="200" cy="164" r="86" fill="' + g + '"/><circle cx="200" cy="164" r="30" fill="' + cfg.bg[1] + '"/>'; for (let i = 0; i < 38; i++) { const an = rand() * 6.283, r = 44 + rand() * 38; s += '<circle cx="' + f(200 + r * Math.cos(an)) + '" cy="' + f(164 + r * Math.sin(an)) + '" r="2.2" fill="#fff" opacity=".85"/>'; } }
    else if (cfg.shape === 'croissant') {
      const cro = (cx, cy, k) => {
        const segs = [];
        for (let i = 0; i < 7; i++) { const t = -1 + (2 * i) / 6; segs.push(t); }
        segs.sort((a, b) => Math.abs(b) - Math.abs(a)).forEach((t) => {
          const a = t * 1.1, x = cx + Math.sin(a) * 118 * k, y = cy + (1 - Math.cos(a)) * 54 * k, w = 1 - Math.abs(t);
          s += '<g transform="rotate(' + f((a * 180) / Math.PI) + ' ' + f(x) + ' ' + f(y) + ')"><ellipse cx="' + f(x) + '" cy="' + f(y) + '" rx="' + f((17 + w * 9) * k) + '" ry="' + f((18 + w * 22) * k) + '" fill="' + g + '" stroke="rgba(120,60,10,.35)" stroke-width="1.8"/><ellipse cx="' + f(x - 5 * k) + '" cy="' + f(y - (10 + w * 8) * k) + '" rx="' + f(5 * k) + '" ry="' + f((9 + w * 6) * k) + '" fill="rgba(255,255,255,.3)"/></g>';
        });
      };
      cro(236, 138, 0.62); cro(198, 168, 0.95);
    }
    else if (cfg.shape === 'brioche') [[200, 150], [124, 188], [276, 188]].forEach((p) => { s += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="44" ry="35" fill="' + g + '"/><ellipse cx="' + p[0] + '" cy="' + (p[1] - 28) + '" rx="20" ry="7" fill="rgba(110,55,10,.3)"/><circle cx="' + p[0] + '" cy="' + (p[1] - 38) + '" r="16" fill="' + g + '"/><ellipse cx="' + (p[0] - 18) + '" cy="' + (p[1] - 8) + '" rx="10" ry="5" fill="rgba(255,255,255,.35)" transform="rotate(-25 ' + (p[0] - 18) + ' ' + (p[1] - 8) + ')"/><ellipse cx="' + (p[0] - 5) + '" cy="' + (p[1] - 44) + '" rx="5" ry="3" fill="rgba(255,255,255,.4)"/>'; });
    else if (cfg.shape === 'sonho') [[142, 178], [262, 178], [200, 152]].forEach((p) => {
      s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="46" fill="' + g + '"/><ellipse cx="' + p[0] + '" cy="' + (p[1] + 2) + '" rx="46" ry="10" fill="rgba(255,238,190,.75)"/>';
      for (let i = 0; i < 70; i++) { const an = rand() * 6.283, d = Math.sqrt(rand()) * 44; s += '<circle cx="' + f(p[0] + Math.cos(an) * d) + '" cy="' + f(p[1] + Math.sin(an) * d * 0.95) + '" r="' + f(1 + rand() * 1.3) + '" fill="#fff" opacity=".9"/>'; }
    });
    else if (cfg.shape === 'donut') [[132, 168, 0.8, 0], [268, 176, 0.9, 1], [200, 190, 1, 2]].forEach((p) => {
      const k = p[2], x = p[0], y = p[1], gl = 'url(#' + id + 'gl' + p[3] + ')';
      s += '<defs><radialGradient id="' + id + 'gl' + p[3] + '" cx=".4" cy=".35" r=".9"><stop offset="0" stop-color="' + cfg.glaze[p[3] % 2] + '"/><stop offset="1" stop-color="' + cfg.glaze[0] + '"/></radialGradient></defs>';
      s += '<ellipse cx="' + x + '" cy="' + (y + 6 * k) + '" rx="' + f(80 * k) + '" ry="' + f(44 * k) + '" fill="rgba(110,55,10,.35)"/><ellipse cx="' + x + '" cy="' + y + '" rx="' + f(80 * k) + '" ry="' + f(46 * k) + '" fill="' + g + '"/><ellipse cx="' + x + '" cy="' + f(y - 3 * k) + '" rx="' + f(70 * k) + '" ry="' + f(38 * k) + '" fill="' + gl + '"/><ellipse cx="' + x + '" cy="' + f(y - 2 * k) + '" rx="' + f(23 * k) + '" ry="' + f(12 * k) + '" fill="' + cfg.table[0] + '"/>';
      for (let i = 0; i < 18; i++) { const an = rand() * 6.283, d = 0.4 + rand() * 0.55, px = x + Math.cos(an) * 64 * k * d, py = y - 3 * k + Math.sin(an) * 34 * k * d; s += '<rect x="' + f(px - 4) + '" y="' + f(py - 1.2) + '" width="8" height="2.4" rx="1.2" fill="' + ['#e63946', '#ffd166', '#2a9d8f', '#4cc9f0', '#fff'][i % 5] + '" transform="rotate(' + f(rand() * 180) + ' ' + f(px) + ' ' + f(py) + ')"/>'; }
    });
    else if (cfg.shape === 'churros') [[182, 150, -10], [214, 176, -6], [190, 202, -12]].forEach((p) => {
      s += '<g transform="rotate(' + p[2] + ' ' + p[0] + ' ' + p[1] + ')"><rect x="' + (p[0] - 90) + '" y="' + (p[1] - 15) + '" width="180" height="30" rx="15" fill="' + g + '"/>';
      for (let x = -78; x <= 78; x += 7) s += '<line x1="' + (p[0] + x) + '" y1="' + (p[1] - 13) + '" x2="' + (p[0] + x) + '" y2="' + (p[1] + 13) + '" stroke="rgba(120,60,10,.3)" stroke-width="1.6"/>';
      for (let i = 0; i < 40; i++) s += '<circle cx="' + f(p[0] - 80 + rand() * 160) + '" cy="' + f(p[1] - 11 + rand() * 22) + '" r="' + f(0.8 + rand() * 1.1) + '" fill="' + (rand() > 0.35 ? '#fff' : '#9b5a2a') + '" opacity=".85"/>';
      s += '</g>';
    });
    else if (cfg.shape === 'spiral') [[200, 148], [128, 190], [272, 190]].forEach((p) => {
      s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="46" fill="' + g + '"/>';
      let d = '';
      for (let t = 0.4; t < 8.6; t += 0.25) d += (d ? ' L' : 'M') + f(p[0] + Math.cos(t) * (4 + t * 4.7)) + ' ' + f(p[1] + Math.sin(t) * (4 + t * 4.7));
      s += '<path d="' + d + '" fill="none" stroke="#8a4a1d" stroke-width="4" stroke-linecap="round" opacity=".7"/><path d="M' + (p[0] - 32) + ' ' + (p[1] - 8) + ' q8 -12 16 0 t16 0 t16 0 t16 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".9"/><path d="M' + (p[0] - 24) + ' ' + (p[1] + 10) + ' q8 -12 16 0 t16 0 t16 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".9"/>';
    });
    else if (cfg.shape === 'braid') {
      s += '<ellipse cx="200" cy="176" rx="136" ry="38" fill="' + g + '" transform="rotate(-4 200 176)"/>';
      for (let i = 0; i < 8; i++) { const x = 96 + i * 30, y = 176 - (x - 200) * 0.07, sg = i % 2 ? 1 : -1; s += '<ellipse cx="' + x + '" cy="' + f(y) + '" rx="16" ry="31" fill="' + g + '" stroke="rgba(120,60,10,.35)" stroke-width="1.8" transform="rotate(' + (sg * 38) + ' ' + x + ' ' + f(y) + ')"/><ellipse cx="' + (x - 4) + '" cy="' + f(y - 12) + '" rx="4" ry="12" fill="rgba(255,255,255,.3)" transform="rotate(' + (sg * 38) + ' ' + x + ' ' + f(y) + ')"/>'; }
    }
    else if (cfg.shape === 'focaccia') {
      s += '<rect x="68" y="108" width="264" height="110" rx="18" fill="' + g + '"/><rect x="68" y="108" width="264" height="110" rx="18" fill="none" stroke="rgba(120,60,10,.3)" stroke-width="3"/>';
      for (let i = 0; i < 34; i++) s += '<ellipse cx="' + f(86 + rand() * 228) + '" cy="' + f(122 + rand() * 82) + '" rx="4.5" ry="3" fill="rgba(150,90,20,.35)"/>';
      for (let i = 0; i < 40; i++) { const x = 84 + rand() * 232, y = 120 + rand() * 86; s += '<path d="M' + f(x) + ' ' + f(y) + ' l' + f(5 + rand() * 4) + ' ' + f(-2 + rand() * 4) + '" stroke="#4d7a32" stroke-width="2" stroke-linecap="round"/>'; }
      [[110, 140], [180, 176], [250, 138], [292, 184], [214, 128]].forEach((p) => { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="8.5" fill="#d6303f"/><ellipse cx="' + (p[0] - 3) + '" cy="' + (p[1] - 3) + '" rx="2.5" ry="1.6" fill="#fff" opacity=".5"/>'; });
      [[148, 156], [226, 160], [140, 196], [270, 156], [318, 150]].forEach((p) => { s += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="6.5" ry="5" fill="#3a3a2a"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.8" fill="#c9b27a"/>'; });
      for (let i = 0; i < 30; i++) s += '<circle cx="' + f(80 + rand() * 240) + '" cy="' + f(116 + rand() * 96) + '" r="1.2" fill="#fff" opacity=".85"/>';
    }
    else if (cfg.shape === 'sirio') [[168, 190, 80], [236, 156, 76]].forEach((p) => {
      s += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + (p[2] + 34) + '" ry="' + f(p[2] * 0.42) + '" fill="' + g + '"/>';
      for (let i = 0; i < 12; i++) { const an = rand() * 6.283, d = Math.sqrt(rand()) * 0.85; s += '<ellipse cx="' + f(p[0] + Math.cos(an) * (p[2] + 34) * d) + '" cy="' + f(p[1] + Math.sin(an) * p[2] * 0.42 * d) + '" rx="' + f(5 + rand() * 7) + '" ry="' + f(3 + rand() * 3) + '" fill="rgba(140,80,20,.38)"/>'; }
    });
    else if (cfg.shape === 'esfiha') [[132, 166], [268, 166], [200, 150], [160, 204], [240, 204]].forEach((p) => {
      s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="40" fill="' + g + '"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="29" fill="#8a3b22"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="29" fill="none" stroke="rgba(60,20,8,.4)" stroke-width="2"/>';
      for (let i = 0; i < 9; i++) s += '<circle cx="' + f(p[0] + (rand() - 0.5) * 44) + '" cy="' + f(p[1] + (rand() - 0.5) * 44) + '" r="' + f(1.6 + rand() * 1.4) + '" fill="' + (i % 3 ? '#4d7a32' : '#d6503a') + '"/>';
    });
    else if (cfg.shape === 'enrolado') [[150, 140, -14], [254, 160, 10], [158, 200, 6], [262, 206, -8]].forEach((p) => {
      s += '<g transform="rotate(' + p[2] + ' ' + p[0] + ' ' + p[1] + ')"><rect x="' + (p[0] - 62) + '" y="' + (p[1] - 18) + '" width="124" height="36" rx="18" fill="' + g + '"/>';
      for (let i = -3; i <= 3; i++) s += '<path d="M' + (p[0] + i * 16 - 6) + ' ' + (p[1] - 17) + ' l12 34" stroke="rgba(120,60,10,.32)" stroke-width="3" stroke-linecap="round"/>';
      s += '<ellipse cx="' + (p[0] - 30) + '" cy="' + (p[1] - 9) + '" rx="14" ry="4" fill="rgba(255,255,255,.32)"/></g>';
    });
    else if (cfg.shape === 'bowl') {
      s += '<defs><linearGradient id="' + id + 'bw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#f3ede0"/><stop offset="1" stop-color="#e4d9c4"/></linearGradient></defs>';
      s += '<path d="M96 138 Q96 232 200 232 Q304 232 304 138 Z" fill="url(#' + id + 'bw)"/><ellipse cx="200" cy="138" rx="104" ry="20" fill="#fff"/><ellipse cx="200" cy="140" rx="92" ry="15" fill="' + g + '"/>';
      s += '<path d="M130 138 q22 -14 44 0 t44 0 t44 0" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="4" stroke-linecap="round"/><path d="M110 224 L66 168" stroke="#d9b45a" stroke-width="9" stroke-linecap="round"/><ellipse cx="62" cy="162" rx="14" ry="10" fill="#e9c872" transform="rotate(-48 62 162)"/>';
    }
    else [[150, 176], [250, 176], [200, 150], [126, 208], [200, 212], [274, 208], [200, 182]].forEach((p) => { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="32" fill="' + g + '"/><ellipse cx="' + (p[0] - 9) + '" cy="' + (p[1] - 10) + '" rx="9" ry="5" fill="rgba(255,255,255,.35)"/>'; });
    return s;
  }
  function art(kind, opts) {
    opts = opts || {};
    const id = 'a' + (++uid) + '_';
    const key = K[kind] ? kind : kind === 'mix' ? 'mix' : 'ninho';
    const cfg = K[key] || K.brigadeiro;
    const rand = pseudo(1000 + key.split('').reduce((a, c) => a + c.charCodeAt(0), 0));
    let s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + (opts.label || (cfg.label ? 'Ilustração: ' + cfg.label : 'Ilustração de bolos')) + '">';
    const bg = (cfg.bg || K.brigadeiro.bg), tb = (cfg.table || K.brigadeiro.table);
    s += '<defs><linearGradient id="' + id + 'bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + bg[0] + '"/><stop offset="1" stop-color="' + bg[1] + '"/></linearGradient><linearGradient id="' + id + 'tb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + tb[0] + '"/><stop offset="1" stop-color="' + tb[1] + '"/></linearGradient></defs>';
    s += '<rect width="400" height="300" fill="url(#' + id + 'bg)"/>';
    [[60, 50, 46, .35], [330, 40, 60, .28], [250, 90, 28, .3], [30, 140, 24, .25], [370, 130, 30, .3]].forEach((c) => { s += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="#fff" opacity="' + c[3] + '"/>'; });
    s += '<rect y="214" width="400" height="86" fill="url(#' + id + 'tb)"/><rect y="214" width="400" height="4" fill="rgba(255,255,255,.35)"/>';
    for (let i = 0; i < 5; i++) s += '<path d="M0 ' + (232 + i * 15) + ' Q100 ' + (228 + i * 15) + ' 200 ' + (233 + i * 15) + ' T400 ' + (231 + i * 15) + '" stroke="rgba(80,45,15,.14)" stroke-width="1.5" fill="none"/>';
    if (key === 'mix') {
      s += breadScene(id, K['pao-forma'], rand);
    } else if (cfg.bread) s += breadScene(id, cfg, rand);
    else if (cfg.cake) s += cakeScene(id, cfg, rand);
    else if (cfg.jar) s += jarScene(id, cfg, rand);
    else if (cfg.square) s += brownieScene(id, rand, !!cfg.palha);
    else s += ballScene(id, cfg, rand, [{ n: 1, x: 112, y: 160, r: 40 }, { n: 2, x: 290, y: 164, r: 42 }, { n: 3, x: 200, y: 180, r: 56 }]);
    s += '<rect width="400" height="300" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="6"/></svg>';
    return s;
  }
  DL.artSvg = art;

  // Fotos reais de cada tipo de bolo. Quando existe foto, DL.art devolve <img>; senão, o desenho em SVG.
  const PHOTOS = {}; // sem fotos por enquanto: salve em img/receitas/ e mapeie aqui, ex.: 'pao-frances': 'pao-frances'
  DL.art = function (kind, opts) {
    opts = opts || {};
    const file = PHOTOS[kind];
    if (!file) return art(kind, opts);
    const label = (opts.label || (K[kind] && K[kind].label) || 'Bolos').replace(/^Ilustração (de |: )?/, '');
    return '<img src="img/receitas/' + file + '.jpg" alt="' + label.replace(/"/g, '&quot;') + '" loading="lazy">';
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);
