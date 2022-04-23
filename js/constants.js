
export const CanvasCharsEnum = {
    WIDTH: 500,
    HEIGHT: 500,
}

export const PlayerCharsEnum = { 
    WIDTH: 100,
    HEIGHT: 91.3,
    BASE_X_POSITION: 0,
    BASE_Y_POSITION: 84,
    IMAGE_ID: 'player',
    MAX_SPEED: 10,
    OFFSET: 7,
    WEIGHT: 1,
    JUMP_MULTIPLIER: 2.3,
}

export const AssetsIds = {
    BOTTOM: 'layer-5',
    CLOUDS: 'layer-3',
    BUILDINGS: 'layer-4',
    SKYSCRAPERS: 'layer-2',
    BACKGROUND: 'layer-1',
    ENEMY: 'enemy',
}

export const Keys = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    SPACE: 'Space',
}

export const PlayerStateEnum = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
    FALLING: 3,
    ATTACK: 4,
}

export const SpritePositions = { 
    SITTING: 5,
    RUNNING: 3,
    JUMPING: 1,
    FALLING: 2,
    ATTACK: 6,
}

export const SpriteFramesCount = {
    SITTING: 4,
    RUNNING: 8,
    JUMPING: 6,
    FALLING: 6,
    ATTACK: 6
}

export const FPS = 24