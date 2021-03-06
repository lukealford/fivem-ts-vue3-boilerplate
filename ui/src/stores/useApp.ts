import { defineStore } from "pinia";

// useApp could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useApp = defineStore('app', {
  state: () => ({
    visbile: false,
  }),
  getters: {
    // automatically infers the return type
    visibleState(state) {
      return state.visbile
    },
    
  },
})
