function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAlphaFromRGBA(rgbaString) {
    const match = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)/);
    return (match && match[4]) ? parseFloat(match[4]) : 1;
}

function getRandomColorWithAlpha(element) {
    const originalAlpha = getAlphaFromRGBA(window.getComputedStyle(element).backgroundColor);
    const r = getRandomInt(200, 255);
    const g = getRandomInt(200, 255);
    const b = getRandomInt(200, 255);
    return `rgba(${r}, ${g}, ${b}, ${originalAlpha})`;
}

window.addEventListener("DOMContentLoaded", (event) => {
    const elements = document.querySelectorAll('.random-color');

    elements.forEach((element) => {
        const randomColor = getRandomColorWithAlpha(element);
        element.style.backgroundColor = randomColor;
    });
});
