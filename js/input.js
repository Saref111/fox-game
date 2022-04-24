import { Keys } from "./constants.js"

const buttons = document.querySelectorAll("button")

export default class InputHandler {
    constructor() {
        this.keys = new Set()

        window.addEventListener('keydown', this.keydownHandler.bind(this))
        window.addEventListener('keyup', this.keyupHandler.bind(this))

        buttons.forEach((button) => {
            button.addEventListener('mousedown', this.keydownHandler.bind(this))
            button.addEventListener('mouseup', this.keyupHandler.bind(this))
            button.addEventListener('touchstart', this.keydownHandler.bind(this))
            button.addEventListener('touchend', this.keyupHandler.bind(this))
        })
    }

    addKey(e) {
        if (e.key) {
            this.keys.add(e.key)
        } else {
            this.keys.add(e.target.id)
        }
    }
    
    removeKey(e) {
        if (e.key) {
            this.keys.delete(e.key)
        } else {
            this.keys.delete(e.target.id)
        }
    }

    keydownHandler(e) {
        if (this.isControlKeyPressed(e)) {
            this.addKey(e)
        }
    }
    
    keyupHandler(e) {
        if (this.isControlKeyPressed(e)) {
            this.removeKey(e)
        }
    }

    isControlKeyPressed(e) {
        return e.key === Keys.LEFT || 
                e.key === Keys.RIGHT || 
                e.key === Keys.UP || 
                e.key === Keys.DOWN ||
                e.key === Keys.SPACE || 
                e.target.id === Keys.UP ||
                e.target.id === Keys.DOWN ||
                e.target.id === Keys.LEFT ||
                e.target.id === Keys.RIGHT
    }
}