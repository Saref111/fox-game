import { 
    PlayerCharsEnum as Chars, 
    PlayerStateEnum as StateEnum, 
    SpriteFramesCount, 
    FPS
} from './constants.js'
import states from './playerState.js'
import { Keys } from './constants.js'

export default class Player {
    constructor(game) {
        this.game = game
        this.width = Chars.WIDTH
        this.height = Chars.HEIGHT
        this.x = Chars.BASE_X_POSITION
        this.y = this.game.height - this.height - Chars.BASE_Y_POSITION
        this.image = document.getElementById(Chars.IMAGE_ID)
        this.weight = Chars.WEIGHT
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = SpriteFramesCount.FALLING
        this.fps = FPS
        this.frameInterval = 1000 / this.fps
        this.frameTimer = 0 
        this.speed = 0
        this.velocity = 0
        this.maxSpeed = Chars.MAX_SPEED
        this.states = states.map((It) => new It(this))
        this.setState(StateEnum.SITTING, 0)
    }

    toggleFrame() { 
        if (this.frameX < this.maxFrame) {
            this.frameX++
        } else {
            this.frameX = 0
        }
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

    setState(state, speed) {
        this.currentState = this.states[state]
        this.game.speed = this.game.maxSpeed * speed
        this.currentState.enter()
    }

    update(keys, delta) {
        this.currentState.handleInput(keys)

        this.moveX(keys)
        this.moveY(keys)
        this.amendPosition()

        if (this.frameTimer > this.frameInterval) {            
            this.frameTimer = 0
            this.toggleFrame()
        } else {
            this.frameTimer += delta    
        }
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
        } else if (this.y + this.height > this.game.height - Chars.BASE_Y_POSITION) {
            this.y = this.game.height - this.height - Chars.BASE_Y_POSITION
        }
    }

    isOnTheGround() {
        return this.y + this.height >= this.game.height - Chars.BASE_Y_POSITION
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
