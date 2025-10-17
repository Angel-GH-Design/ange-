
// Remove loader after fade
window.addEventListener('load', () => {
  document.body.classList.remove('page-enter');
});

// IntersectionObserver for fades
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
},{threshold:0.15});
document.querySelectorAll('.fade-in,.slide-up,.float-up,.reveal').forEach(el=>io.observe(el));

// Back to top
const topBtn = document.getElementById('backToTop');
if (topBtn){
  window.addEventListener('scroll', ()=> topBtn.style.display = window.scrollY>400?'grid':'none');
  topBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
}

// Homepage music + slideshow
const bgm = document.getElementById('bgm');
const toggle = document.getElementById('musicToggle');
if (bgm && toggle){
  toggle.addEventListener('click', ()=>{
    if (bgm.muted){ bgm.muted=false; bgm.play(); toggle.textContent='🔇 Music Off'; }
    else { bgm.muted=true; toggle.textContent='🔈 Music On'; }
  });
  bgm.play().catch(()=>{}); // polite muted autoplay
}

const slides = document.querySelectorAll('.slide');
if (slides.length){
  let i=0;
  function show(){ slides.forEach(s=>s.classList.remove('active')); slides[i].classList.add('active'); i=(i+1)%slides.length; }
  show();
  setInterval(show, 5000);
}

// Contact demo
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Thank you! Your message has been noted. We will get back to you shortly. 💖');
    form.reset();
  });
}
