document.querySelectorAll('.links a, .cta a').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(href && href.startsWith('#')){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth'}); }
  });
});

const needs=document.querySelectorAll('.need');
const bar=document.getElementById('benefitBar');
const label=document.getElementById('benefitLabel');
function updateMeter(){
  const checked=[...needs].filter(n=>n.checked).length;
  const pct=Math.round((checked/6)*100);
  bar.style.width=pct+'%';
  label.textContent='Benefit index: '+pct+'%';
}
needs.forEach(n=>n.addEventListener('change',updateMeter));
updateMeter();

const fieldSelect=document.getElementById('fieldSelect');
const fieldInfo=document.getElementById('fieldInfo');
const map={
  business:'Market analytics, product recommendations, automated reporting.',
  engineering:'Design assistance, simulation, predictive maintenance.',
  health:'Imaging analysis, triage support, early risk signals.',
  education:'Personalized curricula, instant exercises, progress tracking.',
  arts:'Idea generation, media enhancement, interactive experiences.',
  public:'Traffic analytics, early warnings, faster citizen services.'
};
fieldSelect.addEventListener('change',()=>{ fieldInfo.textContent=map[fieldSelect.value]||''; });

document.getElementById('downloadBtn').addEventListener('click',()=>{
  const text=[
    'Why AI matters for the next generation:',
    '1) Personalized learning and faster skills.',
    '2) More accurate healthcare and early detection.',
    '3) New roles with higher productivity.',
    '4) Solutions to social and environmental challenges.',
    '5) Creativity and entrepreneurship with powerful tools.',
    'Start small, experiment, and build step by step.'
  ].join('\n');
  const blob=new Blob([text],{type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='AI-NextGen-key-points.txt';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
});






