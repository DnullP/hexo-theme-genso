var stickyElements = document.querySelectorAll('.left-container');

stickyElement = stickyElements[0]
offsetTop = stickyElement.offsetTop

window.onscroll = function () {
    stickyElements.forEach(function () {
        if (window.scrollY >= offsetTop) {
            stickyElement.classList.add('sticky');
            //添加占位符
            var placeholder = document.createElement('div');
        } else {
            stickyElement.classList.remove('sticky');
        }
    });
};
