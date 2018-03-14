/**
 * _Animate.js
 */

import $ from 'jquery';
import {TweenMax, Power2, TimelineLite} from 'gsap';

class Animate {

  constructor() {

    var tl = new TimelineLite();

    tl.fromTo('.green-rect', 1, {x:350}, {x:0})
    .fromTo('.rect-circ', 1, {x:-116}, {x:0})
    .fromTo('.circ-rect', 1, {x:116}, {x:-232}, '-=2')
    .to('.rect-circ', 1, {x:116, width: 174})
    .to('.circ-rect', 1, {x:0}, '-=1.1')
    .fromTo('.grey-rect', 1, {x:350}, {x:0},'-=1.1')
    .fromTo('.half-circle', 1, { rotation: 180, transformOrigin: 'bottom left' }, { rotation: 0, transformOrigin: 'bottom left' })
    .fromTo('.circ', 1, { y: 350 }, { ease: Circ.easeOut, y:0},'-=1.1')
    .to('.green-rect', 1, {y:-116})
    .to('.half-circle', 1, { y: -303, ease: Circ.easeIn}, '-=1')
    .to('.circ', 1, {x:-116})
    .to('.rect-circ', 1, {width: 58}, '-=.75')
    .to('.circ-rect', 1, {x: -116}, '-=1')
    .to('.grey-rect', 1, {x:116})
    .to('.grey-rect', 1, { y: 116, ease: Bounce.easeOut})
    .to('.green-rect', 1, {x:232})
    .to('.circ', 1, { y: 232, ease: Bounce.easeOut}, '-=.75')
    .fromTo('.second-half-circle', 1, { y: -770 }, { y: -535, ease: Bounce.easeOut})
    .to('.second-half-circle', 1, { rotation:20, transformOrigin:'top center' })
    .to('.second-half-circle', 1, { rotation: -20, transformOrigin: 'top center', repeat: 2, yoyo: true }, '-=.5')
    .to('.second-half-circle', 1, { rotation:0, transformOrigin:'top center' })
    .fromTo('.circ-last', .5, { y: -120 }, { y: 1, ease: Power1.easeIn}, '-=4.7')
    .fromTo('.circ-last', 1, { rotation: -20, transformOrigin: 'bottom center', repeat: 5, yoyo: true }, { rotation: 20, transformOrigin: 'bottom center', repeat: 3, yoyo: true, ease: Power1.easeIn }, '-=5')
    .to('.circ-last', 1, { rotation:0, transformOrigin:'bottom center' }, '-=1')

  }

}
new Animate();
