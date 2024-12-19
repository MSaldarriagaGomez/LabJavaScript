
function applyRandomColor(element) {
    element.style.color = getRandomColor();
}

const h5Elements = document.querySelectorAll('h5');

h5Elements.forEach(h5 => {
    h5.addEventListener('click', () => {
        applyRandomColor(h5);
    });
});