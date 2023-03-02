import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useUsersStore = defineStore("users", () => {
  const data = ref([]);
  const users = computed(() => data);

  async function getUsers() {
    const url = "http://localhost:8001/";
    const apiResponse = await fetch(url);
    const res = await apiResponse.json();
    data.value = res.users;
  }

  getUsers();

  return {
    users,
  };
});
