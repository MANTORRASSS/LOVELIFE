document.querySelectorAll('.photo-grid img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('enlarged');
    });
});