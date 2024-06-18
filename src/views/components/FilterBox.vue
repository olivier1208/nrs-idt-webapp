<template>
  <div class="relative w-1/2 mx-auto mt-6 mb-8">
    <input type="text" v-model="filter"
           class="shadow border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full text-center"
           placeholder="Filter states on the left side 😉">
    <button v-if="filter" @click="filter = ''" class="absolute inset-y-0 right-0 pr-3 flex items-center">
      <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const filter = ref('');
const emit = defineEmits(['filter']);

watchEffect(() => {
  emit('filter', filter.value);
});
</script>