import { PlayerCharsEnum as Chars } from './constants.js'
import { Keys } from './constants.js'

export default class Player {
    constructor(game) {
        this.game = game
        this.width = Chars.WIDTH
        this.height = Chars.HEIGHT
        this.x = Chars.BASE_X_POSITION
        this.y = Chars.BASE_Y_POSITION
        this.image = document.getElementById(Chars.IMAGE_ID)
    }

    update(keys) {
        if (keys.has(Keys.LEFT)) {
            this.x -= 10
        }
        if (keys.has(Keys.RIGHT)) {
            this.x += 10
        }
        if (keys.has(Keys.UP)) {
            this.y -= 10
        }
        if (keys.has(Keys.DOWN)) {
            this.y += 10
        }
    }

    draw(context) {
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}
