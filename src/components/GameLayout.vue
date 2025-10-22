<template>
    <section :data-theme="theme" id="snake-game-layout">
        <div class="flex justify-center p-4">
            <GameInfoDisplay></GameInfoDisplay>
        </div>

        <div class="flex flex-col items-center justify-center">
            <GameControls></GameControls>
            <Game></Game>
        </div>

        <GameDpad></GameDpad>

        <SettingsPanel>
            <slot name="settings"></slot>
        </SettingsPanel>
    </section>
</template>

<script lang="ts">
</script>

<script setup lang="ts">
import SettingsPanel from './SettingsPanel.vue';
import GameInfoDisplay from './GameInfoDisplay.vue';
import GameControls from './GameControls.vue';
import Game from './Game.vue'
import GameDpad from './GameDpad.vue'

import themeManager from '@snake/composable/ThemeManager'

const { theme } = themeManager()

</script>
