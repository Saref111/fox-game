import { PlayerCharsEnum as Chars } from './constants.js'
import { Keys } from './constants.js'

export default class Player {
    constructor(game) {
        this.game = game
        this.width = Chars.WIDTH
        this.height = Chars.HEIGHT
        this.x = Chars.BASE_X_POSITION
        this.y = this.game.height - this.height
        this.image = document.getElementById(Chars.IMAGE_ID)
        this.speed = 0
        this.velocity = 0
        this.maxSpeed = Chars.MAX_SPEED
    }

    setSpeedByKeys(keys) {
        if (keys.has(Keys.LEFT)) {
            this.speed = -this.maxSpeed
        } else if (keys.has(Keys.RIGHT)) {
            this.speed = this.maxSpeed
        } else {
            this.speed = 0
        }
    }

    setVelocityByKeys(keys) {
        if (keys.has(Keys.UP) && this.isOnTheGround()) {
            this.velocity = -this.maxSpeed
        } else if (keys.has(Keys.DOWN)) {
            this.velocity = this.maxSpeed
        } else {
            // this.velocity = 0
        }
    }

    amendPosition() {
        if (this.x < 0) {
            this.x = 0
        } else if (this.x + this.width > this.game.width) {
            this.x = this.game.width - this.width
        } else if (this.y < 0) {
            this.y = 0
        } else if (this.y + this.height > this.game.height) {
            this.y = this.game.height - this.height
        }
    }

    isOnTheGround() {
        return this.y + this.height >= this.game.height
    }

    update(keys) {
        this.x += this.speed
        this.setSpeedByKeys(keys)

        this.y += this.velocity
        this.setVelocityByKeys(keys)

        this.amendPosition()
    }

    draw(context) {
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}
