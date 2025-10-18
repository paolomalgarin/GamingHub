import Player from '../player.js';

export default class Slime extends Player {
    constructor(opts = {}) {
        super({ ...opts, animationFolder: 'Slime', weight: 80, maxSpeed: 300, accel: 2500 });
    }

    topAttack() {
        this.attack(9, 230, { range: 36, anchor: 'center', width: 80, height: 80, offsetY: 0, offsetX: -33.5 }, .6);
    }
    sweepAttack() {
        this.attack(9, 230, { range: 36, anchor: 'center', width: 80, height: 80, offsetY: 0, offsetX: -33.5 }, .6);
    }
    midAttack() {
        this.attack(9, 230, { range: 36, anchor: 'center', width: 80, height: 80, offsetY: 0, offsetX: -33.5 }, .6);
    }
}