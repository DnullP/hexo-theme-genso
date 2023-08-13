import 'animate.css';
import anime from 'animejs/lib/anime.es.js';
import Typed from 'typed.js';

function throttle(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = null;
                func.apply(context, args);
            }, wait);
        }
    };
}


// Typed text
const typed = new Typed('#background-coverage-text', {
    strings: ['<i>Welcome</i> to Dnull_P\'s Blog.', '&amp; A a technology sharing blog.'],
    typeSpeed: 50,
});

// Scroll the white background when scrolling
var animation_coverage = anime({
    targets: '.background-coverage',
    height: ['38.2%', '100%'],
    delay: function (el, i) { return i * 100; },
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false
});

window.addEventListener('scroll', function (e) {
    var ratio = window.scrollY / window.innerHeight;
    animation_coverage.seek(animation_coverage.duration * ratio);
});

// Move out the title when scrolling
var animation_tilte_type = anime({
    targets: ['.background-coverage-text', '.title-text'],
    opacity: [1, 0],
    translateY: ['0px', '-50px'],
    delay: function (el, i) { return i * 100; },
    elasticity: 200,
    easing: 'easeInOutSine',
    autoplay: false
});

window.addEventListener('scroll', function (e) {
    var ratio = window.scrollY / window.innerHeight;
    animation_tilte_type.seek(animation_tilte_type.duration * ratio * 2);
});

// Move out the navigator when Y is greater than window.innerHeight
// resume it when user scrolling up
var animation_navigator_enter = anime({
    targets: '.navigator',
    translateY: ['-100px', '0px'],
    autoplay: false,
    easing: 'easeInOutSine',
});

var animation_navigator_exit = anime({
    targets: '.navigator',
    translateY: ['0px', '-100px'],
    autoplay: false,
    easing: 'easeInOutSine',
});


var lastScrollY = 3;
var naviIsHidden = false;

window.addEventListener('scroll', throttle(function (e) {
    var currentScrollY = window.scrollY;

    console.log(currentScrollY, window.innerHeight);

    if (currentScrollY > window.innerHeight) {
        if (currentScrollY > lastScrollY && !naviIsHidden) {
            animation_navigator_exit.play();
            naviIsHidden = true;
        }
        else if (currentScrollY < lastScrollY && naviIsHidden) {
            animation_navigator_enter.play();
            naviIsHidden = false;
        }
    } else if (naviIsHidden) {
        animation_navigator_enter.play();
        naviIsHidden = false;
    }
    lastScrollY = currentScrollY;
}, 200));