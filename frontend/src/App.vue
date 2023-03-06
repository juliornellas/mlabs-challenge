<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="px-9 py-4">
    <header class="pb-4">
      <div class="text-center text-2xl">MenuLabs Challenge</div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped></style>
