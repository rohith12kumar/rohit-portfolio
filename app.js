const $ = selector => document.querySelector(selector);
const NS = 'http://www.w3.org/2000/svg';
const architectures = [
  {mode:'EC2', caption:'Nginx web server', title:'EC2 INSTANCE', layers:['NGINX','LINUX','EC2'], icon:'chip'},
  {mode:'API', caption:'Serverless REST API', title:'SERVERLESS API', layers:['API GATEWAY','LAMBDA','DYNAMODB'], icon:'lambda'},
  {mode:'CI/CD', caption:'Deployment pipeline', title:'CI/CD PIPELINE', layers:['GITHUB','ACTIONS','AWS IAM'], icon:'branch'}
];
function slab(x,y,w,d,h,top,left,right){
  return `<g stroke="#152d27" stroke-width="1.25" stroke-linejoin="round"><path fill="${left}" d="M${x-w} ${y}l${w} ${d}v${h}l-${w} -${d}z"/><path fill="${right}" d="M${x} ${y+d}l${w} -${d}v${h}l-${w} ${d}z"/><path fill="${top}" d="M${x-w} ${y}l${w} -${d} ${w} ${d} -${w} ${d}z"/></g>`;
}
function glyph(type){
  if(type==='lambda')return '<path d="m-25 -18 10 0 20 38 15 0m-27 -23 -15 23" fill="none" stroke="currentColor" stroke-width="6"/>';
  if(type==='branch')return '<g stroke="currentColor" stroke-width="4" fill="none"><path d="M-16 -16v32m0-10q25 0 32-22"/><circle cx="-16" cy="-18" r="5"/><circle cx="-16" cy="18" r="5"/><circle cx="16" cy="-18" r="5"/></g>';
  return '<g fill="none" stroke="currentColor" stroke-width="3"><rect x="-18" y="-18" width="36" height="36" rx="3"/><rect x="-10" y="-10" width="20" height="20"/>'+[-10,0,10].map(v=>`<path d="M${v} -25v7m0 36v7M-25 ${v}h7m36 0h7"/>`).join('')+'</g>';
}
function machine(i){
  let output='';
  for(let k=0;k<3;k++){
    const y=209-k*40;
    output+=slab(254,y,98,45,23,k===2?'#b3e48d':'#7d9e81','#527867','#304e40');
    for(let j=0;j<13;j++){
      const x=163+j*5.7;
      output+=`<path d="M${x} ${y+(x-156)*.459+6}v10" stroke="#1c4031" stroke-width="2.4"/>`;
    }
    for(let j=0;j<3;j++)output+=`<circle cx="${326+j*6}" cy="${y+(352-326-j*6)*.459+11}" r="1.8" fill="#bcfa87"/>`;
  }
  output+=slab(254,120,79,36,6,'#d0ffa8','#97ba7d','#759d66');
  output+=`<g transform="matrix(1 .455 -1 .455 254 120)" color="#33583d">${glyph(architectures[i].icon)}</g>`;
  return output;
}
function renderArchitecture(i){
  const a=architectures[i];
  $('#diagram').setAttribute('aria-label', ['Nginx on a Linux EC2 instance','API Gateway sends requests to Lambda, which accesses DynamoDB','GitHub Actions deploys to AWS using IAM permissions'][i]);
  const traces=['M156 209l-49 23 -50-23 -44 20','M254 282v9l-68 31','M352 212l31-14 40 19 72-33','M292 248l47 22 42-19 55 25','M192 243l-50 23-46-21-65 30'];
  $('#diagram').innerHTML=`<svg xmlns="${NS}" viewBox="0 0 510 316"><defs><pattern id="grid" width="42" height="19.3" patternUnits="userSpaceOnUse"><path d="M0 0l42 19.3m-42 0L42 0" fill="none" stroke="#9cc8a5" opacity=".13" stroke-width=".8"/></pattern><radialGradient id="glow"><stop stop-color="#405e44"/><stop offset="1" stop-color="#142c23"/></radialGradient></defs><rect width="510" height="316" fill="url(#glow)"/><rect width="510" height="316" fill="url(#grid)"/><g stroke="#89c976" fill="none">${traces.map(d=>`<path d="${d}" opacity=".48"/><path class="flow" d="${d}" stroke="#c6f777" stroke-width="2" stroke-dasharray="3 45"/>`).join('')}</g>${machine(i)}<g font-family="monospace" font-size="11" fill="#c4d9c7"><path d="M191 113l-40-20h-49M348 177l32-17h38" fill="none" stroke="#a1c397"/><text x="62" y="86">${a.title}</text><text x="380" y="152">${a.layers[1]}</text><circle cx="191" cy="113" r="2.5" fill="#d5ffac"/><circle cx="348" cy="177" r="2.5" fill="#d5ffac"/></g></svg>`;
  if(i>0){
    const labels=i===1?['API Gateway','Lambda','DynamoDB']:['GitHub','Actions','AWS IAM'];
    const shapes=labels.map((label,n)=>{
      const x=90+n*165, y=164;
      return slab(x,y,52,25,16,'#cae5a3','#88a57d','#56765b')+'<text x="'+x+'" y="223" text-anchor="middle" fill="#e1ecd9" font-family="monospace" font-size="14">'+label+'</text>';
    }).join('');
    $('#diagram svg').innerHTML='<defs>'+$('#grid').outerHTML+'</defs><rect width="510" height="316" fill="#183528"/><rect width="510" height="316" fill="url(#grid)"/><path d="M90 164h330" stroke="#c5ea8b" stroke-width="2" stroke-dasharray="5 3"/>'+shapes;
  }
  $('#drawingtitle').textContent=['EC2 web server','Serverless REST API','Deployment pipeline'][i];
  $('#plate').textContent='0'+(i+1)+' / 03';
  document.querySelectorAll('.modes button').forEach((b,n)=>b.setAttribute('aria-pressed',n===i));
}
function control(parent,label,action){
  const b=document.createElement('button'); b.textContent=label; b.onclick=action; $(parent).append(b);
}
architectures.forEach((a,i)=>control('.modes',a.mode,()=>renderArchitecture(i)));
renderArchitecture(0);
const names=['EC2 web server','Serverless REST API','AWS deployment pipeline','Green Basket','Campus Connect'];
const colors=['#cbdbbb','#bfcfdd','#e4cfad','#cae0c9','#dbd6c8'];
const projectArt = ["ec2","serverless","pipeline","green-basket","campus-connect"];
function thumbnail(i){
  return `<div class="art" style="--swatch:${colors[i]}"><img src="assets/projects/${projectArt[i]}.svg" width="250" height="155" alt=""></div>`;
}
const filters=['All','Cloud & DevOps','Full-stack'];
function renderProjects(active){
  $('#projects').innerHTML=P.map((p,i)=>{
    const cat=i<3?1:2;
    if(active && active!==cat)return '';
    return `<article class="card">${thumbnail(i)}<div class="cardbody"><div class="cat">${i<3?'AWS / '+['Compute','Serverless','Automation'][i]:'Full-stack / Web'}</div><h3>${names[i]}</h3><p>${p.d}</p><button class="more" data-project="${i}" aria-label="Explore ${names[i]}">Explore project</button></div></article>`;
  }).join('');
  document.querySelectorAll('.filters button').forEach((b,i)=>b.setAttribute('aria-pressed',i===active));
}
filters.forEach((label,i)=>control('.filters',label,()=>renderProjects(i)));
renderProjects(0);
const tags=items=>items.map(s=>`<span class="tag">${s}</span>`).join('');
$('#projects').onclick=e=>{
  const b=e.target.closest('[data-project]'); if(!b)return;
  const p=P[Number(b.dataset.project)];
  $('#detailbody').innerHTML=`<small class="cat">${p.t}</small><h2 id="detailtitle">${p.n}</h2><p>${p.d}</p>${p.h ? "<p>"+p.h+"</p>" : ""}<div>${tags(p.s)}</div><a class="primary" href="https://github.com/rohith12kumar/${p.r}">View repository</a>`;
  $('#detail').setAttribute('aria-labelledby','detailtitle'); $('#detail').showModal();
};
$('.close').onclick=()=>$('#detail').close();
$('#detail').onclick=e=>{if(e.target===$('#detail')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}};
$('#history').innerHTML=J.slice(1).map((j,i)=>`<details ${i===0?'open':''}><summary>${j.n}<small>${j.dt} · ${j.s}</small></summary><ul>${j.b.map(b=>'<li>'+b+'</li>').join('')}</ul></details>`).join('');
$('#toolkit').innerHTML=K.map(([label,items],i)=>`<details ${i===0?'open':''}><summary>${label}</summary><div>${tags(items)}</div></details>`).join('');
$('#copy').onclick=async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText('rohithkumarmamindla12@gmail.com');b.textContent='Email copied'}catch{b.textContent='Select the email address above to copy'}};

