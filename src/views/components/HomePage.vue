<template>
  <div class="container">
    <FilterBox @filter="onFilter"/>
    <div class="flex h-screen overflow-auto w-full">
      <StateList :states="filteredStates"
                 :highlightedStates="highlightedStates"
                 @click="onClick"
                 @dblclick="onDblClick"
                 class="w-1/2"/>

      <StateList :states="states"
                 :highlightedStates="highlightedStates"
                 @click="onClick"
                 @dblclick="onDblClick"
                 class="w-1/2"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import StateList from './StateList.vue';
import FilterBox from './FilterBox.vue';
import axios from "axios";
import { useStateStore } from "@/app/store/states.js";

const stateStore = useStateStore()
const highlightedStates = ref([]);

const states = ref([]);
const filter = ref('');

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:8023/api/v1/states/stale');
    stateStore.states = data.data
    states.value = data.data;
  } catch (error) {
    console.error(error);
  }
});

const filteredStates = computed(() => states.value
    .filter(state => {
      if (!filter.value) {
        return true;
      }
      return state.state.toLowerCase().includes(filter.value.toLowerCase());
    })
);

const onClick = (name) => {
  // handle click event
};

const onDblClick = (name) => {
  const index = highlightedStates.value.indexOf(name);
  if (index === -1) {
    highlightedStates.value.push(name);
  } else {
    highlightedStates.value.splice(index, 1);
  }
};

const onFilter = (newFilter) => {
  filter.value = newFilter;

};
</script>

<style>
.heading {
  text-align: center;
  margin-top: 50px;
}

.heading h1 {
  font-size: 40px;
  margin-bottom: 10px;
}

.heading h4 {
  font-size: 20px;
  color: #888;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.list-group-wrapper {
  margin-top: 50px;
}

.list-group {
  margin-top: 20px;
}

.list-group-item {
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.list-group-item:last-child {
  border-bottom: none;
}

.list-group-item h4 {
  margin: 0;
}

.list-group-item p {
  margin: 0;
  color: #888;
}

.loading {
  text-align: center;
  margin-top: 20px;
}

.loading img {
  width: 50px;
}
</style>