import { PlayerCharsEnum as Chars } from './constants.js'

export default class Player {
    constructor(game) {
        this.game = game
        this.width = Chars.WIDTH
        this.height = Chars.HEIGHT
        this.x = Chars.BASE_X_POSITION
        this.y = Chars.BASE_Y_POSITION
        this.image = document.getElementById(Chars.IMAGE_ID)
    }

    update() {
    }

    draw(context) {
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
        this.update()
    }
}
