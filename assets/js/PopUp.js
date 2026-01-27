const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.querySelector('.modal-close-btn');
const modalOverlay = document.getElementById('info-modal');

if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('modal-visible');
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('modal-visible');
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('modal-visible');
        }
    });
}

const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

if (slide && images.length > 0) {
    let currentIndex = 0;
    const totalImages = images.length;

    function showSlide(index) {
        if (index >= totalImages) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalImages - 1;
        } else {
            currentIndex = index;
        }
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
    
    showSlide(0);
}