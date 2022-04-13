import Game from './game.js'
import { CanvasCharsEnum } from './constants.js'
import { animate } from './helpers.js'

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas_1')
    const ctx = canvas.getContext('2d')
    canvas.width = CanvasCharsEnum.WIDTH
    canvas.height = CanvasCharsEnum.HEIGHT

    const game = new Game({
        width: canvas.width, 
        height: canvas.height, 
        ctx,
    })

    animate(game)
    
})