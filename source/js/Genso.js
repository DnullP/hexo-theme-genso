var stickyElements = document.querySelectorAll('.left-container');
var contentElement = document.querySelector('.right-container');

stickyElement = stickyElements[0]
offsetTop = stickyElement.offsetTop

window.onscroll = function () {
    stickyElements.forEach(function () {
        if (window.scrollY >= offsetTop) {
            stickyElement.classList.add('sticky');
            contentElement.style.marginLeft = stickyElement.offsetWidth + 70 + 'px';
            console.log("sticky");
        } else {
            stickyElement.classList.remove('sticky');
            contentElement.style.marginLeft = '0px';
            console.log("not sticky");
        }
    });
};
