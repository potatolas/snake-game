<template>
    <div class="absolute top-4 right-4 flex flex-col gap-2 text-white">
        <slot></slot>
        <div class="flex justify-end">
            <button @click="toggleSettings" class="setting-button text-xs cursor-pointer">
                Settings
            </button>
        </div>
        <div class="flex p-4 bg-wall/40 shadow rounded border border-primary flex-col gap-4 text-sm backdrop-blur-sm"
             v-if="showSettings">
            <div class="flex justify-start items-center gap-2">
                <label for="speed-slider">Snake Speed:</label>
                <input class="grow" step="100" type="range" id="speed-slider" :min="MIN_SLIDER_VALUE"
                       :max="MAX_SLIDER_VALUE" v-model="sliderValue" />
            </div>
            <div class="flex justify-start items-center gap-2">
                <label for="speed-slider">Game Size:</label>
                <input class="grow" step="1" type="range" id="game-slider" :min="10" :max="50" v-model="sizeValue" />
            </div>
            <div class="flex flex-col justify-start items-start gap-1">
                <label>Theme:</label>
                <div class="flex flex-col w-full gap-1">
                    <div class="flex h-8 rounded overflow-hidden border-gray-600 border cursor-pointer relative"
                         v-for="t of Object.values(THEMES)" :data-theme="t" @click="chooseTheme(t)">
                        <div v-if="selectedTheme === t"
                             class="absolute w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                            <span class="text-sm">Selected</span>
                        </div>
                        <div class="bg-primary grow"></div>
                        <div class="bg-primary-dark grow"></div>
                        <div class="bg-secondary grow"></div>
                        <div class="bg-accent grow"></div>
                    </div>
                </div>
            </div>
            <button class="setting-button text-xs" @click="saveSettings">Save</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGameManager } from '@snake/composable/GameManager';
import { INITIAL_SLIDER_VALUE, MIN_SLIDER_VALUE, MAX_SLIDER_VALUE, INIT_COLS } from '@snake/models/Config';
import themeManager, { THEMES, type Theme } from '@snake/composable/ThemeManager'

const { changeConfig } = useGameManager();
const { changeTheme, selectedTheme } = themeManager();

const showSettings = ref(false)

function toggleSettings() {
    showSettings.value = !showSettings.value
}


function saveSettings() {
    changeConfig(sliderValue.value, Number(sizeValue.value))

    // add transition when changing theme color
    const gameLayout = document.getElementById('snake-game-layout')
    gameLayout?.classList.add('color-transition-parent');
    setTimeout(() => {
        gameLayout?.classList.remove('color-transition-parent');
    }, 300);
    changeTheme(selectedTheme.value)
}


function chooseTheme(t: Theme) {
    selectedTheme.value = t
}

const sliderValue = ref(INITIAL_SLIDER_VALUE); // Initialize the slider value
const sizeValue = ref(INIT_COLS)
</script>

<style scoped>
@reference '../styles/style.css';
@reference '../styles/themes.css';

button {
    cursor: pointer;
}

.setting-button {
    @apply bg-primary-dark hover:bg-primary hover:text-wall rounded p-1 disabled:pointer-events-none disabled:opacity-50;
}

input[type="range"] {
    appearance: none;
    height: 0.5rem;
    background-color: var(--color-primary-dark);
    border-radius: 9999px;
}

input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 1rem;
    height: 1rem;
    background-color: var(--color-primary);
    border-radius: 100%;
    cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: var(--color-primary);
    border-radius: 100%;
    cursor: pointer;
}
</style>