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
        this.player.frameX = 0
        this.player.maxFrame = SpriteFramesCount.SITTING
        this.player.frameY = SpritePositions.SITTING
    }

    handleInput(keys) {
        if (keys.has(Keys.LEFT) || keys.has(Keys.RIGHT)) {
            this.player.setState(StateEnum.RUNNING, 1)
        }
    }
}

export class Running extends State {
    constructor(player) {
        super(StateEnum.RUNNING)
        this.player = player
    }

    enter() {
        this.player.frameX = 0
        this.player.maxFrame = SpriteFramesCount.RUNNING
        this.player.frameY = SpritePositions.RUNNING
    }

    handleInput(keys) {
        if (keys.has(Keys.DOWN)) {
            this.player.setState(StateEnum.SITTING, 0)
        } else if (keys.has(Keys.UP)) {
            this.player.setState(StateEnum.JUMPING, 2)
        }
    }
}

export class Jumping extends State {
    constructor(player) {
        super(StateEnum.JUMPING)
        this.player = player
    }

    enter() {
        this.player.frameX = 0
        this.player.maxFrame = SpriteFramesCount.JUMPING
        this.player.frameY = SpritePositions.JUMPING

        if (this.player.isOnTheGround()) {
            this.player.velocity = -this.player.maxSpeed * Chars.JUMP_MULTIPLIER
        }
    }

    handleInput(keys) {
        if (this.player.velocity > this.player.weight) {
            this.player.setState(StateEnum.FALLING, 2)
        } else if (keys.has(Keys.DOWN)) {
            this.player.setState(StateEnum.ATTACK, 4)
        }
    }
}

export class Falling extends State {
    constructor(player) {
        super(StateEnum.FALLING)
        this.player = player
    }

    enter() {
        this.player.frameX = 0
        this.player.maxFrame = SpriteFramesCount.FALLING
        this.player.frameY = SpritePositions.FALLING
    }

    handleInput(keys) {
        if (this.player.isOnTheGround()) {
            this.player.setState(StateEnum.RUNNING, 1)
        }else if (keys.has(Keys.DOWN)) {
            this.player.setState(StateEnum.ATTACK, 2)
        }
    }
}

export class Attack extends State {
    constructor(player) {
        super(StateEnum.ATTACK)
        this.player = player
    }

    enter() {
        this.player.frameX = 0
        this.player.maxFrame = SpriteFramesCount.ATTACK
        this.player.frameY = SpritePositions.ATTACK
    }

    handleInput(keys) {
        if (this.player.isOnTheGround()) {
            this.player.setState(StateEnum.RUNNING, 1)
        }
    }
}

export default [Sitting, Running, Jumping, Falling, Attack]