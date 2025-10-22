<template>
   <div class="flex">
     <div class="mb-2">
        <div>Score: {{ game.score }}</div>
    </div>
   </div>
</template>

<script setup lang="ts">
import { useGameManager } from '@snake/composable/GameManager';
import { GAME_STATE } from '@snake/models/model';
const { game, resetGame } = useGameManager();
</script>