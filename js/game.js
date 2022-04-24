import Player from "./player.js"
import InputHandler from './input.js'
import { Background } from "./layer.js"
import Enemy from "./enemy.js"
import Explosion from "./explosion.js"
import { Attack } from "./playerState.js"
export default class Game {
    constructor({width, height, ctx}) {
        this.width = width
        this.height = height
        this.ctx = ctx
        this.speed = 0
        this.maxSpeed = 3
        this.background = new Background(this)
        this.player = new Player(this)
        this.playerDeathCount = 0  
        this.enemies = [new Enemy(this)]
        this.fragsCount = 0
        this.input = new InputHandler()
        this.explosions = []

        this.bgSound = document.querySelector('#bg-sound')
        this.bgSound.loop = true
        this.bgSound.volume = 0.7
        this.bgSound.play()
    }

    checkCollisions(enemy) { 

        if (this.player.checkCollision(enemy)) {
            switch (true) {
                case this.player.currentState instanceof Attack:
                    this.explosions.push(new Explosion(enemy.x, enemy.y))
                    this.enemies.splice(this.enemies.indexOf(enemy), 1)
                    setTimeout(() => this.addEnemy(), 2000)
                    this.fragsCount++
                    break;
                default:
                    this.explosions.push(new Explosion(this.player.x, this.player.y))
                    this.player.reset()
                    this.playerDeathCount++
            }
        }

    }

    addEnemy() {
        this.enemies.push(new Enemy(this))
    }

    update(delta) {
        this.background.update()
        this.player.update(this.input.keys, delta)
        this.enemies.forEach((enemy) => {
            enemy.update(this.input.keys, delta)
            this.checkCollisions(enemy)
        })
        this.explosions.forEach((explosion) => {
            explosion.update(delta)

            if (explosion.frameX === 4) {
                this.explosions.splice(this.explosions.indexOf(explosion), 1)
            }
        })
    }

    draw(delta) {
        this.clear()
        this.update(delta)
        this.background.draw(this.ctx)
        this.drawCount()

        this.player.draw(this.ctx)
        this.enemies.forEach((enemy) => {
            enemy.draw(this.ctx)
        })
        this.explosions.forEach((explosion) => {
            explosion.draw(this.ctx)
        })
    }
    drawCount() {
        this.ctx.font = "30px Arial"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`Frags: ${this.fragsCount}`, 10, 30)
        this.ctx.fillText(`Deaths: ${this.playerDeathCount}`, 10, 60)
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }
}