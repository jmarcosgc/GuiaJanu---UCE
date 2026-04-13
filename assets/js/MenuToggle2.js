document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        const fecharMenuEResetar = () => {
            mainNav.classList.remove('nav-active'); // Fecha a tela preta

            const submenus = mainNav.querySelectorAll('.dropdown-menu');
            submenus.forEach(submenu => {
                submenu.classList.remove('mostrar-mobile');
            });
        };

        menuToggle.addEventListener('click', () => {
            mainNav.classList.add('nav-active');
        });

        if (menuClose) {
            menuClose.addEventListener('click', fecharMenuEResetar);
        }

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {

                // 1. REGRA EXCLUSIVA PARA CELULAR
                if (link.classList.contains('dropdown-toggle') && window.innerWidth <= 991) {
                    e.preventDefault();
                    e.stopPropagation();

                    const submenu = link.nextElementSibling;
                    if (submenu) {
                        submenu.classList.toggle('mostrar-mobile');
                    }
                    return;
                }

                // 2. SE FOR NO COMPUTADOR
                if (link.classList.contains('dropdown-toggle') && window.innerWidth > 991) {
                    return;
                }

                // 3. LINKS NORMAIS (Fecha tudo e reseta)
                setTimeout(() => {
                    fecharMenuEResetar();
                }, 100);
            });
        });

        // Fecha ao clicar na área preta vazia (fora dos links)
        mainNav.addEventListener('click', (e) => {
            if (e.target === mainNav) {
                fecharMenuEResetar();
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

    const MUTE_ICON_SRC = './assets/img/Social Icons/sem_som.png';
    const UNMUTE_ICON_SRC = './assets/img/Social Icons/com_som.png';

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

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const footer = document.querySelector('.content-wrapper');

    if (header && footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    header.classList.add('header-hidden');
                } else {
                    header.classList.remove('header-hidden');
                }
            });
        }, {
            root: null,
            threshold: 0.15
        });

        observer.observe(footer);
    }
});