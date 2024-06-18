import { computed, ref } from 'vue';

export default function usePagination({ data, perPage = 10 }) {
  let page = ref(1);

  const paginatedData = computed(() =>
    data.slice((page.value - 1) * perPage, page.value * perPage),
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(data.length / perPage)) {
      page.value += 1;
    }
  };

  const previousPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage: number) => {
    page.value = numPage;
  };

  const lastPage = Math.ceil(data.length / perPage);

  return {
    data,
    paginatedData,
    perPage,
    page,
    nextPage,
    previousPage,
    lastPage,
    goToPage,
  };
}
