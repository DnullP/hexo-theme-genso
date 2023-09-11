function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const r = getRandomInt(200, 255);
    const g = getRandomInt(200, 255);
    const b = getRandomInt(200, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

window.addEventListener("DOMContentLoaded", (event) => {
    const elements = document.querySelectorAll('.random-color');

    elements.forEach((element) => {
        const randomColor = getRandomColor();
        element.style.backgroundColor = randomColor;
    });
});