<template>
    <div class="p-4 flex items-center justify-center gap-4 text-xs">
        <button class="game-button" :disabled="game.gameState === GAME_STATE.ONGOING"
                @click="game.startGame">Start</button>
        <button class="game-button" :disabled="game.gameState === GAME_STATE.DEFAULT"
                @click="resetGame">Reset</button>
    </div>
</template>

<script setup lang="ts">
import { useGameManager } from '@snake/composable/GameManager';
const { game, resetGame } = useGameManager();
import { GAME_STATE } from '@snake/models/model';
</script>

<style scoped>
@reference '../styles/style.css';
@reference '../styles/themes.css';

.game-button {
    @apply bg-primary-dark hover:bg-primary hover:text-wall rounded p-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer;
}
</style>