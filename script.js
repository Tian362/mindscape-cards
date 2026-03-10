// script.js
// Adding double-click toggle functionality to flip between image and text view
// Supports both desktop double-click and mobile double-tap

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.swiper-slide');

    cards.forEach(card => {
        let lastTap = 0;

        // Desktop double-click support
        card.addEventListener('dblclick', () => {
            card.classList.toggle('flipped');
        });

        // Mobile double-tap support
        card.addEventListener('touchend', (e) => {
            e.preventDefault();
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;

            if (tapLength < 300 && tapLength > 0) {
                card.classList.toggle('flipped');
            }
            lastTap = currentTime;
        });
    });
});
