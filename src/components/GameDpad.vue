<template>
    <div class="flex flex-col items-center justify-center gap-1 mt-4 text-xl"
         :class="{ 'opacity-20': game.gameState === GAME_STATE.DEFAULT, 'pointer-events-none': game.gameState === GAME_STATE.DEFAULT }">
        <div class="flex">
            <button :disabled="game.snake.direction === Direction.Up" @click="game.changeSnakeDirection(Direction.Up)"
                    class="game-control-button flex justify-center items-center w-14 h-14">↑</button>
        </div>
        <div class="flex gap-1">
            <button :disabled="game.snake.direction === Direction.Left"
                    @click="game.changeSnakeDirection(Direction.Left)"
                    class="game-control-button flex justify-center items-center w-14 h-14">←</button>
            <button :disabled="game.snake.direction === Direction.Down"
                    @click="game.changeSnakeDirection(Direction.Down)"
                    class="game-control-button flex justify-center items-center w-14 h-14">↓</button>
            <button :disabled="game.snake.direction === Direction.Right"
                    @click="game.changeSnakeDirection(Direction.Right)"
                    class="game-control-button flex justify-center items-center w-14 h-14">→</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGameManager } from '@snake/composable/GameManager';
const { game, handleKeyDown } = useGameManager();
import { GAME_STATE, Direction } from '@snake/models/model';
import { debounce } from 'lodash';
import { onMounted, onUnmounted } from 'vue';

const debounceHandleKeyDown = debounce(handleKeyDown, 100)

onMounted(() => {
    game.value.generateRandomFruit()
    window.addEventListener('keydown', debounceHandleKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', debounceHandleKeyDown)
})
</script>

<style scoped>
@reference '../styles/style.css';
@reference '../styles/themes.css';

.game-control-button {
    @apply bg-primary-dark hover:bg-primary hover:text-wall rounded p-1 disabled:pointer-events-none disabled:opacity-60 border-wall border cursor-pointer;
}

</style>