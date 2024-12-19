
function getRandomColor() {
    const colors = ['green', 'blue', 'red'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function applyRandomColor(element) {
    element.style.color = getRandomColor();
}

const h5Elements = document.querySelectorAll('h5');

h5Elements.forEach(h5 => {
    h5.addEventListener('click', () => {
        applyRandomColor(h5);
    });
});
