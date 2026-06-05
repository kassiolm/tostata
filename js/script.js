  function recalcularProduto(p){
    p.subIngredientes = p.ingredientes.reduce((s,i)=>s+i.total,0);
    p.subEmbalagens = (p.embalagens||[]).reduce((s,e)=>s+e.total,0);
    p.totalInsumos = p.subIngredientes + p.subEmbalagens;
    p.custoOp = p.totalInsumos * p.pctOp / 100;
    p.custoProducao = p.totalInsumos + p.custoOp;
    p.cmv = p.precoVenda > 0 ? p.custoProducao / p.precoVenda * 100 : 0;
    p.lucro = p.precoVenda - p.custoProducao;
    p.margem = p.precoVenda > 0 ? p.lucro / p.precoVenda * 100 : 0;
    return p;
  }

  let PRODUTOS = [
{id:1,nome:"Marguerita Tradicional",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Molho de Tomate",qtd:50,unit:"g",custoUnit:0.0040,total:0.20},
    {nome:"Manjericão",qtd:0.2,unit:"g",custoUnit:2.9900,total:0.60},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:6.66,subEmbalagens:3.95,totalInsumos:10.61,pctOp:15,custoOp:1.59,custoProducao:12.20,precoVenda:75,cmv:16.3,lucro:62.80,margem:83.7
},
{id:2,nome:"Nutella com Pistache",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Nutella",qtd:35,unit:"g",custoUnit:0.0723,total:2.53},
    {nome:"Farinha de Pistache",qtd:30,unit:"g",custoUnit:0.1400,total:4.20},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:12.59,subEmbalagens:3.95,totalInsumos:16.54,pctOp:15,custoOp:2.48,custoProducao:19.02,precoVenda:75,cmv:25.4,lucro:55.98,margem:74.6
},
{id:3,nome:"Calabresa Fatiada",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Molho de Tomate",qtd:50,unit:"g",custoUnit:0.0040,total:0.20},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Calabresa Seara",qtd:200,unit:"g",custoUnit:0.0173,total:3.46},
    {nome:"Azeitona",qtd:12,unit:"g",custoUnit:0.0398,total:0.48},
    {nome:"Orégano",qtd:3,unit:"g",custoUnit:0.1923,total:0.58},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:10.58,subEmbalagens:3.95,totalInsumos:14.53,pctOp:15,custoOp:2.18,custoProducao:16.71,precoVenda:75,cmv:22.3,lucro:58.29,margem:77.7
},
{id:4,nome:"Tomate Confit",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Molho de Tomate",qtd:50,unit:"g",custoUnit:0.0040,total:0.20},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Tomate Cereja Confit",qtd:45,unit:"g",custoUnit:0.0311,total:1.40},
    {nome:"Rúcula",qtd:10,unit:"g",custoUnit:0.0599,total:0.60},
    {nome:"Parmesão",qtd:10,unit:"g",custoUnit:0.0410,total:0.41},
    {nome:"Azeite",qtd:8,unit:"g",custoUnit:0.0498,total:0.40},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:8.87,subEmbalagens:3.95,totalInsumos:12.82,pctOp:15,custoOp:1.92,custoProducao:14.74,precoVenda:75,cmv:19.7,lucro:60.26,margem:80.3
},
{id:5,nome:"Mussarela",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Molho de Tomate",qtd:50,unit:"g",custoUnit:0.0040,total:0.20},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Orégano",qtd:3,unit:"g",custoUnit:0.1923,total:0.58},
    {nome:"Azeite",qtd:8,unit:"g",custoUnit:0.0498,total:0.40},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:7.04,subEmbalagens:3.95,totalInsumos:10.99,pctOp:15,custoOp:1.65,custoProducao:12.64,precoVenda:70,cmv:18.1,lucro:57.36,margem:81.9
},
{id:6,nome:"Cacciola",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Pesto de Manjericão",qtd:40,unit:"g",custoUnit:0.1842,total:7.37},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Mortadela",qtd:100,unit:"g",custoUnit:0.0178,total:1.78},
    {nome:"Farinha de Pistache",qtd:30,unit:"g",custoUnit:0.1400,total:4.20},
    {nome:"Azeite",qtd:8,unit:"g",custoUnit:0.0498,total:0.40},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:19.61,subEmbalagens:3.95,totalInsumos:23.56,pctOp:15,custoOp:3.53,custoProducao:27.09,precoVenda:75,cmv:36.1,lucro:47.91,margem:63.9
},
{id:7,nome:"Quatro Queijos",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Molho de Tomate",qtd:50,unit:"g",custoUnit:0.0040,total:0.20},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Ricota Temperada",qtd:50,unit:"g",custoUnit:0.0219,total:1.10},
    {nome:"Queijo Gorgonzola",qtd:30,unit:"g",custoUnit:0.0630,total:1.89},
    {nome:"Parmesão",qtd:50,unit:"g",custoUnit:0.0410,total:2.05},
    {nome:"Orégano",qtd:3,unit:"g",custoUnit:0.1923,total:0.58},
    {nome:"Azeite",qtd:8,unit:"g",custoUnit:0.0498,total:0.40},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:12.08,subEmbalagens:3.95,totalInsumos:16.03,pctOp:15,custoOp:2.40,custoProducao:18.43,precoVenda:80,cmv:23.0,lucro:61.57,margem:77.0
},
{id:8,nome:"Diavola Rosa",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Molho de Tomate",qtd:50,unit:"g",custoUnit:0.0040,total:0.20},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Bacon",qtd:70,unit:"g",custoUnit:0.1248,total:8.73},
    {nome:"Ricota Creme",qtd:40,unit:"g",custoUnit:0.0390,total:1.56},
    {nome:"Pimenta Rosa",qtd:5,unit:"g",custoUnit:0.7000,total:3.50},
    {nome:"Azeite",qtd:8,unit:"g",custoUnit:0.0498,total:0.40},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:20.25,subEmbalagens:3.95,totalInsumos:24.20,pctOp:15,custoOp:3.63,custoProducao:27.83,precoVenda:80,cmv:34.8,lucro:52.17,margem:65.2
},
{id:9,nome:"Toscana Defumada c/ Rúcula",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Molho de Tomate",qtd:40,unit:"g",custoUnit:0.0040,total:0.16},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Linguiça Toscana Defumada",qtd:100,unit:"g",custoUnit:0.0380,total:3.80},
    {nome:"Rúcula",qtd:30,unit:"g",custoUnit:0.0599,total:1.80},
    {nome:"Azeite",qtd:8,unit:"g",custoUnit:0.0498,total:0.40},
    {nome:"Parmesão",qtd:10,unit:"g",custoUnit:0.0410,total:0.41},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:12.43,subEmbalagens:3.95,totalInsumos:16.38,pctOp:15,custoOp:2.46,custoProducao:18.84,precoVenda:80,cmv:23.6,lucro:61.16,margem:76.4
},
{id:10,nome:"Pera com Mel",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Queijo Gorgonzola",qtd:30,unit:"g",custoUnit:0.0630,total:1.89},
    {nome:"Pera",qtd:160,unit:"g",custoUnit:0.0140,total:2.24},
    {nome:"Azeitona",qtd:12,unit:"g",custoUnit:0.0398,total:0.48},
    {nome:"Orégano",qtd:3,unit:"g",custoUnit:0.1923,total:0.58},
    {nome:"Mel",qtd:40,unit:"g",custoUnit:0.0800,total:3.20},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:14.25,subEmbalagens:3.95,totalInsumos:18.20,pctOp:15,custoOp:2.73,custoProducao:20.93,precoVenda:75,cmv:27.9,lucro:54.07,margem:72.1
},
{id:11,nome:"Rúcula e Parma",cat:"pizza",
  ingredientes:[
    {nome:"Massa da Pizza",qtd:1,unit:"un",custoUnit:2.4000,total:2.40},
    {nome:"Molho de Tomate",qtd:100,unit:"g",custoUnit:0.0040,total:0.40},
    {nome:"Mussarela",qtd:100,unit:"g",custoUnit:0.0346,total:3.46},
    {nome:"Presunto Tipo Parma",qtd:95,unit:"g",custoUnit:0.1980,total:18.81},
    {nome:"Rúcula",qtd:10,unit:"g",custoUnit:0.0599,total:0.60},
    {nome:"Parmesão",qtd:10,unit:"g",custoUnit:0.0410,total:0.41},
    {nome:"Azeite",qtd:8,unit:"g",custoUnit:0.0498,total:0.40},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:26.48,subEmbalagens:3.95,totalInsumos:30.43,pctOp:15,custoOp:4.56,custoProducao:34.99,precoVenda:95,cmv:36.8,lucro:60.01,margem:63.2
},
{id:12,nome:"Mortadela c/ Pistache",cat:"panuozzo",
  ingredientes:[
    {nome:"Massa da Panuozzo",qtd:1,unit:"un",custoUnit:1.5000,total:1.50},
    {nome:"Queijo Cheddar",qtd:30,unit:"g",custoUnit:0.0467,total:1.40},
    {nome:"Mussarela",qtd:35,unit:"g",custoUnit:0.0346,total:1.21},
    {nome:"Linguiça Mista Sadia",qtd:54,unit:"g",custoUnit:0.0433,total:2.34},
    {nome:"Pepino Picles",qtd:10,unit:"g",custoUnit:0.0793,total:0.79},
    {nome:"Batata Chips Lays",qtd:50,unit:"g",custoUnit:0.1286,total:6.43},
  ],
  embalagens:[
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:13.67,subEmbalagens:0.15,totalInsumos:13.82,pctOp:15,custoOp:2.07,custoProducao:15.89,precoVenda:50,cmv:31.8,lucro:34.11,margem:68.2
},
{id:13,nome:"Panuozzo Caprese",cat:"panuozzo",
  ingredientes:[
    {nome:"Massa da Panuozzo",qtd:1,unit:"un",custoUnit:1.5000,total:1.50},
    {nome:"Pasta de Ricota Fresca",qtd:100,unit:"g",custoUnit:0.0220,total:2.20},
    {nome:"Tomate Cereja Confit",qtd:25,unit:"g",custoUnit:0.0311,total:0.78},
    {nome:"Pesto de Manjericão",qtd:10,unit:"g",custoUnit:0.1842,total:1.84},
  ],
  embalagens:[
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:6.32,subEmbalagens:0.15,totalInsumos:6.47,pctOp:15,custoOp:0.97,custoProducao:7.44,precoVenda:50,cmv:14.9,lucro:42.56,margem:85.1
},
{id:14,nome:"Napolidog NY",cat:"napolidog",
  ingredientes:[
    {nome:"Massa Napolidog",qtd:1,unit:"g",custoUnit:0.0240,total:0.02},
    {nome:"Cheddar",qtd:0.3,unit:"g",custoUnit:0.0467,total:0.01},
    {nome:"Linguiça Mista Sadia",qtd:1,unit:"g",custoUnit:0.0433,total:0.04},
    {nome:"Mostarda",qtd:10,unit:"g",custoUnit:0.0010,total:0.01},
    {nome:"Ketchup",qtd:10,unit:"g",custoUnit:0.0010,total:0.01},
    {nome:"Picles",qtd:20,unit:"g",custoUnit:0.0793,total:1.59},
    {nome:"Cebola Crispe",qtd:10,unit:"g",custoUnit:0.0010,total:0.01},
  ],
  embalagens:[
    {nome:"Caixa de Pizza",qtd:1,custoUnit:3.8000,total:3.80},
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
  ],
  subIngredientes:1.70,subEmbalagens:3.95,totalInsumos:5.65,pctOp:15,custoOp:0.85,custoProducao:6.50,precoVenda:30,cmv:21.7,lucro:23.50,margem:78.3
},
{id:15,nome:"Napolidog Tex Mex",cat:"napolidog",
  ingredientes:[
    {nome:"Massa Napolidog",qtd:1,unit:"g",custoUnit:0.0240,total:0.02},
    {nome:"Linguiça Mista Sadia",qtd:100,unit:"g",custoUnit:0.0433,total:4.33},
    {nome:"Pimenta Jalapeño",qtd:5,unit:"g",custoUnit:0.1929,total:0.96},
    {nome:"Cheddar",qtd:25,unit:"g",custoUnit:0.0467,total:1.17},
    {nome:"Doritos",qtd:10,unit:"g",custoUnit:0.1498,total:1.50},
  ],
  embalagens:[
    {nome:"Papel Antigordura",qtd:1,custoUnit:0.1468,total:0.15},
    {nome:"Prato Descartável Tam 4",qtd:1,custoUnit:0.2750,total:0.28},
  ],
  subIngredientes:7.98,subEmbalagens:0.43,totalInsumos:8.41,pctOp:15,custoOp:1.26,custoProducao:9.67,precoVenda:35,cmv:27.6,lucro:25.33,margem:72.4
}
];
let filtroAtual = 'todos';
let produtoAtual = null;
let ingPrecList = [];

function br(v){return typeof v==='number'?'R$ '+v.toFixed(2).replace('.',','):'R$ 0,00';}

function toast(msg,type){
  const el=document.getElementById('toast');
  if(!el) return;
  el.textContent=msg;
  el.style.background = type==='ok'?'var(--green)':'var(--red)';
  el.classList.add('show');
  clearTimeout(el._t);
  el._t=setTimeout(()=>el.classList.remove('show'),3000);
}

function goPage(p){
  document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach((e,i)=>e.classList.toggle('active',['dashboard','fichas','insumos','precificador'][i]===p));
  if(p==='dashboard') renderDashboard();
  if(p==='fichas') renderFichas();
  if(p==='insumos') renderInsumos();
  if(p==='precificador') calcPrec();
}

function setFiltro(f){
  filtroAtual = f;
  document.querySelectorAll('#page-fichas .filter-btn').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('f-'+f);
  if(el) el.classList.add('active');
  renderFichas();
}

function salvarDados(){
  try{ localStorage.setItem('tostata_produtos', JSON.stringify(PRODUTOS)); }catch(e){}
}

function carregarDados(){
  try{
    const dados = localStorage.getItem('tostata_produtos');
    if(dados){ PRODUTOS = JSON.parse(dados); return true; }
  }catch(e){}
  return false;
}

function renderDashboard(){
  const total = PRODUTOS.length;
  const avgMargem = total ? PRODUTOS.reduce((s,p)=>s+p.margem,0)/total : 0;
  const avgCmv = total ? PRODUTOS.reduce((s,p)=>s+p.cmv,0)/total : 0;
  const lucroTotal = PRODUTOS.reduce((s,p)=>s+p.lucro,0);
  const cmvClass = avgCmv<25?'green':avgCmv<40?'yellow':'';
  document.getElementById('kpi-grid').innerHTML = `
    <div class="kpi accent"><div class="kpi-label">Total de Produtos</div><div class="kpi-value">${total}</div></div>
    <div class="kpi green"><div class="kpi-label">Margem Média</div><div class="kpi-value">${avgMargem.toFixed(1)}%</div></div>
    <div class="kpi ${cmvClass?'kpi '+cmvClass:'kpi'}"><div class="kpi-label">CMV Médio</div><div class="kpi-value">${avgCmv.toFixed(1)}%</div></div>
    <div class="kpi"><div class="kpi-label">Lucro Total</div><div class="kpi-value">${br(lucroTotal)}</div></div>
  `;
  const sorted = [...PRODUTOS].sort((a,b)=>b.margem-a.margem);
  document.getElementById('rank-margem').innerHTML = sorted.map((p,i)=>`
    <div class="rank-item" onclick="abrirModalProduto(${p.id})" style="cursor:pointer">
      <div class="rank-num">${i+1}</div>
      <div class="rank-bar-wrap">
        <div class="rank-name">${p.nome}</div>
        <div class="rank-bar"><div class="rank-fill${p.margem>=70?' green':''}" style="width:${Math.min(p.margem,100)}%"></div></div>
      </div>
      <div class="rank-pct">${p.margem.toFixed(1)}%</div>
    </div>
  `).join('');
  document.getElementById('status-cmv').innerHTML = PRODUTOS.map(p=>{
    const cmvCls = p.cmv<25?'excelente':p.cmv<40?'aceitavel':'alto';
    return `<div class="status-item" onclick="abrirModalProduto(${p.id})" style="cursor:pointer">
      <span class="status-nome">${p.nome}</span>
      <span><span class="cmv-val">${p.cmv.toFixed(1)}%</span><span class="badge ${cmvCls}">${cmvCls==='excelente'?'OK':cmvCls==='aceitavel'?'Médio':'Alto'}</span></span>
    </div>`;
  }).join('');
  const alertas = (typeof INGREDIENTES!=='undefined'?INGREDIENTES:[]).filter(i=>statusEstoque(i).cls==='critico');
  document.getElementById('alerta-estoque-card').style.display = alertas.length?'block':'none';
  document.getElementById('alerta-estoque').innerHTML = alertas.map(i=>`
    <div class="status-item"><span class="status-nome">${i.nome}</span><span><span class="cmv-val">Estoque: ${i.estoqueAtual} ${i.unidade}</span><span class="badge alto">Crítico</span></span></div>
  `).join('');
  atualizarBadgeFichas();
}

function atualizarBadgeFichas(){
  const el = document.getElementById('badge-fichas');
  if(el) el.textContent = PRODUTOS.length;
}

function renderFichas(){
  const q = (document.getElementById('search-input')?.value||'').toLowerCase();
  let lista = PRODUTOS;
  if(filtroAtual!=='todos') lista = lista.filter(p=>p.cat===filtroAtual);
  if(q) lista = lista.filter(p=>p.nome.toLowerCase().includes(q));
  const grid = document.getElementById('fichas-grid');
  if(!grid) return;
  if(!lista.length){
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">Nenhum produto encontrado</div>';
    return;
  }
  grid.innerHTML = lista.map(p=>{
    const mCls = p.margem>=80?'excelente':p.margem>=60?'aceitavel':'alto';
    return `<div class="ficha-card" onclick="abrirModalProduto(${p.id})">
      <div class="ficha-top">
        <div class="ficha-cat">${CAT_LABEL[p.cat]||p.cat||'Pizza'}</div>
        <div class="ficha-nome">${p.nome}</div>
      </div>
      <div class="ficha-bottom">
        <div>
          <div class="ficha-preco">${br(p.precoVenda)}</div>
          <div class="ficha-custo">Custo: ${br(p.custoProducao)}</div>
        </div>
        <div class="ficha-lucro">
          <div class="ficha-margem ${mCls}">${p.margem.toFixed(1)}%</div>
          <div class="ficha-status">CMV ${p.cmv.toFixed(1)}%</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function calcPrec(){
  const nome = document.getElementById('p-nome').value.trim()||'Novo Produto';
  const cat = document.getElementById('p-cat').value;
  const emb = parseFloat(document.getElementById('p-embal').value)||0;
  const opPct = parseInt(document.getElementById('op-pct').value)||15;
  const preco = parseFloat(document.getElementById('p-preco').value)||0;
  const subIng = ingPrecList.reduce((s,i)=>s+(i.qtd||0)*(i.custo||0),0);
  const subEmb = emb;
  const totalIns = subIng + subEmb;
  const custoOp = totalIns * opPct / 100;
  const custoTotal = totalIns + custoOp;
  const lucro = preco - custoTotal;
  const cmv = preco>0 ? custoTotal/preco*100 : 0;
  const margem = preco>0 ? lucro/preco*100 : 0;
  document.getElementById('r-ing').textContent = br(subIng);
  document.getElementById('r-emb').textContent = br(subEmb);
  document.getElementById('r-ins').textContent = br(totalIns);
  document.getElementById('r-op').textContent = br(custoOp);
  document.getElementById('r-prod').textContent = br(custoTotal);
  document.getElementById('r-lucro').textContent = br(lucro);
  document.getElementById('r-cmv').textContent = cmv.toFixed(1)+'%';
  document.getElementById('r-margem').textContent = margem.toFixed(1)+'%';
  const st = document.getElementById('r-status');
  if(margem>=70){st.textContent='✅ Excelente';st.style.color='var(--green)';}
  else if(margem>=50){st.textContent='⚠️ Boa';st.style.color='var(--yellow)';}
  else if(margem>=30){st.textContent='⚡ Atenção';st.style.color='var(--accent)';}
  else {st.textContent='❌ Crítico';st.style.color='var(--red)';}
  renderIngList();
}

function addIng(){
  const nome = document.getElementById('ing-nome').value.trim();
  const qtd = parseFloat(document.getElementById('ing-qtd').value)||0;
  const custo = parseFloat(document.getElementById('ing-custo').value)||0;
  if(!nome) return;
  ingPrecList.push({nome,qtd,custo,total:qtd*custo});
  document.getElementById('ing-nome').value='';
  document.getElementById('ing-qtd').value='';
  document.getElementById('ing-custo').value='';
  calcPrec();
}

function renderIngList(){
  const el = document.getElementById('ing-list');
  if(!el) return;
  if(!ingPrecList.length){
    el.innerHTML = '<div style="color:var(--muted);font-size:13px;padding:8px 0">Nenhum ingrediente adicionado</div>';
    return;
  }
  el.innerHTML = ingPrecList.map((i,idx)=>`
    <div class="ing-item">
      <span style="flex:1">${i.nome}</span>
      <span style="width:60px;text-align:right">${i.qtd}g</span>
      <span style="width:80px;text-align:right">${br(i.custo)}</span>
      <span style="width:80px;text-align:right;font-weight:500">${br(i.total)}</span>
      <button class="ing-remove" onclick="remIng(${idx})">×</button>
    </div>
  `).join('');
}

function remIng(idx){
  ingPrecList.splice(idx,1);
  calcPrec();
}

function salvarPrec(){
  const nome = document.getElementById('p-nome').value.trim();
  if(!nome) return toast('Informe o nome do produto','');
  const cat = document.getElementById('p-cat').value;
  const emb = parseFloat(document.getElementById('p-embal').value)||0;
  const opPct = parseInt(document.getElementById('op-pct').value)||15;
  const preco = parseFloat(document.getElementById('p-preco').value)||0;
  if(ingPrecList.length===0) return toast('Adicione pelo menos um ingrediente','');
  const ingredients = ingPrecList.map(i=>{
    const un = (!i.nome.toLowerCase().includes('massa') && !i.nome.toLowerCase().includes('caixa'))?'g':'un';
    return {nome:i.nome,qtd:i.qtd,unit:un,custoUnit:i.custo,total:+(i.qtd*i.custo).toFixed(2)};
  });
  const subIng = ingredients.reduce((s,i)=>s+i.total,0);
  const id = Date.now();
  const prod = {
    id, nome, cat,
    ingredientes: ingredients,
    embalagens: [{nome:'Embalagem',qtd:1,custoUnit:emb,total:emb}],
    subIngredientes: subIng,
    subEmbalagens: emb,
    totalInsumos: subIng+emb,
    pctOp: opPct, custoOp: 0, custoProducao: 0,
    precoVenda: preco, cmv: 0, lucro: 0, margem: 0
  };
  recalcularProduto(prod);
  PRODUTOS.push(prod);
  salvarDados();
  ingPrecList = [];
  document.getElementById('p-nome').value='';
  document.getElementById('p-embal').value='3.95';
  document.getElementById('op-pct').value='15';
  document.getElementById('op-pct-val').textContent='15%';
  document.getElementById('p-preco').value='75';
  renderFichas();
  renderDashboard();
  calcPrec();
  toast(`"${nome}" salva como ficha técnica!`,'ok');
}

function abrirModalProduto(id){
  const p = PRODUTOS.find(x=>x.id===id);
  if(!p) return;
  produtoAtual = p;
  document.getElementById('m-cat').textContent = CAT_LABEL[p.cat]||p.cat;
  document.getElementById('m-nome').textContent = p.nome;
  document.getElementById('m-ings').innerHTML = p.ingredientes.map(i=>`
    <tr><td>${i.nome}</td><td style="text-align:right">${i.qtd}${i.unit}</td><td style="text-align:right">${br(i.custoUnit)}</td><td style="text-align:right">${br(i.total)}</td></tr>
  `).join('');
  document.getElementById('m-embs').innerHTML = (p.embalagens||[]).map(e=>`
    <tr><td>${e.nome}</td><td style="text-align:right">${e.qtd}x</td><td style="text-align:right">${br(e.custoUnit)}</td><td style="text-align:right">${br(e.total)}</td></tr>
  `).join('');
  document.getElementById('m-resumo').innerHTML = `
    <div class="resumo-item"><div class="resumo-label">Subtotal Ingredientes</div><div class="resumo-value">${br(p.subIngredientes)}</div></div>
    <div class="resumo-item"><div class="resumo-label">Subtotal Embalagens</div><div class="resumo-value">${br(p.subEmbalagens)}</div></div>
    <div class="resumo-item"><div class="resumo-label">Total Insumos</div><div class="resumo-value">${br(p.totalInsumos)}</div></div>
    <div class="resumo-item"><div class="resumo-label">Custos Operacionais (${p.pctOp}%)</div><div class="resumo-value">${br(p.custoOp)}</div></div>
    <div class="resumo-item total"><div class="resumo-label">Custo Total</div><div class="resumo-value">${br(p.custoProducao)}</div></div>
    <div class="resumo-item highlight"><div class="resumo-label">Preço de Venda</div><div class="resumo-value">${br(p.precoVenda)}</div></div>
    <div class="resumo-item"><div class="resumo-label">Margem</div><div class="resumo-value" style="color:${p.margem>=70?'var(--green)':p.margem>=50?'var(--yellow)':'var(--red)'}">${p.margem.toFixed(1)}%</div></div>
    <div class="resumo-item"><div class="resumo-label">CMV</div><div class="resumo-value">${p.cmv.toFixed(1)}%</div></div>
    <div class="resumo-item"><div class="resumo-label">Lucro</div><div class="resumo-value">${br(p.lucro)}</div></div>
  `;
  document.getElementById('m-preco-input').value = p.precoVenda;
  document.getElementById('modal-overlay').classList.add('open');
  lockScroll(true);
}

function fecharModal(event){
  if(event.target.id==='modal-overlay'){
    document.getElementById('modal-overlay').classList.remove('open');
    lockScroll(false);
  }
}
function fecharModalBtn(){
  document.getElementById('modal-overlay').classList.remove('open');
  lockScroll(false);
}

function atualizarPreco(){
  if(!produtoAtual) return;
  const v = parseFloat(document.getElementById('m-preco-input').value);
  if(isNaN(v)||v<=0) return toast('Preço inválido','');
  produtoAtual.precoVenda = v;
  recalcularProduto(produtoAtual);
  salvarDados();
  abrirModalProduto(produtoAtual.id);
  renderDashboard();
  renderFichas();
  toast('Preço atualizado!','ok');
}

function editarProduto(){
  if(!produtoAtual) return;
  document.getElementById('p-nome').value = produtoAtual.nome;
  document.getElementById('p-cat').value = produtoAtual.cat;
  document.getElementById('p-embal').value = produtoAtual.subEmbalagens || 3.95;
  document.getElementById('op-pct').value = produtoAtual.pctOp || 15;
  document.getElementById('op-pct-val').textContent = (produtoAtual.pctOp||15)+'%';
  document.getElementById('p-preco').value = produtoAtual.precoVenda;
  ingPrecList = (produtoAtual.ingredientes||[]).map(i=>({nome:i.nome,qtd:i.qtd,custo:i.custoUnit,total:i.total}));
  fecharModalBtn();
  goPage('precificador');
  calcPrec();
}

function excluirProduto(){
  if(!produtoAtual) return;
  if(!confirm(`Excluir "${produtoAtual.nome}" do cardápio?`)) return;
  PRODUTOS = PRODUTOS.filter(p=>p.id!==produtoAtual.id);
  salvarDados();
  fecharModalBtn();
  renderDashboard();
  renderFichas();
  toast(`"${produtoAtual.nome}" excluído`,'ok');
  produtoAtual = null;
}

let INGREDIENTES = [];
let filtroInsumoAtual = 'todos';
let insumoModo = 'view'; // 'view' | 'form'
let insumoEditId = null;

const CAT_LABEL = {massas:"Massas",queijos:"Queijos",embutidos:"Embutidos",molhos:"Molhos",temperos:"Temperos",doces:"Doces",vegetais:"Vegetais",embalagens:"Embalagens",outros:"Outros"};

// Dados completos extraídos da planilha (Ingredientes, Controle de Estoque, Fichas Técnicas)
const INGREDIENTES_CSV = [
  {id:1,nome:"DOCE DE LEITE",categoria:"doces",unidade:"g",custoMedio:0.0235,estoqueAtual:500,estoqueMinimo:100},
  {id:2,nome:"GOIABADA",categoria:"doces",unidade:"g",custoMedio:0.0336,estoqueAtual:500,estoqueMinimo:250},
  {id:3,nome:"MEL",categoria:"doces",unidade:"g",custoMedio:0.0800,estoqueAtual:500,estoqueMinimo:250},
  {id:4,nome:"NUTELLA",categoria:"doces",unidade:"g",custoMedio:0.0723,estoqueAtual:1300,estoqueMinimo:650},
  {id:5,nome:"CAIXA DE PIZZA",categoria:"embalagens",unidade:"un",custoMedio:3.8000,estoqueAtual:100,estoqueMinimo:50},
  {id:6,nome:"PAPEL ANTIGORDURA",categoria:"embalagens",unidade:"un",custoMedio:0.1468,estoqueAtual:200,estoqueMinimo:100},
  {id:7,nome:"PRATO DESC TAM 4",categoria:"embalagens",unidade:"un",custoMedio:0.2750,estoqueAtual:500,estoqueMinimo:100},
  {id:8,nome:"PRATO DESC TAM 8",categoria:"embalagens",unidade:"un",custoMedio:0.2750,estoqueAtual:500,estoqueMinimo:100},
  {id:9,nome:"BACON",categoria:"embutidos",unidade:"g",custoMedio:0.1248,estoqueAtual:800,estoqueMinimo:400},
  {id:10,nome:"CALABRESA SEARA",categoria:"embutidos",unidade:"g",custoMedio:0.0173,estoqueAtual:2000,estoqueMinimo:1000},
  {id:11,nome:"LINGUIÇA MISTA SADIA",categoria:"embutidos",unidade:"g",custoMedio:0.0433,estoqueAtual:860,estoqueMinimo:430},
  {id:12,nome:"LINGUIÇA TOSCANA DEFUMADA",categoria:"embutidos",unidade:"g",custoMedio:0.0380,estoqueAtual:2000,estoqueMinimo:1000},
  {id:13,nome:"MORTADELA",categoria:"embutidos",unidade:"g",custoMedio:0.0178,estoqueAtual:1000,estoqueMinimo:500},
  {id:14,nome:"PEPPERONI",categoria:"embutidos",unidade:"g",custoMedio:0.0424,estoqueAtual:500,estoqueMinimo:100},
  {id:15,nome:"PRESUNTO TIPO PARMA",categoria:"embutidos",unidade:"g",custoMedio:0.1980,estoqueAtual:1000,estoqueMinimo:500},
  {id:16,nome:"FARINHA DE TRIGO",categoria:"massas",unidade:"g",custoMedio:0.0034,estoqueAtual:4000,estoqueMinimo:2000},
  {id:17,nome:"MASSA DA PANUOZZO",categoria:"massas",unidade:"un",custoMedio:1.5000,estoqueAtual:20,estoqueMinimo:10},
  {id:18,nome:"MASSA DA PIZZA",categoria:"massas",unidade:"un",custoMedio:2.4000,estoqueAtual:40,estoqueMinimo:20},
  {id:19,nome:"MASSA NAPOLIDOG",categoria:"massas",unidade:"g",custoMedio:0.0240,estoqueAtual:500,estoqueMinimo:20},
  {id:20,nome:"AZEITE",categoria:"molhos",unidade:"g",custoMedio:0.0498,estoqueAtual:1000,estoqueMinimo:500},
  {id:21,nome:"KETCHUP",categoria:"molhos",unidade:"g",custoMedio:0.0010,estoqueAtual:500,estoqueMinimo:100},
  {id:22,nome:"MAIONESE",categoria:"molhos",unidade:"g",custoMedio:0.0606,estoqueAtual:660,estoqueMinimo:330},
  {id:23,nome:"MOLHO DE TOMATE",categoria:"molhos",unidade:"g",custoMedio:0.0040,estoqueAtual:2760,estoqueMinimo:1380},
  {id:24,nome:"MOSTARDA",categoria:"molhos",unidade:"g",custoMedio:0.0010,estoqueAtual:500,estoqueMinimo:100},
  {id:25,nome:"PESTO DE MANJERICÃO",categoria:"molhos",unidade:"g",custoMedio:0.1842,estoqueAtual:380,estoqueMinimo:190},
  {id:26,nome:"AMENDOA TORRADA",categoria:"outros",unidade:"g",custoMedio:0.0989,estoqueAtual:464,estoqueMinimo:232},
  {id:27,nome:"ATUM",categoria:"outros",unidade:"un",custoMedio:8.7900,estoqueAtual:10,estoqueMinimo:5},
  {id:28,nome:"CHEDDAR",categoria:"queijos",unidade:"g",custoMedio:0.0467,estoqueAtual:500,estoqueMinimo:100},
  {id:29,nome:"MUSSARELA",categoria:"queijos",unidade:"g",custoMedio:0.0346,estoqueAtual:4000,estoqueMinimo:2000},
  {id:30,nome:"PARMESÃO",categoria:"queijos",unidade:"g",custoMedio:0.0410,estoqueAtual:1000,estoqueMinimo:500},
  {id:31,nome:"PASTA DE RICOTA FRESCA",categoria:"queijos",unidade:"g",custoMedio:0.0220,estoqueAtual:1000,estoqueMinimo:500},
  {id:32,nome:"PROVOLONE",categoria:"queijos",unidade:"g",custoMedio:0.0678,estoqueAtual:1000,estoqueMinimo:500},
  {id:33,nome:"QUEIJO CHEDDAR",categoria:"queijos",unidade:"g",custoMedio:0.0467,estoqueAtual:500,estoqueMinimo:250},
  {id:34,nome:"QUEIJO GORGONZOLA",categoria:"queijos",unidade:"g",custoMedio:0.0630,estoqueAtual:1000,estoqueMinimo:500},
  {id:35,nome:"RICOTA CREME",categoria:"queijos",unidade:"g",custoMedio:0.0390,estoqueAtual:400,estoqueMinimo:200},
  {id:36,nome:"RICOTA TEMPERADA",categoria:"queijos",unidade:"g",custoMedio:0.0219,estoqueAtual:1000,estoqueMinimo:500},
  {id:37,nome:"ALHO",categoria:"temperos",unidade:"g",custoMedio:0.0200,estoqueAtual:500,estoqueMinimo:100},
  {id:38,nome:"FARINHA DE PISTACHE",categoria:"temperos",unidade:"g",custoMedio:0.1400,estoqueAtual:1000,estoqueMinimo:500},
  {id:39,nome:"MANJERICÃO",categoria:"temperos",unidade:"un",custoMedio:2.9900,estoqueAtual:6,estoqueMinimo:3},
  {id:40,nome:"ORÉGANO",categoria:"temperos",unidade:"g",custoMedio:0.1923,estoqueAtual:160,estoqueMinimo:80},
  {id:41,nome:"PIMENTA JALAPEÑO",categoria:"temperos",unidade:"g",custoMedio:0.1929,estoqueAtual:560,estoqueMinimo:280},
  {id:42,nome:"PIMENTA ROSA",categoria:"temperos",unidade:"g",custoMedio:0.7000,estoqueAtual:40,estoqueMinimo:20},
  {id:43,nome:"SAL",categoria:"temperos",unidade:"g",custoMedio:0.0020,estoqueAtual:1000,estoqueMinimo:500},
  {id:44,nome:"ABOBRINHA",categoria:"vegetais",unidade:"g",custoMedio:0.0050,estoqueAtual:1000,estoqueMinimo:500},
  {id:45,nome:"AZEITONA",categoria:"vegetais",unidade:"g",custoMedio:0.0398,estoqueAtual:1000,estoqueMinimo:500},
  {id:46,nome:"BATATA CHIPS LAYS",categoria:"vegetais",unidade:"g",custoMedio:0.1286,estoqueAtual:280,estoqueMinimo:140},
  {id:47,nome:"CEBOLA CRISPE",categoria:"vegetais",unidade:"g",custoMedio:0.0010,estoqueAtual:500,estoqueMinimo:100},
  {id:48,nome:"CEBOLA CRISPY",categoria:"vegetais",unidade:"g",custoMedio:0.2750,estoqueAtual:500,estoqueMinimo:100},
  {id:49,nome:"CEBOLA ROXA",categoria:"vegetais",unidade:"g",custoMedio:0.0100,estoqueAtual:1000,estoqueMinimo:500},
  {id:50,nome:"DORITOS",categoria:"vegetais",unidade:"g",custoMedio:0.1498,estoqueAtual:480,estoqueMinimo:240},
  {id:51,nome:"PEPINO PICLES",categoria:"vegetais",unidade:"g",custoMedio:0.0793,estoqueAtual:600,estoqueMinimo:300},
  {id:52,nome:"PERA",categoria:"vegetais",unidade:"g",custoMedio:0.0140,estoqueAtual:2000,estoqueMinimo:1000},
  {id:53,nome:"PICLES",categoria:"vegetais",unidade:"g",custoMedio:0.0010,estoqueAtual:500,estoqueMinimo:100},
  {id:54,nome:"RÚCULA",categoria:"vegetais",unidade:"g",custoMedio:0.0599,estoqueAtual:400,estoqueMinimo:200},
  {id:55,nome:"TOMATE CEREJA CONFIT",categoria:"vegetais",unidade:"g",custoMedio:0.0311,estoqueAtual:1000,estoqueMinimo:500},
];

function inicializarIngredientes(){
  const hoje = new Date();
  const d1 = new Date(hoje); d1.setDate(d1.getDate()-15);
  const d2 = new Date(hoje); d2.setDate(d2.getDate()-30);
  return INGREDIENTES_CSV.map(item=>{
    const q1 = Math.round(item.estoqueAtual * 0.6);
    const q2 = item.estoqueAtual - q1;
    return {
      id: item.id,
      nome: item.nome,
      categoria: item.categoria,
      unidade: item.unidade,
      custoMedio: item.custoMedio,
      estoqueAtual: item.estoqueAtual,
      estoqueMinimo: item.estoqueMinimo,
      historico: [
        {data:d2.toISOString().slice(0,10),fornecedor:"Distribuidora Padrão",qtd:q1,custoUnit:item.custoMedio,total:+((q1||0)*item.custoMedio).toFixed(2)},
        {data:d1.toISOString().slice(0,10),fornecedor:"Distribuidora Padrão",qtd:q2,custoUnit:item.custoMedio,total:+((q2||0)*item.custoMedio).toFixed(2)},
      ]
    };
  });
}

function recalcularEstoque(ing){
  ing.estoqueAtual = ing.historico.reduce((s,c)=>s+c.qtd,0);
  return ing;
}

function getIngUsadoEm(id){
  const ing = INGREDIENTES.find(x=>x.id===id);
  if(!ing) return [];
  const prods = [];
  PRODUTOS.forEach(p=>{
    const tem = (p.ingredientes||[]).some(i=>i.nome===ing.nome) || (p.embalagens||[]).some(e=>e.nome===ing.nome);
    if(tem) prods.push(p.nome);
  });
  return prods;
}

function statusEstoque(ing){
  if(!ing.estoqueMinimo || ing.estoqueMinimo<=0) return {label:'OK', cls:'ok'};
  const ratio = ing.estoqueAtual / ing.estoqueMinimo;
  if(ratio >= 1.5) return {label:'OK', cls:'ok'};
  if(ratio >= 1) return {label:'Abaixo do ideal', cls:'baixo'};
  return {label:'Crítico', cls:'critico'};
}

function renderInsumos(){
  try {
    atualizarBadgeInsumos();
  } catch(e) {}
  if(!INGREDIENTES || !INGREDIENTES.length){
    const el = document.getElementById('ins-tbody');
    if(el) el.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--muted)">Nenhum insumo cadastrado. Clique em "+ Novo Insumo" para começar.</td></tr>';
    return;
  }
  const q = (document.getElementById('ins-search')?.value||'').toLowerCase();
  let lista = INGREDIENTES.filter(ing=>{
    if(filtroInsumoAtual!=='todos' && ing.categoria!==filtroInsumoAtual) return false;
    if(q && !ing.nome.toLowerCase().includes(q)) return false;
    return true;
  });
  const resumo = document.getElementById('ins-resumo');
  if(!resumo) return;
  const total = INGREDIENTES.length;
  const baixos = INGREDIENTES.filter(i=>statusEstoque(i).cls==='critico').length;
  const valorTotal = INGREDIENTES.reduce((s,i)=>s+(i.estoqueAtual||0)*(i.custoMedio||0),0);
  const categorias = new Set(INGREDIENTES.map(i=>i.categoria)).size;
  resumo.innerHTML = `
    <div class="ins-kpi accent"><div class="kpi-label">Total de Insumos</div><div class="kpi-value">${total}</div></div>
    <div class="ins-kpi green"><div class="kpi-label">Categorias</div><div class="kpi-value">${categorias}</div></div>
    <div class="ins-kpi ${baixos>0?'red':'green'}"><div class="kpi-label">Estoque Crítico</div><div class="kpi-value">${baixos}</div></div>
    <div class="ins-kpi"><div class="kpi-label">Valor em Estoque</div><div class="kpi-value">${br(valorTotal)}</div></div>
  `;
  const tbody = document.getElementById('ins-tbody');
  const empty = document.getElementById('ins-empty');
  if(!tbody) return;
  if(!lista.length){
    tbody.innerHTML='';
    if(empty) empty.style.display='block';
    return;
  }
  if(empty) empty.style.display='none';
  tbody.innerHTML = lista.map(ing=>{
    try {
      const s = statusEstoque(ing);
      return `<tr style="cursor:pointer" onclick="abrirModalInsumo(${ing.id})">
        <td><strong>${ing.nome||'?'}</strong></td>
        <td><span class="stock-cat-tag ${ing.categoria||'outros'}">${CAT_LABEL[ing.categoria]||ing.categoria||'Outros'}</span></td>
        <td>${ing.unidade||'un'}</td>
        <td>${typeof ing.estoqueAtual==='number'?ing.estoqueAtual.toFixed(ing.unidade==='un'?0:1):'—'}</td>
        <td>${typeof ing.estoqueMinimo==='number'?ing.estoqueMinimo.toFixed(ing.unidade==='un'?0:1):'—'}</td>
        <td>${br(ing.custoMedio||0)}</td>
        <td><span class="stock-badge ${s.cls}">${s.label}</span></td>
        <td style="text-align:right">
          <button class="stock-action-btn" onclick="event.stopPropagation();abrirModalInsumo(${ing.id})">📦 Compra</button>
        </td>
      </tr>`;
    } catch(e) {
      return '';
    }
  }).join('');
}

function atualizarBadgeInsumos(){
  const criticos = INGREDIENTES.filter(i=>statusEstoque(i).cls==='critico').length;
  const el = document.getElementById('badge-insumos');
  if(criticos>0){ el.textContent=criticos; el.style.display='inline'; }
  else el.style.display='none';
}

function setFiltroInsumo(f){
  filtroInsumoAtual = f;
  document.querySelectorAll('#page-insumos .filter-btn').forEach(b=>b.classList.remove('active'));
  const el = document.getElementById('ins-f-'+f);
  if(el) el.classList.add('active');
  renderInsumos();
}

function salvarIngredientes(){
  try{ localStorage.setItem('tostata_ingredientes', JSON.stringify(INGREDIENTES)); }catch(e){}
}

function carregarIngredientes(){
  try{
    const dados = localStorage.getItem('tostata_ingredientes');
    if(dados){ INGREDIENTES = JSON.parse(dados).map(recalcularEstoque); return true; }
  }catch(e){}
  return false;
}

function mostrarViewInsumo(ing){
  insumoModo = 'view';
  document.getElementById('mi-view').style.display = 'block';
  document.getElementById('mi-form').style.display = 'none';
  insumoAtual = ing;
  document.getElementById('mi-cat').textContent = CAT_LABEL[ing.categoria]||ing.categoria;
  document.getElementById('mi-nome').textContent = ing.nome;
  document.getElementById('mi-estoque').textContent = (typeof ing.estoqueAtual==='number'?ing.estoqueAtual.toFixed(ing.unidade==='un'?0:1):'—')+' '+ing.unidade;
  document.getElementById('mi-estoque').style.color = statusEstoque(ing).cls==='critico'?'var(--red)':statusEstoque(ing).cls==='baixo'?'var(--yellow)':'var(--green)';
  document.getElementById('mi-min').textContent = (typeof ing.estoqueMinimo==='number'?ing.estoqueMinimo.toFixed(ing.unidade==='un'?0:1):'—')+' '+ing.unidade;
  document.getElementById('mi-custo').textContent = br(ing.custoMedio);
  document.getElementById('mi-valor').textContent = br((ing.estoqueAtual||0)*ing.custoMedio);
  const usado = getIngUsadoEm(ing.id);
  document.getElementById('mi-usado').innerHTML = usado.length ? usado.map(n=>`<span>${n}</span>`).join('') : '<span style="color:var(--muted)">Nenhum produto utiliza este insumo</span>';
  document.getElementById('mi-historico').innerHTML = (ing.historico||[]).length ? [...ing.historico].sort((a,b)=>b.data.localeCompare(a.data)).map(c=>`
    <tr>
      <td>${new Date(c.data+'T00:00:00').toLocaleDateString('pt-BR')}</td>
      <td>${c.fornecedor||'—'}</td>
      <td style="text-align:right">${c.qtd} ${ing.unidade}</td>
      <td style="text-align:right">${br(c.custoUnit)}</td>
      <td style="text-align:right;font-weight:600">${br(c.total)}</td>
    </tr>
  `).join('') : '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:1.5rem">Nenhuma compra registrada</td></tr>';
  document.getElementById('compra-form').style.display='none';
  document.getElementById('compra-forn').value='';
  document.getElementById('compra-qtd').value='';
  document.getElementById('compra-unit').value='';
  document.getElementById('compra-data').value=new Date().toISOString().slice(0,10);
  document.getElementById('modal-insumo').classList.add('open');
  lockScroll(true);
}

function mostrarFormInsumo(ing){
  insumoModo = 'form';
  document.getElementById('mi-view').style.display = 'none';
  document.getElementById('mi-form').style.display = 'block';
  if(ing){
    insumoEditId = ing.id;
    document.getElementById('mi-cat').textContent = 'Editando';
    document.getElementById('mi-nome').textContent = ing.nome;
    document.getElementById('f-nome').value = ing.nome;
    document.getElementById('f-cat').value = ing.categoria;
    document.getElementById('f-un').value = ing.unidade;
    document.getElementById('f-custo').value = ing.custoMedio;
    document.getElementById('f-estoque').value = ing.estoqueAtual;
    document.getElementById('f-min').value = ing.estoqueMinimo;
    document.getElementById('f-custo-group').style.display = 'block';
    document.getElementById('f-estoque-group').style.display = 'block';
    document.getElementById('mi-salvar-btn').textContent = '💾 Atualizar';
  } else {
    insumoEditId = null;
    document.getElementById('mi-cat').textContent = 'Novo';
    document.getElementById('mi-nome').textContent = 'Cadastro de Insumo';
    document.getElementById('f-nome').value = '';
    document.getElementById('f-cat').value = 'outros';
    document.getElementById('f-un').value = 'g';
    document.getElementById('f-custo').value = '0';
    document.getElementById('f-estoque').value = '0';
    document.getElementById('f-min').value = '0';
    document.getElementById('f-custo-group').style.display = 'block';
    document.getElementById('f-estoque-group').style.display = 'block';
    document.getElementById('mi-salvar-btn').textContent = '💾 Salvar';
  }
  document.getElementById('modal-insumo').classList.add('open');
  lockScroll(true);
}

function abrirModalInsumo(id){
  if(id===null){
    mostrarFormInsumo(null);
    return;
  }
  const ing = INGREDIENTES.find(x=>x.id===id);
  if(!ing) return;
  mostrarViewInsumo(ing);
}

function fecharModalInsumo(){
  document.getElementById('modal-insumo').classList.remove('open');
  lockScroll(false);
  insumoAtual = null;
  insumoEditId = null;
  insumoModo = 'view';
}

function registrarCompra(){
  if(!insumoAtual) return;
  const forn = document.getElementById('compra-forn').value.trim()||'Avulso';
  const qtd = parseFloat(document.getElementById('compra-qtd').value);
  const custoUnit = parseFloat(document.getElementById('compra-unit').value);
  const data = document.getElementById('compra-data').value || new Date().toISOString().slice(0,10);
  if(isNaN(qtd)||qtd<=0||isNaN(custoUnit)||custoUnit<=0){
    toast('Preencha quantidade e custo unitário válidos','');
    return;
  }
  insumoAtual.historico.push({data, fornecedor:forn, qtd, custoUnit, total:+(qtd*custoUnit).toFixed(2)});
  recalcularEstoque(insumoAtual);
  // Update average cost
  const totalCusto = insumoAtual.historico.reduce((s,c)=>s+c.custoUnit*c.qtd,0);
  const totalQtd = insumoAtual.historico.reduce((s,c)=>s+c.qtd,0);
  insumoAtual.custoMedio = +(totalCusto/totalQtd).toFixed(4);
  salvarIngredientes();
  renderInsumos();
  abrirModalInsumo(insumoAtual.id);
  toast('Compra registrada!','ok');
}

function editarInsumo(){
  if(!insumoAtual) return;
  mostrarFormInsumo(insumoAtual);
}

function salvarFormInsumo(){
  const nome = document.getElementById('f-nome').value.trim();
  const cat = document.getElementById('f-cat').value;
  const un = document.getElementById('f-un').value.trim();
  const custo = parseFloat(document.getElementById('f-custo').value);
  const estoque = parseFloat(document.getElementById('f-estoque').value)||0;
  const minimo = parseFloat(document.getElementById('f-min').value)||0;
  if(!nome) return toast('Informe o nome do insumo','');
  if(!un) return toast('Informe a unidade de medida','');
  if(isNaN(custo)||custo<0) return toast('Informe um custo médio válido','');
  if(insumoEditId){
    const ing = INGREDIENTES.find(x=>x.id===insumoEditId);
    if(!ing) return;
    ing.nome = nome;
    ing.categoria = cat;
    ing.unidade = un;
    ing.estoqueMinimo = minimo;
    ing.custoMedio = custo;
    ing.estoqueAtual = estoque;
    salvarIngredientes();
    renderInsumos();
    mostrarViewInsumo(ing);
    toast(`"${nome}" atualizado!`,'ok');
  } else {
    const novo = {
      id: Date.now(), nome, categoria: cat, unidade: un,
      estoqueAtual: estoque, estoqueMinimo: minimo, custoMedio: custo,
      historico: []
    };
    INGREDIENTES.push(novo);
    salvarIngredientes();
    renderInsumos();
    fecharModalInsumo();
    toast(`"${nome}" cadastrado!`,'ok');
  }
}

function cancelarFormInsumo(){
  if(insumoEditId){
    const ing = INGREDIENTES.find(x=>x.id===insumoEditId);
    if(ing) { mostrarViewInsumo(ing); return; }
  }
  fecharModalInsumo();
}

function excluirInsumo(){
  if(!insumoAtual) return;
  if(!confirm(`Excluir "${insumoAtual.nome}" do cadastro de insumos?`)) return;
  INGREDIENTES = INGREDIENTES.filter(i=>i.id!==insumoAtual.id);
  salvarIngredientes();
  fecharModalInsumo();
  renderInsumos();
  toast(`"${insumoAtual.nome}" excluído`,'ok');
  insumoAtual = null;
}

// ==================== BACKUP (JSON file) ====================
function exportarDados(){
  const dados = { produtos: PRODUTOS, ingredientes: INGREDIENTES, exportadoEm: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tostata_backup_' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Dados exportados com sucesso!','ok');
}

function importarDados(){
  document.getElementById('file-input').click();
}

function carregarArquivo(ev){
  const file = ev.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    try {
      const dados = JSON.parse(e.target.result);
      if(!dados.produtos || !Array.isArray(dados.produtos)){
        toast('Arquivo inválido: campo "produtos" não encontrado','');
        return;
      }
      PRODUTOS = dados.produtos;
      salvarDados();
      if(dados.ingredientes && Array.isArray(dados.ingredientes)){
        INGREDIENTES = dados.ingredientes.map(recalcularEstoque);
        salvarIngredientes();
      }
      renderDashboard();
      renderFichas();
      renderInsumos();
      calcPrec();
      toast(`Dados importados (${PRODUTOS.length} produtos, ${(INGREDIENTES||[]).length} insumos)!`,'ok');
    } catch(err) {
      toast('Erro ao ler arquivo: '+err.message,'');
    }
  };
  reader.readAsText(file);
  ev.target.value = '';
}

// ==================== CSV IMPORT ====================
function importarCSV(ev){
  const file = ev.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    try {
      const produtos = parseCSV(e.target.result);
      if(!produtos.length) { toast('Nenhum produto encontrado no CSV',''); return; }
      PRODUTOS = produtos.map(recalcularProduto);
      salvarDados();
      INGREDIENTES = inicializarIngredientes().map(recalcularEstoque);
      salvarIngredientes();
      renderDashboard();
      renderFichas();
      renderInsumos();
      calcPrec();
      toast(`CSV importado: ${PRODUTOS.length} produtos, ${INGREDIENTES.length} insumos!`,'ok');
    } catch(err) {
      toast('Erro ao ler CSV: '+err.message,'');
    }
  };
  reader.readAsText(file);
  ev.target.value = '';
}

function parseCSV(text){
  function parseLine(l){
    const r=[]; let c='',q=false;
    for(let i=0;i<l.length;i++){
      const ch=l[i];
      if(ch==='"'){ q=!q; continue; }
      if(ch===','&&!q){ r.push(c.trim()); c=''; } else c+=ch;
    }
    r.push(c.trim()); return r;
  }
  function pR$(v){
    if(!v||v==='R$ 0,0000') return 0;
    v=v.replace(/^R\$\s*/,'').replace(/\./g,'').replace(',','.');
    return parseFloat(v)||0;
  }
  const lines=text.split(/\r?\n/).map(parseLine);
  const prods=[];
  let cur=null, sec='';
  for(let i=0;i<lines.length;i++){
    const L=lines[i], c0=(L[0]||'').trim();
    const m=c0.match(/FICHA\s*TÉCNICA\s*[—\-–]\s*(.+)/i);
    if(m){
      if(cur&&cur.ingredientes.length) prods.push(cur);
      const n=m[1].trim();
      const lc=n.toLowerCase();
      let cat='pizza';
      if(lc.includes('panuozzo')) cat='panuozzo';
      else if(lc.includes('napolidog')) cat='napolidog';
      cur={nome:n,cat,ingredientes:[],embalagens:[],outrosGastos:0,pctOp:15,precoVenda:0};
      sec=''; continue;
    }
    if(!cur) continue;
    if(c0.includes('INGREDIENTES DA RECEITA')){ sec='ing'; continue; }
    if(c0.includes('CUSTOS ADICIONAIS')||c0.includes('Embalagem')){ sec='emb'; continue; }
    if(c0.includes('RESUMO E PRECIFICAÇÃO')){ sec='prec'; continue; }
    if(!c0||c0==='INGREDIENTE'||c0.startsWith('SUBTOTAL')||c0.startsWith('Custo Total')||c0.startsWith('% Custos')) continue;
    if(sec==='ing'){
      if(c0.toLowerCase().includes('outros gastos')){ cur.outrosGastos=pR$(L[3])||2; continue; }
      const qtd=parseFloat((L[1]||'').replace(',','.'))||0;
      const cu=pR$(L[2]);
      const total=pR$(L[3])||qtd*cu;
      const un = (qtd<2&&c0.toLowerCase().startsWith('massa'))||c0.toLowerCase().includes('caixa')?'un':'g';
      cur.ingredientes.push({nome:c0.trim(),qtd,unit:un,custoUnit:cu,total});
    }
    if(sec==='emb'&&c0){
      const qtd=parseFloat((L[1]||'').replace(',','.'))||1;
      const cu=pR$(L[2]);
      const total=pR$(L[3])||qtd*cu;
      cur.embalagens.push({nome:c0.trim(),qtd,custoUnit:cu,total});
    }
    if(sec==='prec'){
      if(c0.includes('PREÇO DE VENDA')) cur.precoVenda=pR$(L[3]);
      if(c0.includes('%')){
        const pct=(L[3]||'').match(/([0-9]+[.,]?[0-9]*)%/);
        if(pct) cur.pctOp=parseFloat(pct[1].replace(',','.'));
      }
    }
  }
  if(cur&&cur.ingredientes.length&&!prods.some(p=>p.nome===cur.nome)) prods.push(cur);
  return prods;
}

// ==================== INIT ====================
if(!carregarDados() || !PRODUTOS.length){
  PRODUTOS = PRODUTOS.map(recalcularProduto);
  salvarDados();
}
if(!carregarIngredientes() || !INGREDIENTES.length){
  INGREDIENTES = inicializarIngredientes().map(recalcularEstoque);
  salvarIngredientes();
}
renderDashboard();
renderFichas();
renderInsumos();
calcPrec();