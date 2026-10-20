
function $(s,r){return (r||document).querySelector(s)}
function params(){return new URLSearchParams(location.search)}
function findItem(slug){return (window.SITE.items||[]).find(function(i){return i.slug===slug})}

/* ---- image viewer: fits the image to the left side, with view switcher ---- */
function initViewer(views){
  var img=$('#vimg'),vbox=$('#views');
  function show(i){img.src=views[i].src;img.alt=views[i].label;
    Array.prototype.forEach.call(vbox.children,function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-pressed',j===i)})}
  if(views.length>1){views.forEach(function(v,i){var b=document.createElement('button');b.className='btn';b.type='button';b.textContent=v.label;b.onclick=function(){show(i)};vbox.appendChild(b)})}
  show(0);
}

/* ---- slide viewers with Back / Next ---- */
function initSlides(){
  Array.prototype.forEach.call(document.querySelectorAll('.slides'),function(box){
    var pre=box.dataset.prefix,n=+box.dataset.count,i=1,img=$('img',box),lab=$('span',box);
    function go(k){i=(k<1)?n:(k>n?1:k);img.src='images/slides/'+pre+'-'+i+'.jpg';lab.textContent='Slide '+i+' of '+n}
    $('.back',box).onclick=function(){go(i-1)};$('.next',box).onclick=function(){go(i+1)};go(1);
  });
}
function printGuide(){Array.prototype.forEach.call(document.querySelectorAll('details'),function(d){d.open=true});setTimeout(function(){window.print()},150)}
window.addEventListener('beforeprint',function(){Array.prototype.forEach.call(document.querySelectorAll('details'),function(d){d.open=true})});
