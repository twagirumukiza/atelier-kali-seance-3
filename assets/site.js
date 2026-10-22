const d=document,r=d.documentElement;
d.getElementById('th').onclick=()=>{const t=r.dataset.th==='dark'?'light':'dark';r.dataset.th=t;localStorage.th=t};
d.getElementById('mn').onclick=()=>d.getElementById('sb').classList.toggle('open');
const f=location.pathname.split('/').pop()||'index.html';d.querySelectorAll('#sb a[data-f]').forEach(a=>a.dataset.f===f&&a.classList.add('on'));
d.querySelectorAll('.cp').forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(b.dataset.c);b.textContent='Copié ✓';setTimeout(()=>b.textContent='Copier',1500)});
let fs=+localStorage.fs||100;const ap=()=>{r.style.setProperty('--fs',fs+'%');localStorage.fs=fs;const v=d.getElementById('fv');if(v)v.textContent=fs+'%'};
d.querySelectorAll('[data-fs]').forEach(b=>b.onclick=()=>{{const y=b.getBoundingClientRect().top;fs=b.dataset.fs=='0'?100:Math.min(160,Math.max(80,fs+ +b.dataset.fs));ap();const fix=()=>scrollBy(0,b.getBoundingClientRect().top-y);fix();requestAnimationFrame(fix);setTimeout(fix,60)}});ap();

const lb=d.createElement('div');lb.id='lb';lb.innerHTML='<div class="tb"><button data-z="1.25">+</button><button data-z="0.8">−</button><button data-z="0">1:1</button><button data-z="x">✕</button></div><img alt="">';d.body.appendChild(lb);
const li=lb.querySelector('img');let sc=1,tx=0,ty=0;const tf=()=>li.style.transform=`translate(-50%,-50%) translate(${tx}px,${ty}px) scale(${sc})`;
const zm=f=>{sc=Math.min(8,Math.max(.3,f?sc*f:1));if(!f){tx=ty=0}tf()};const cl=()=>lb.classList.remove('on');
d.querySelectorAll('main img').forEach(i=>i.onclick=()=>{li.src=i.src;sc=1;tx=ty=0;tf();lb.classList.add('on')});
lb.querySelectorAll('[data-z]').forEach(b=>b.onclick=e=>{e.stopPropagation();b.dataset.z=='x'?cl():zm(+b.dataset.z)});
lb.onclick=e=>{if(e.target===lb)cl()};d.addEventListener('keydown',e=>{if(e.key=='Escape')cl();if(e.key=='+')zm(1.25);if(e.key=='-')zm(.8)});
lb.addEventListener('wheel',e=>{e.preventDefault();zm(e.deltaY<0?1.15:.87)},{passive:false});li.ondblclick=()=>zm(sc>1?0:2.5);
const P=new Map();let pd=0;li.onpointerdown=e=>{li.setPointerCapture(e.pointerId);P.set(e.pointerId,e);pd=0};
li.onpointermove=e=>{const o=P.get(e.pointerId);if(!o)return;P.set(e.pointerId,e);if(P.size==2){const[a,b]=[...P.values()];const n=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);if(pd)zm(n/pd);pd=n}else{tx+=e.clientX-o.clientX;ty+=e.clientY-o.clientY;tf()}};
li.onpointerup=li.onpointercancel=e=>{P.delete(e.pointerId);pd=0};
