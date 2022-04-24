import Game from './game.js'
import { CanvasCharsEnum } from './constants.js'
import { animate } from './helpers.js'

const canvas = document.getElementById('canvas_1')
const ctx = canvas.getContext('2d')
const alertContainer = document.querySelector('p.alert')

const init = () => {
    alertContainer.remove()

    canvas.width = CanvasCharsEnum.WIDTH
    canvas.height = CanvasCharsEnum.HEIGHT

    const game = new Game({
        width: canvas.width, 
        height: canvas.height, 
        ctx,
    })

    animate(game)

    document.removeEventListener('click', init)
}

window.addEventListener('load', () => {
    alertContainer.textContent = 'Loaded, tap to start'
    document.addEventListener('click', init)
    
})