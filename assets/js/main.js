(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-navlinks]');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
