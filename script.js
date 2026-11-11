// MacBernard Soft Solutions
(function(){
  var nav=document.querySelector('.nav');
  var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>10);};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  var toggle=document.getElementById('navToggle');
  var links=document.getElementById('navLinks');
  toggle.addEventListener('click',function(){
    var open=links.classList.toggle('open');
    toggle.classList.toggle('open',open);
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  links.addEventListener('click',function(e){
    if(e.target.tagName==='A'){links.classList.remove('open');toggle.classList.remove('open');}
  });

  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
    });
  },{threshold:0.12});
  document.querySelectorAll('.section .wrap > *, .step, .service-card, .value-item, .machub-wrap > *').forEach(function(el,i){
    el.classList.add('reveal');
    el.style.transitionDelay=(Math.min(i%6,5)*60)+'ms';
    io.observe(el);
  });

  document.getElementById('year').textContent=new Date().getFullYear();
})();
