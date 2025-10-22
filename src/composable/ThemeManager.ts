import { createSharedComposable } from "@vueuse/core";
import { ref } from "vue"

export const THEMES = {
    'DEFAULT': 'default',
    'ORANGE': 'orange',
    'GREYSCALE': 'greyscale'
} as const


export type Theme = typeof THEMES[keyof typeof THEMES];

function internalThemeManager() {

    const theme = ref<Theme>(THEMES.DEFAULT)

    function changeTheme(t: Theme) {
        theme.value = t
    }

    return {
        theme,
        changeTheme
    }
}

export default createSharedComposable(internalThemeManager)
