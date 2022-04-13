import { PlayerStateEnum as StateEnum, Keys, SpritePositions } from "./constants.js"

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
    }

    handleInput(keys) {
        if (keys.has(Keys.DOWN)) {
            this.player.setState(StateEnum.SITTING)
        }
    }
}