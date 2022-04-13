import Player from "./player.js"
import InputHandler from './input.js'
export default class Game {
    constructor({width, height, ctx}) {
        this.width = width
        this.height = height
        this.ctx = ctx
        this.player = new Player(this)
        this.input = new InputHandler()
    }

    update(delta) {
        this.player.update(this.input.keys, delta)
    }
    draw(delta) {
        this.clear()
        this.update(delta)
        this.player.draw(this.ctx)
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }
}