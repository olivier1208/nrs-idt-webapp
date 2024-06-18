<template>
  <div>
    <State
        v-for="state in props.states"
        :key="state.state"
        :_state="state"
        :highlighted="highlightedStates.includes(state.state)"
        @dblclick="onDblClick"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import State from './State.vue';

const props = defineProps(['states', 'highlightedStates']);
const emits = defineEmits(['click', 'dblclick']);

const onDblClick = (name) => {
  emits('dblclick', name)
};
</script>