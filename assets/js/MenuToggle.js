document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.add('nav-active');
        });
        
        if (menuClose) {
             menuClose.addEventListener('click', () => {
                mainNav.classList.remove('nav-active');
            });
        }
        
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    mainNav.classList.remove('nav-active');
                }, 100); 
            });
        });
        
        mainNav.addEventListener('click', (e) => {
            if (e.target === mainNav) {
                mainNav.classList.remove('nav-active');
            }
        });
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-transition-stopper');
        }, 400); 
    });

    const video = document.getElementById('hero-video');
    const volumeToggle = document.getElementById('volume-toggle');
    const volumeIcon = document.getElementById('volume-icon');
    const volumeSlider = document.getElementById('volume-slider');

    const MUTE_ICON_SRC = '/assets/img/Social Icons/volume-mute.png';
    const UNMUTE_ICON_SRC = '/assets/img/Social Icons/volume-up.png';
    
    const TARGET_VOLUME = 0.20;

    if (video && volumeToggle && volumeIcon && volumeSlider) {
        
        video.muted = true;
        video.volume = 0;
        volumeSlider.value = 0;
        
        let fadeInterval;

        function syncVolumeState() {
            if (video.muted || video.volume <= 0.01) { 
                volumeIcon.src = MUTE_ICON_SRC;
                volumeIcon.alt = 'Mudo';
                volumeSlider.value = 0;
                video.muted = true;
                video.volume = 0; 
            } else {
                volumeIcon.src = UNMUTE_ICON_SRC;
                volumeIcon.alt = 'Som Ativado';
                video.muted = false;
            }
        }

        volumeSlider.addEventListener('input', () => {
            clearInterval(fadeInterval);

            video.volume = volumeSlider.value;

            if (video.volume > 0) {
                video.muted = false;
            }
            
            syncVolumeState();
        });

        volumeToggle.addEventListener('click', () => {
            clearInterval(fadeInterval);

            if (video.muted || video.volume <= 0.01) {
                video.muted = false;
                video.volume = TARGET_VOLUME;
                volumeSlider.value = TARGET_VOLUME;
            } else {
                video.muted = true;
                video.volume = 0;
                volumeSlider.value = 0;
            }
            syncVolumeState();
        });
        
        syncVolumeState();
    }
});