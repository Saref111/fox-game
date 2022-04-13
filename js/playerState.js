import {
        PlayerStateEnum as StateEnum, 
        Keys, 
        SpritePositions, 
        PlayerCharsEnum as Chars,
        SpriteFramesCount,
    } from "./constants.js"

class State {
    constructor(state) {
        this.state = state
    }
}

export class Sitting extends State {
    constructor(player) {
        super(StateEnum.SITTING)
        this.player = player
    }

    enter() {
        this.player.frameY = SpritePositions.SITTING
        this.player.maxFrame = SpriteFramesCount.SITTING
    }

    handleInput(keys) {
        if (keys.has(Keys.LEFT) || keys.has(Keys.RIGHT)) {
            this.player.setState(StateEnum.RUNNING)
        }
    }
}

export class Running extends State {
    constructor(player) {
        super(StateEnum.RUNNING)
        this.player = player
    }

    enter() {
        this.player.frameY = SpritePositions.RUNNING
        this.player.maxFrame = SpriteFramesCount.RUNNING
    }

    handleInput(keys) {
        if (keys.has(Keys.DOWN)) {
            this.player.setState(StateEnum.SITTING)
        } else if (keys.has(Keys.UP)) {
            this.player.setState(StateEnum.JUMPING)
        }
    }
}

export class Jumping extends State {
    constructor(player) {
        super(StateEnum.JUMPING)
        this.player = player
    }

    enter() {
        if (this.player.isOnTheGround()) {
            this.player.velocity = -this.player.maxSpeed * Chars.JUMP_MULTIPLIER
        }
        this.player.frameY = SpritePositions.JUMPING
        this.player.maxFrame = SpriteFramesCount.JUMPING
    }

    handleInput(keys) {
        if (this.player.velocity > this.player.weight) {
            this.player.setState(StateEnum.FALLING)
        }
    }
}

export class Falling extends State {
    constructor(player) {
        super(StateEnum.FALLING)
        this.player = player
    }

    enter() {
        this.player.frameY = SpritePositions.FALLING
        this.player.maxFrame = SpriteFramesCount.FALLING
    }

    handleInput(keys) {
        if (this.player.isOnTheGround()) {
            this.player.setState(StateEnum.RUNNING)
        }
    }
}