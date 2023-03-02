<template>
  <UsersTable :users="users"></UsersTable>
</template>
<script>
import UsersTable from "@/components/UsersTable.vue";
import { useUsersStore } from "@/stores/users";

export default {
  components: {
    UsersTable,
  },

  setup() {
    const data = useUsersStore();

    const users = data.users;

    return {
      users,
    };
  },
};
</script>
