let lastTime = 0
export function animate (game, time = 0) {
    const deltaTime = time - lastTime
    lastTime = time
    game.draw(deltaTime)
    requestAnimationFrame((time) => animate(game, time))
}