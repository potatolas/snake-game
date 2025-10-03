<template>
    <div class="flex" v-for="(_, r) of game.grid.rows">
        <div v-for="(_, c) of game.grid.cols" class="h-4 w-4" :class="getCellClass(r, c)">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGameManager } from '@snake/composable/GameManager';
import { computed } from 'vue';
const { game } = useGameManager();
import { CELL_TYPE, Direction } from '@snake/models/model';

const snakeHead = computed(() => {
    return game.value.snake.positions?.[0] || null
})

function getCellClass(r: number, c: number) {
    const cellType = game.value.grid.getCellType(r, c)
    const res: string[] = []
    if (snakeHead.value.x === c && snakeHead.value.y === r) {
        res.push('border-blue-800')
        switch (game.value.snake.direction) {
            case Direction.Up:
                res.push('border-t-2')
                break;
            case Direction.Down:
                res.push('border-b-2')
                break;
            case Direction.Left:
                res.push('border-l-2')
                break;
            case Direction.Right:
                res.push('border-r-2')
                break;
        }
    }
    switch (cellType) {
        case CELL_TYPE.EMPTY:
            return [...res, "bg-blue-50"]
        case CELL_TYPE.SNAKE:
            return [...res, "bg-blue-400"]
        case CELL_TYPE.WALL:
            return [...res, "bg-gray-800"]
        case CELL_TYPE.ITEM:
            return [...res, "bg-pink-300"]
    }
}
</script>