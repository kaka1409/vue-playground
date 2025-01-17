<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="text-center mt-10 flex flex-col justify-center align-center items-center">
    <i class="pi pi-exclamation-triangle text-yellow-400 mb-4 text-6xl"></i>
    <h1 class="text-6xl font-bold m-4">404 Not Found</h1>
    <p class="text-xl">This page does not exist</p>
    <RouterLink
      to="/"
      class="bg-green-600 px-4 py-3 rounded-lg text-white hover:bg-green-900 mt-5"
    >
      Go back
    </RouterLink>
  </section>
</template>
