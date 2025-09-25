
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (btn) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
