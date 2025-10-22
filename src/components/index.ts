// src/components/index.ts
import GameLayout from './GameLayout.vue'
import '@snake/styles/themes.css'

export { GameLayout };
export default {
  install(app: any) {
    app.component('GameLayout', GameLayout);
  }
}