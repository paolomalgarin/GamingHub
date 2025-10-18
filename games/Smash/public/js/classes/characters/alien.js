import Player from '../player.js';

export default class Alien extends Player {
    constructor(opts = {}) {
        super({ ...opts, animationFolder: 'Alien', maxSpeed: 450 });
    }

    topAttack() {
        this.attack(7, 80, { range: 40, anchor: 'top', width: 44, height: 36, offsetY: -20, offsetX: 0 }, .4);
        this.jumpsRemaining++;
        this.jump();
        this.jumpsRemaining--;
        this.stunTillGnd = true;  //lo stunna finche non tocca terra
    }
    sweepAttack() {
        this.attack(8, 180, { range: 36, anchor: 'bottom', width: 56, height: 28, offsetY: 15, offsetX: 0 }, .5);
    }
    midAttack() {
        this.attack(5, 100, { range: 48, anchor: 'center' }, .3);
    }
}