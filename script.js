document.addEventListener('DOMContentLoaded', () => {
    // Current year for footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar scroll effect
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Simple reveal animation on scroll for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Initial state
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Reveal observer
    const revealOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Remove transition to allow hover effects to work properly after reveal
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }, 600);
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    serviceCards.forEach(card => {
        revealOnScroll.observe(card);
    });
});
