var stickyElements = document.querySelectorAll('.left-container');
var contentElement = document.querySelector('.right-container');

stickyElement = stickyElements[0]
offsetTop = stickyElement.offsetTop

//如果右半部分的高度小于整个页面的高度
if (contentElement.offsetHeight < document.body.offsetHeight) {
    contentElement.style.height = document.body.offsetHeight - stickyElement.offsetHeight + 'px';
}

window.onscroll = function () {


    if (window.scrollY >= offsetTop) {
        stickyElement.classList.add('sticky');
        contentElement.style.marginLeft = stickyElement.offsetWidth + 70 + 'px';
        console.log("sticky");
    } else {
        stickyElement.classList.remove('sticky');
        contentElement.style.marginLeft = '0px';
        console.log("not sticky");
    }
};
