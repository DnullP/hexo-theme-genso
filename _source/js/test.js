const gsap = require('gsap').default;

const wavePath = document.querySelector('.wave-path');

const waveAnimation = gsap.timeline({
    repeat: -1,
    yoyo: true
});

waveAnimation.to(wavePath, {
    attr: {
        d: "M0,50 Q500,0 1000,50 T2000,50 V100 H0 Z"
    },
    duration: 2,
    ease: "sine.inOut"
});
