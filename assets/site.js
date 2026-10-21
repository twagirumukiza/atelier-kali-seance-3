const d=document,r=d.documentElement;
d.getElementById('th').onclick=()=>{const t=r.dataset.th==='dark'?'light':'dark';r.dataset.th=t;localStorage.th=t};
d.getElementById('mn').onclick=()=>d.getElementById('sb').classList.toggle('open');
const f=location.pathname.split('/').pop()||'index.html';d.querySelectorAll('#sb a[data-f]').forEach(a=>a.dataset.f===f&&a.classList.add('on'));
d.querySelectorAll('.cp').forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(b.dataset.c);b.textContent='Copié ✓';setTimeout(()=>b.textContent='Copier',1500)});
let fs=+localStorage.fs||100;const ap=()=>{r.style.setProperty('--fs',fs+'%');localStorage.fs=fs;const v=d.getElementById('fv');if(v)v.textContent=fs+'%'};
d.querySelectorAll('[data-fs]').forEach(b=>b.onclick=()=>{fs=b.dataset.fs=='0'?100:Math.min(160,Math.max(80,fs+ +b.dataset.fs));ap()});ap();
