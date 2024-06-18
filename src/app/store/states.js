import { defineStore } from 'pinia';

export const useStateStore = defineStore({
  id: 'states',
  state: () => ({
    states: [],
    currentState: [],
  }),
  getters: {},
  actions: {

  },
});
