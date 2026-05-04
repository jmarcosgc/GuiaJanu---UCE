document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let current = 0;

  function atualizarCarrossel() {
    slides.forEach(slide => {
      slide.classList.remove('center', 'left', 'right', 'hidden');
    });

    dots.forEach(dot => dot.classList.remove('active'));

    const total = slides.length;
    if (total === 0) return;

    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;

    slides[current].classList.add('center');
    slides[prev].classList.add('left');
    slides[next].classList.add('right');

    if (dots[current]) {
      dots[current].classList.add('active');
    }

    slides.forEach((slide, i) => {
      if (i !== current && i !== prev && i !== next) {
        slide.classList.add('hidden');
      }
    });
  }

  if (nextBtn && prevBtn && slides.length > 0) {
    nextBtn.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      atualizarCarrossel();
    });

    prevBtn.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      atualizarCarrossel();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        current = i;
        atualizarCarrossel();
      });
    });

    atualizarCarrossel();
  }
});