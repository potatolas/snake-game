<template>
    <section class="theme-default">
        <div class="flex justify-center p-4">
            <GameInfoDisplay></GameInfoDisplay>
        </div>

        <div class="flex flex-col items-center justify-center">
            <GameControls></GameControls>
            <Game></Game>
        </div>

        <GameDpad></GameDpad>

        <button @click="toggleSettings" class="fixed top-4 right-4 setting-button">
            Settings
        </button>

        <SettingsPanel v-if="showSettings"></SettingsPanel>
    </section>
</template>

<script lang="ts">
</script>

<script setup lang="ts">
import { ref } from 'vue';
import SettingsPanel from './SettingsPanel.vue';
import GameInfoDisplay from './GameInfoDisplay.vue';
import GameControls from './GameControls.vue';
import Game from './Game.vue'
import GameDpad from './GameDpad.vue'
import { themeManager } from '@snake/composable/ThemeManager';

const showSettings = ref(false)

const { getTheme } = themeManager()

function toggleSettings() {
    showSettings.value = !showSettings.value
}

</script>
