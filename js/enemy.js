import { AssetsIds, FPS } from "./constants.js"
import { PlayerCharsEnum as Chars } from "./constants.js"
import { getRandomNumber } from "./helpers.js"

export default class Enemy {
    constructor(game) {
        this.game = game
        this.x = getRandomNumber(this.game.width  - Chars.WIDTH)
        this.y = getRandomNumber(this.game.height / 2 - Chars.WIDTH)
        this.width = 293 
        this.height = 155
        this.speed = getRandomNumber(2, -2)
        while (this.speed === 0) {
            this.speed = getRandomNumber(2, -2)
        }
        this.image = document.getElementById(AssetsIds.ENEMY)
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 5
        this.sizeMultiplier = getRandomNumber(9, 2) / 10
        this.frameCount = 0
        this.frameTimer = 0
        this.frameInterval = 1000 / FPS
        this.direction = 0
        this.state = null
        this.states = {}
        this.flapSpeed = getRandomNumber(4, 1)
        this.amendPosition()

        console.log(this);
    }

    toggleFrame() { 
        if (this.frameX < this.maxFrame) {
            this.frameX++
        } else {
            this.frameX = 0
        }
    }

    amendPosition() {
        if (this.x < 0) {
            this.x = 0
        } 

        if (this.x + this.width > this.game.width) {
            this.x = this.game.width - this.width
        } 

        if (this.y < 0) {
            this.y = 0
        } 

        if (this.y + this.height > this.game.height) {
            this.y = this.game.height - this.height
        }
    }

    isOutOfBounds() {
        return this.x + this.width < 0 || this.x > this.game.width || this.y + this.height < 0 || this.y > this.game.height
    }
    update(keys, delta) {
        this.x += this.speed 
        this.y += this.speed
        
        if (this.isOutOfBounds()) {
            this.speed *= -1
        }


        if (this.frameTimer > this.frameInterval * this.flapSpeed) {            
            this.frameTimer = 0
            this.toggleFrame()
            
        } else {
            this.frameTimer +=  delta   
        }
    }
    
    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.frameX * this.width, 
            this.frameY * this.height, 
            this.width , 
            this.height, 
            this.x, 
            this.y, 
            this.width * this.sizeMultiplier, 
            this.height * this.sizeMultiplier
        );
    }
} 