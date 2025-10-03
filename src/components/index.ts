// src/components/index.ts
import GameLayout from './GameLayout.vue'

export { GameLayout };
export default {
  install(app: any) {
    app.component('GameLayout', GameLayout);
  }
}