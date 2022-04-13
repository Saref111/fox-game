import { PlayerCharsEnum as Chars, PlayerStateEnum as StateEnum } from './constants.js'
import { Sitting, Running, Jumping, Falling } from './playerState.js'
import { Keys } from './constants.js'

export default class Player {
    constructor(game) {
        this.game = game
        this.width = Chars.WIDTH
        this.height = Chars.HEIGHT
        this.x = Chars.BASE_X_POSITION
        this.y = this.game.height - this.height
        this.image = document.getElementById(Chars.IMAGE_ID)
        this.weight = Chars.WEIGHT
        this.frameX = 0
        this.frameY = 0
        this.speed = 0
        this.velocity = 0
        this.maxSpeed = Chars.MAX_SPEED
        this.states = [new Sitting(this), new Running(this), new Jumping(this), new Falling(this)]
        this.setState(StateEnum.RUNNING)
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

    setState(state) {
        this.currentState = this.states[state]
        this.currentState.enter()
    }

    update(keys) {
        this.currentState.handleInput(keys)

        this.moveX(keys)
        this.moveY(keys)
        this.amendPosition()
    }

    draw(context) {
        context.drawImage(
            this.image, 
            this.frameX * this.width, 
            this.frameY * this.height, 
            this.width, 
            this.height, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        )
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

    moveY(keys) {
        const onGround = this.isOnTheGround()
        
        this.y += this.velocity
        if (!onGround) {
            this.velocity += this.weight
        } else if (this.velocity > 0) {
            this.velocity = 0
        }
    }

    moveX(keys) {
        this.x += this.speed
        this.setSpeedByKeys(keys)
    }  
}
