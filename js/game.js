import Player from "./player.js"
export default class Game {
    constructor({width, height, ctx}) {
        this.width = width
        this.height = height
        this.ctx = ctx
        this.player = new Player(this)
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(0, 0, this.width, this.height)
    }
    draw() {
        this.player.draw(this.ctx)
    }
}