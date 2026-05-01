document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper for Hero
    const heroSwiper = new Swiper('.hero-background-slider', {
        effect: 'fade',
        autoplay: { delay: 5000 },
        loop: true
    });

    // Chameleon Nav Logic
    const nav = document.getElementById('mainNav');
    const banner = document.getElementById('promoBanner');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            // If banner is closed, nav stays at top 0 via CSS
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Close Banner Adjustment
    window.closeBanner = function () {
        banner.style.display = 'none';
        nav.style.top = '0';
    };
});