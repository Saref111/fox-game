import { AssetsIds, FPS } from "./constants.js"

export default class Explosion {
    constructor(x, y, sizeMultiplier = 1) {
        this.x = x
        this.y = y
        this.width = 200
        this.height = 179
        this.image = document.getElementById(AssetsIds.EXPLOSION)
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 4
        this.frameCount = 0
        this.frameTimer = 0
        this.frameInterval = 1000 / FPS
        this.direction = 0
        this.state = null
        this.states = {}
        this.sizeMultiplier = sizeMultiplier
    }

    toggleFrame() {
        if (this.frameX < this.maxFrame) {
            this.frameX++
        } else {
            this.frameX = 0
        }
    }

    update(delta) {
        this.frameTimer += delta
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0
            this.toggleFrame()
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width * this.sizeMultiplier,
            this.height * this.sizeMultiplier
        )
    }
}