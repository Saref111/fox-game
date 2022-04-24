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
        this.frameTimer = 0
        this.frameInterval = 1000 / FPS
        this.state = null
        this.states = {}
        this.sizeMultiplier = sizeMultiplier
        this.angle = Math.random() * 6.2
        this.sound = new Audio()
        this.sound.src = '../assets/boom.wav'
    }

    toggleFrame() {
        if (this.frameX < this.maxFrame) {
            this.frameX++
        } else {
            this.frameX = 0
        }
    }

    update(delta) {
        if (this.frameX === 0) {
            this.sound.play()
        }

        this.frameTimer += delta
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0
            this.toggleFrame()
        }
    }

    draw(ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            0 - this.width / 2 * this.sizeMultiplier,
            0 - this.height / 2 * this.sizeMultiplier,
            this.width * this.sizeMultiplier,
            this.height * this.sizeMultiplier
        )
        ctx.restore()
    }
}