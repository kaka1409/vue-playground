<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  job: Object
})

// show truncated description as default
const isFullDescription = ref(false)

// truncate description function
const truncatedDescription = computed(() => {
  let description = props.job.description

  if (!isFullDescription.value) {
    description = description.substring(0, 150) + '...'
  }

  return description
})

// toggle full description function
const toggleFullDesciption = () => {
  isFullDescription.value = !isFullDescription.value
}

</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ truncatedDescription }}
        </div>

        <button
          @click="toggleFullDesciption"
          class="rounded-lg text-green-500 text-center hover:text-green-600"
        >
          {{ isFullDescription ? 'Less' : 'More' }}
        </button>
      </div>

      <div class="text-green-500 mb-2">{{ job.salary }} / Year</div>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-red-700 mb-3">
          <i class="pi pi-map-marker font-bold"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="'/jobs/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
