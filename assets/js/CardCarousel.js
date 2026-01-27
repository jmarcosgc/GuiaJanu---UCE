document.addEventListener("DOMContentLoaded", () => {

    const allCarousels = document.querySelectorAll(".card-image-carousel");

    if (allCarousels.length === 0) {
        console.warn("Nenhum container de carrossel (.card-image-carousel) foi encontrado.");
        return;
    }

    allCarousels.forEach(container => {
        buildCarousel(container);
    });
});

function buildCarousel(container) {
    
    let imageNames;
    try {
        imageNames = JSON.parse(container.dataset.images);
    } catch (e) {
        console.error("Erro ao ler data-images. É um JSON válido?", container.dataset.images);
        imageNames = [];
    }
    
    const imagePath = container.dataset.path || "";
    const SLIDE_DURATION = 3500 + Math.random() * 1000;

    if (imageNames.length === 0) {
        container.innerHTML = '<p style="color:white;text-align:center;padding-top:50%;">Sem imagens</p>';
        return;
    }

    let currentIndex = 0;
    
    container.innerHTML = "";

    const viewport = document.createElement("div");
    viewport.className = "card-carousel-viewport";

    const track = document.createElement("div");
    track.className = "card-carousel-track";
    track.style.width = `${100 * imageNames.length}%`;

    imageNames.forEach(name => {
        const img = document.createElement("img");
        img.className = "card-carousel-image";
        img.src = imagePath + name;
        img.alt = name.split('.')[0];
        track.appendChild(img);
    });

    viewport.appendChild(track);
    container.appendChild(viewport);
    
    function goToSlide(index) {
        if (index >= imageNames.length) {
            index = 0;
        }
        
        currentIndex = index;
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    if (imageNames.length > 1) {
        setInterval(nextSlide, SLIDE_DURATION);
    }
    
    goToSlide(0);
}