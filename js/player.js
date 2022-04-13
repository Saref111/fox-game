import {PlayerCharsEnum} from './constants.js';

class Player {
    constructor(game) {
        this.game = game
        this.width = PlayerCharsEnum.WIDTH
        this.height = PlayerCharsEnum.HEIGHT
    }
}