$('#compose').addEventListener('submit', event => {
  event.preventDefault();
  const reply = $('#reply').value.trim();
  const message = $('#note').value + (reply ? '\n\nReply to: ' + reply : '');
  location.href = 'mailto:rohithkumarmamindla12@gmail.com?subject=Portfolio%20enquiry&body=' + encodeURIComponent(message);
});

const menuButton = $('.navtoggle');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close' : 'Menu';
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') === 'false'));
document.querySelector('nav').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true'){ setMenu(false); menuButton.focus(); } });

const toolkit = $('#toolkit');
const resetTools = document.createElement('button');
resetTools.className = 'reset-tools';
resetTools.textContent = 'Reset tool positions';
resetTools.hidden = true;
toolkit.after(resetTools);
let movingTool;
toolkit.addEventListener('pointerdown', event => {
  const tag = event.target.closest('.tag');
  if (!tag || event.button !== 0) return;
  tag.setPointerCapture(event.pointerId);
  movingTool = {tag, id:event.pointerId, startX:event.clientX, startY:event.clientY,
    x:Number(tag.dataset.x || 0), y:Number(tag.dataset.y || 0)};
});
toolkit.addEventListener('pointermove', event => {
  if (movingTool?.id !== event.pointerId) return;
  const {tag,x,y,startX,startY} = movingTool;
  const dx = x + event.clientX - startX;
  const dy = y + event.clientY - startY;
  const bounds = toolkit.getBoundingClientRect();
  const box = tag.getBoundingClientRect();
  const left = box.left - Number(tag.dataset.x || 0);
  const top = box.top - Number(tag.dataset.y || 0);
  tag.dataset.x = Math.max(bounds.left-left, Math.min(dx,bounds.right-left-box.width));
  tag.dataset.y = Math.max(bounds.top-top, Math.min(dy,bounds.bottom-top-box.height));
  tag.style.transform = 'translate('+tag.dataset.x+'px,'+tag.dataset.y+'px)';
  resetTools.hidden = false;
});
toolkit.addEventListener('lostpointercapture', () => { movingTool = undefined; });
resetTools.addEventListener('click', () => {
  toolkit.querySelectorAll('.tag').forEach(tag => { delete tag.dataset.x; delete tag.dataset.y; tag.style.transform = ''; });
  toolkit.querySelector('summary').focus();
  resetTools.hidden = true;
});
