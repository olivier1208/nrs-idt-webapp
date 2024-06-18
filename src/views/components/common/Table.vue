<template>
  <div class="result" v-for="comment in comments" :key="comment.id">
    <div>{{ comment.email }}</div>
    <div>{{ comment.id }}</div>
  </div>

  <InfiniteLoading @infinite="load"/>
  <!--  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">-->
  <!--    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">-->
  <!--      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">-->
  <!--      <tr>-->
  <!--&lt;!&ndash;        <th scope="col" class="p-4">&ndash;&gt;-->
  <!--&lt;!&ndash;          <div class="flex items-center">&ndash;&gt;-->
  <!--&lt;!&ndash;            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">&ndash;&gt;-->
  <!--&lt;!&ndash;            <label for="checkbox-all-search" class="sr-only">checkbox</label>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--&lt;!&ndash;        </th>&ndash;&gt;-->
  <!--        <th scope="col" class="px-6 py-3">-->
  <!--          Product name-->
  <!--        </th>-->
  <!--        <th scope="col" class="px-6 py-3">-->
  <!--          Color-->
  <!--        </th>-->
  <!--        <th scope="col" class="px-6 py-3">-->
  <!--          Category-->
  <!--        </th>-->
  <!--        <th scope="col" class="px-6 py-3">-->
  <!--          Accessories-->
  <!--        </th>-->
  <!--      </tr>-->
  <!--      </thead>-->
  <!--      <tbody>-->

  <!--      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" v-for="item in myData" :key="item.id">-->
  <!--&lt;!&ndash;        <td class="w-4 p-4">&ndash;&gt;-->
  <!--&lt;!&ndash;          <div class="flex items-center">&ndash;&gt;-->
  <!--&lt;!&ndash;            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">&ndash;&gt;-->
  <!--&lt;!&ndash;            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--&lt;!&ndash;        </td>&ndash;&gt;-->
  <!--        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">-->
  <!--          {{ item.name }}-->
  <!--        </th>-->
  <!--        <td class="px-6 py-4 text-gray-500 whitespace-nowrap dark:text-gray-400">-->
  <!--          {{ item.price }}-->
  <!--        </td>-->
  <!--        <td class="px-6 py-4 text-gray-500 whitespace-nowrap dark:text-gray-400">-->
  <!--          {{ item.quantity }}-->
  <!--        </td>-->
  <!--        <td class="px-6 py-4 text-gray-500 whitespace-nowrap dark:text-gray-400">-->
  <!--          {{ item.total }}-->
  <!--        </td>-->
  <!--      </tr>-->
  <!--      </tbody>-->
  <!--    </table>-->
  <!--  </div>-->

</template>
<script setup>
import { ref } from "vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

let comments = ref([]);
let page = 1;
const load = async $state => {
  console.log("loading...");

  try {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10&_page=" + page
    );
    const json = await response.json();
    if (json.length < 10) $state.complete();
    else {
      comments.value.push(...json);
      $state.loaded();
    }
    page++;
  } catch (error) {
    $state.error();
  }
};
</script>

<style scoped>
.result {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 300;
  width: 400px;
  padding: 10px;
  text-align: center;
  margin: 0 auto 10px auto;
  background: #eceef0;
  border-radius: 10px;
}
</style>