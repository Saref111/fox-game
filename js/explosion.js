import { AssetsIds, FPS } from "./constants.js"

export default class Explosion {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 200
        this.height = 179
        this.image = document.getElementById(AssetsIds.EXPLOSION)
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 5
        this.frameCount = 0
        this.frameTimer = 0
        this.frameInterval = 1000 / FPS
        this.direction = 0
        this.state = null
        this.states = {}
        this.sizeMultiplier = 1
    }
}