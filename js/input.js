import { Keys } from "./constants.js"

export default class InputHandler {
    constructor() {
        this.keys = new Set()
        window.addEventListener('keydown', this.keydownHandler.bind(this))
        window.addEventListener('keyup', this.keyupHandler.bind(this))
    }

    keydownHandler(e) {
        if (e.key === Keys.LEFT) {
            this.keys.add(Keys.LEFT)
        }
    }
    
    keyupHandler(e) {
        if (e.key === Keys.LEFT) {
            this.keys.delete(Keys.LEFT)
        }
    }
}