<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1 class="text-5xl underline text-red">MenuLabs Challenge</h1>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
