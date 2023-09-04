import { SVG } from '@svgdotjs/svg.js'
import anime from 'animejs/lib/anime.es.js';
var urlLength = urlList.length;

console.log(urlLength);

const direction = {
    left: 0,
    right: 1
}

function addSvg(container, direction) {// create SVG
    const draw = SVG().addTo(container).size(550, 246);
    var image;
    {
        const defs = draw.defs();
        const pattern = defs.pattern(550, 246, function (add) {
            this.attr({
                id: 'pic' + Math.floor(Math.random() * urlLength),
                patternUnits: 'userSpaceOnUse'
            });

            image = add.image(urlList[Math.floor(Math.random() * urlLength)])
                .size(550, 246)
                .attr({
                    x: 0,
                    y: 0,
                    preserveAspectRatio: 'xMidYMid slice'
                });

        });

        if (direction == 1) {
            draw.path('M550 246H6.10352e-05V0H412.902L550 246Z')
                .fill(`url(#${pattern.attr('id')})`)
                .attr({
                    'fill-rule': 'evenodd',
                    'clip-rule': 'evenodd'
                });

        }
        else if (direction == 0) {
            draw.path('M0 246H550V0L137.098 4.43878e-06L0 246Z')
                .fill(`url(#${pattern.attr('id')})`)
                .attr({
                    'fill-rule': 'evenodd',
                    'clip-rule': 'evenodd'
                });
        }
    }
    return image;
}

var containerList = document.querySelectorAll('.img-container');

containerList.forEach(function (container, index) {
    var image;
    var card = container.parentNode.parentNode;
    //fixed structure should be promised to be the same

    if (index % 2 == 0) {
        image = addSvg(container, direction.left);
    }
    else {
        image = addSvg(container, direction.right);

    }
    card.addEventListener('mouseenter', function () {
        anime({
            targets: image.node,
            width: 600,
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });

    card.addEventListener('mouseleave', function () {
        anime({
            targets: image.node,
            width: 550,
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });

});