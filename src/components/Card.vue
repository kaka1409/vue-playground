<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: ''
  },

  description: {
    type: String,
    default: ''
  },

  destination: {
    type: String,
    default: ''
  },

  goto: {
    type: String,
    default: ''
  },

  bg: {
    type: String,
    default: 'bg-gray-100'
  },

  gotoBg: {
    type: String,
    default: 'bg-black hover:bg-gray-700'
  }

})
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <h2 class="text-2xl font-bold">
      {{ title }}
    </h2>
    <p class="mt-2 mb-4">
      {{ description }}
    </p>
    <RouterLink
      :to="destination"
      :class="`inline-block text-white py-2 px-4 rounded-lg ${gotoBg}`"
    >
      {{ goto }}
    </RouterLink>
  </div>
</template>
