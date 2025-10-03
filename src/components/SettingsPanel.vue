<template>
    <div
         class="p-4 bg-[#242424]/80 shadow fixed top-12 right-4 rounded border flex flex-col gap-4 text-sm backdrop-blur-sm">
        <div class="flex justify-center items-center gap-2">
            <label for="speed-slider">Snake Speed:</label>
            <input step="100" type="range" id="speed-slider" :min="MIN_SLIDER_VALUE" :max="MAX_SLIDER_VALUE"
                   v-model="sliderValue" />
        </div>
        <div class="flex justify-center items-center gap-2">
            <label for="speed-slider">Game Size:</label>
            <input step="1" type="range" id="game-slider" :min="10" :max="50" v-model="sizeValue" />
        </div>
        <button class="setting-button" @click="saveSettings">Save</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGameManager } from '@snake/composable/GameManager';
import { INITIAL_SLIDER_VALUE, MIN_SLIDER_VALUE, MAX_SLIDER_VALUE, INIT_COLS } from '@snake/models/Config';
const { changeConfig } = useGameManager();


function saveSettings(){
    changeConfig(sliderValue.value, Number(sizeValue.value))
}

const sliderValue = ref(INITIAL_SLIDER_VALUE); // Initialize the slider value
const sizeValue = ref(INIT_COLS)
</script>