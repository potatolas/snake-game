<template>
    <div class="p-4 flex items-center justify-center gap-4 text-xs">
        <button class="game-button p-1" :disabled="game.gameState === GAME_STATE.ONGOING"
                @click="game.startGame">Start</button>
        <button class="game-button p-1" :disabled="game.gameState === GAME_STATE.DEFAULT"
                @click="resetGame">Reset</button>
    </div>
</template>

<script setup lang="ts">
import { useGameManager } from '@snake/composable/GameManager';
const { game, resetGame } = useGameManager();
import { GAME_STATE } from '@snake/models/model';
</script>