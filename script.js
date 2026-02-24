// script.js
// Adding double-click toggle functionality to show text instead of images

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card'); // Assuming cards have the class 'card'

    cards.forEach(card => {
        card.addEventListener('dblclick', () => {
            const img = card.querySelector('img'); // Assuming the card contains an image
            const text = card.querySelector('.text'); // Assuming the card contains a text element

            if (img.style.display === 'none') {
                img.style.display = 'block';
                text.style.display = 'none';
            } else {
                img.style.display = 'none';
                text.style.display = 'block';
            }
        });
    });
});