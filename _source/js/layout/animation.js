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

var handleScroll = function (e) {
    var ratio = window.scrollY / window.innerHeight;
    animation_tilte_type.seek(animation_tilte_type.duration * ratio * 2);
    animation_coverage.seek(animation_coverage.duration * ratio);
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

// Move out the navigator when Y is greater than window.innerHeight
// resume it when user scrolling up
var animation_navigator_enter = anime({
    targets: '.navigator',
    translateY: ['-62px', '0px'],
    autoplay: false,
    duration: 200,
    easing: 'easeInOutSine',
});

var animation_navigator_exit = anime({
    targets: '.navigator',
    translateY: ['0px', '-62px'],
    autoplay: false,
    duration: 200,
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

// ------------------------------------------
// show recommend-card articles when hover on

const animation_slidebar_panel_enter_config = {
    duration : 300
}

var animation_slidebar_panel_enter = anime({
    targets: '.panel',
    translateX: ['-277px', '0px'],
    autoplay: false,
    duration: animation_slidebar_panel_enter_config.duration,
    easing: 'easeInOutSine',
});

var animation_slidebar_panel_exit = anime({
    targets: '.panel',
    translateX: ['0px', '-277px'],
    autoplay: false,
    duration: animation_slidebar_panel_enter_config.duration,
    easing: 'easeInOutSine',
});

var animation_slidebar_expand = anime({
    targets: '.slidebar-warp',
    width: ['63px', '340px'],
    autoplay: false,
    duration: animation_slidebar_panel_enter_config.duration,
    easing: 'easeInOutSine',
});

var animation_slidebar_shrink = anime({
    targets: '.slidebar-warp',
    width: ['340px', '63px'],
    autoplay: false,
    duration: animation_slidebar_panel_enter_config.duration,
    easing: 'easeInOutSine',
});

//rotate the slideBarArrow

var animation_slidebar_arrow_rotate_2 = anime({
    targets: '#slideBarArrow',
    rotate: ['180deg', '360deg'],
    autoplay: false,
    duration: animation_slidebar_panel_enter_config.duration,
    easing: 'easeInOutSine',
});

var animation_slidebar_arrow_rotate_1 = anime({
    targets: '#slideBarArrow',
    rotate: ['0deg', '180deg'],
    autoplay: false,
    duration: animation_slidebar_panel_enter_config.duration,
    easing: 'easeInOutSine',
});


var slidebarHidden = false;

//find all .hide-slidebar-button and add the onclick event to activate the animation
var hide_slidebar_buttons = document.querySelectorAll('.hide-slidebar-button');
for (var i = 0; i < hide_slidebar_buttons.length; i++) {
    hide_slidebar_buttons[i].addEventListener('click', function (e) {
        if (slidebarHidden) {
            animation_slidebar_expand.play();
            animation_slidebar_panel_enter.play();
            animation_slidebar_arrow_rotate_2.play();
            
            slidebarHidden = false;
        }
        else {
            animation_slidebar_panel_exit.play();
            animation_slidebar_shrink.play();
            animation_slidebar_arrow_rotate_1.play();
            

            slidebarHidden = true;
        }
    });
}

