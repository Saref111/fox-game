export function animate (game) {
    game.draw()
    requestAnimationFrame(() => animate(game))
}