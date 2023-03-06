<script>
import UsersTable from "@/components/UsersTable.vue";
import { useUsersStore } from "@/stores/users";

export default {
  components: {
    UsersTable,
  },

  setup() {
    const store = useUsersStore();

    const users = store.usersWeather;

    return {
      users,
    };
  },
};
</script>
<template>
  <UsersTable :users="users"></UsersTable>
</template>
