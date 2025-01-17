<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev'
  },

  subtitle: {
    type: String,
    default: 'Find the Vue job that fits your skills and needs'
  }
})
</script>

<template>
  <section class="bg-green-700 py-29 mb-4">
    <div class="text-white mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          {{title}}
        </h1>
        <p class="my-4 text-xl">
          {{subtitle}}
        </p>
      </div>
    </div>
  </section>
</template>
