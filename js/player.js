import {PlayerCharsEnum} from './constants.js';

export default class Player {
    constructor(game) {
        this.game = game
        this.width = PlayerCharsEnum.WIDTH
        this.height = PlayerCharsEnum.HEIGHT
        this.x = PlayerCharsEnum.BASE_X_POSITION
        this.y = PlayerCharsEnum.BASE_Y_POSITION
    }

    update() {

    }

    draw(context) {
        context.fillStyle = '#000'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}
