<template>
  <div >
    <div class="rounded-2xl bg-blue-300 px-4 w-1/2 mx-auto py-6 cursor-pointer my-3 text-center hover:bg-blue-400"
         :class="{ highlighted: highlighted }"
         @click="onClick" @dblclick.prevent="onDblClick">
      <h2 class="font-semibold text-green-700">{{ state }}</h2>
      <p class="text-center">Population: {{ population }}</p>
      <p class="text-center">Counties: {{ counties }}</p>
    </div>

    <CountyList v-if="showCounties"
                :state-name="state"
                :state-population="population"
                :api-url="detail"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import CountyList from "./CountyList.vue";

const props = defineProps(['_state', 'highlighted']);
const emits = defineEmits(['click', 'dblclick']);
const {
  state,
  population,
  detail,
  counties
} = props._state;


const showCounties = ref(false);
let clicks = ref(0);
let timer = null;
let selectedState = ref({});

const onClick = () => {
  clicks.value++;
  if (clicks.value === 1) {
    timer = setTimeout(() => {
      showCounties.value = !showCounties.value;
      emits('click', state);
      clicks.value = 0;
    }, 300);
  } else {
    clearTimeout(timer);
    clicks.value = 0;
  }
};

const onDblClick = () => {
  clearTimeout(timer);
  emits('dblclick', state);
  clicks.value = 0;
};
</script>


<style scoped>
.highlighted {
  background-color: #ff89a8;
}
</style>