import Player from "./player.js"
import InputHandler from './input.js'
import { Background } from "./layer.js"
export default class Game {
    constructor({width, height, ctx}) {
        this.width = width
        this.height = height
        this.ctx = ctx
        this.speed = 3
        this.background = new Background(this)
        this.player = new Player(this)
        this.input = new InputHandler()
    }

    update(delta) {
        this.background.update()
        this.player.update(this.input.keys, delta)
    }
    draw(delta) {
        this.clear()
        this.update(delta)
        this.background.draw(this.ctx)
        this.player.draw(this.ctx)
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }
}