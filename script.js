// script.js
// Adding double-click toggle functionality to flip between image and text view

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.swiper-slide');

    cards.forEach(card => {
        card.addEventListener('dblclick', () => {
            card.classList.toggle('flipped');
        });
    });
});
