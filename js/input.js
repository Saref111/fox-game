import { Keys } from "./constants.js"

export default class InputHandler {
    constructor() {
        this.keys = new Set()

        window.addEventListener('keydown', this.keydownHandler.bind(this))
        window.addEventListener('keyup', this.keyupHandler.bind(this))
    }

    keydownHandler(e) {
        if (this.isControlKeyPressed(e.key)) {
            this.keys.add(e.key)
        }
        console.log(this.keys);
    }
    
    keyupHandler(e) {
        if (this.isControlKeyPressed(e.key)) {
            this.keys.delete(e.key)
        }
    }

    isControlKeyPressed(key) {
        return key === Keys.LEFT || 
                key === Keys.RIGHT || 
                key === Keys.UP || 
                key === Keys.DOWN
    }
}