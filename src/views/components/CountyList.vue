<template>
  <div v-if="loading" class="absolute inset-0 bg-white opacity-50 flex items-center justify-center">
    <div class="loader"></div>
  </div>
  <div v-else>
    <div class="text-center my-4 bg-emerald-500 text-white py-2 rounded-2xl w-1/2 mx-auto">
      <h1>Comparison</h1>
      <h2><strong>Total County Population:</strong> {{ totalCountyPopulation }}</h2>
      <h2><strong>State Population: </strong>{{ statePopulation }}</h2>
      <h2><strong>Total Counties : </strong>{{ counties.length }}</h2>
      <hr class="w-3/4 mx-auto my-3">
      <h4 class="text-center">Is population value matching between stale and db ?
        <span class="flex justify-center" v-if="totalCountyPopulation === statePopulation">
          <CheckCircle2/>
        </span>
        <span class="flex justify-center text-red-700" v-else>
          <XCircle/>
        </span>
      </h4>
    </div>
    <div v-for="county in counties" :key="county.name"
         class="py-6 cursor-pointer hover:bg-pink-400 border-b border-gray-200 text-center bg-pink-300 w-1/2 mx-auto rounded-2xl my-3">
      <h3>{{ county.name }}</h3>
      <p>Population: {{ county.population }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { XCircle, CheckCircle2 } from "lucide-vue-next";

const props = defineProps(['stateName', 'statePopulation', 'apiUrl']);
const counties = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_API_URL}${ props.apiUrl }`);
    counties.value = data.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});

const totalCountyPopulation = computed(() => {
  return counties.value.reduce((total, county) => total + county.population, 0);
});
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>