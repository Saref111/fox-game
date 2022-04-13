export default class Game {
    constructor(width, height, ctx) {
        this.width = width
        this.height = height
        this.ctx = ctx
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(0, 0, this.width, this.height)
        console.log('update');
    }
    draw() {
        this.update()
    }
}