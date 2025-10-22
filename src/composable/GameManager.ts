import { Direction, Game, GAME_STATE } from '@snake/models/model';
import { getInitConfig, calculateInterval, type GameConfig } from '@snake/models/Config';
import { ref } from 'vue';
import { createSharedComposable } from '@vueuse/core'

const useGameManagerInternal = () => {

    const currentConfig = ref<GameConfig>(getInitConfig())
    const game = ref<Game>(new Game(currentConfig.value))

    function changeConfig(input: number, size: number){
        const newInterval = calculateInterval(input)
        currentConfig.value.interval = newInterval
        currentConfig.value.cols = size
        currentConfig.value.rows = size
        resetGame()
    }

    function resetGame(){
        clearInterval(game.value.intervalId)
        game.value = new Game(currentConfig.value)
        game.value.generateRandomFruit()
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (game.value.gameState !== GAME_STATE.ONGOING) { return; }
        switch (event.key) {
            case 'ArrowUp':
                game.value.changeSnakeDirection(Direction.Up)
                break
            case 'ArrowDown':
                game.value.changeSnakeDirection(Direction.Down)
                break
            case 'ArrowLeft':
                game.value.changeSnakeDirection(Direction.Left)
                break
            case 'ArrowRight':
                game.value.changeSnakeDirection(Direction.Right)
                break
        }
    }

    return {
        currentConfig,
        game,
        handleKeyDown,
        changeConfig,
        resetGame
    }
}

export const useGameManager = createSharedComposable(useGameManagerInternal)


