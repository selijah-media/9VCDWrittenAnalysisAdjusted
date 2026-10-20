
(function(){var c=$('#carousel');window.SITE.items.forEach(function(it){
  var a=document.createElement('article');a.className='card';
  a.innerHTML='<div class="im"><img alt=""></div><h2></h2><a class="btn"></a>';
  $('img',a).src=it.views[0].src;$('img',a).alt=it.name+' \u2013 '+it.views[0].label;
  $('h2',a).textContent=it.name;var b=$('a',a);b.href='item.html?item='+encodeURIComponent(it.slug);b.textContent='Select this item';
  b.setAttribute('aria-label','Select this item: '+it.name);c.appendChild(a)});
  var L=$('#prev'),R=$('#next');
  function step(){var card=$('.card',c);return card?(card.offsetWidth+22)*2:400}
  function upd(){L.disabled=c.scrollLeft<=8;R.disabled=c.scrollLeft+c.clientWidth>=c.scrollWidth-2}
  L.onclick=function(){c.scrollBy({left:-step(),behavior:'smooth'})};R.onclick=function(){c.scrollBy({left:step(),behavior:'smooth'})};
  c.addEventListener('scroll',upd);window.addEventListener('resize',upd);upd();
  c.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){R.click()}else if(e.key==='ArrowLeft'){L.click()}});})();
