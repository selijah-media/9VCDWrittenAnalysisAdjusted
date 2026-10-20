
(function(){var it=findItem(params().get('item'));
 if(!it){location.replace('index.html');return}
 document.title=it.name+' – '+document.title;$('#iname').textContent=it.name;
 initViewer(it.views);initSlides();
 $('#print').onclick=printGuide;
 var f=document.querySelector('details');if(f)f.open=false;})();
