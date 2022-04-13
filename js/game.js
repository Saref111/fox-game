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

    update() {
        this.player.update(this.input.keys)
    }
    draw() {
        this.update()
        this.player.draw(this.ctx)
    }
}