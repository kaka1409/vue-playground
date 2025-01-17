<script setup>
import Card from './Card.vue';
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
        <Card
          title="For Developers"
          description="Browse our Vue jobs and start your career today"
          destination="/jobs"
          goto="Browse Jobs"
        />
        <Card
          title="For Employers"
          description="List your job to find the perfect developer for the role"
          destination="/jobs/add"
          goto="Add Jobs"
          bg="bg-green-100"
          gotoBg="bg-green-500 hover:bg-green-700"
        />
      </div>
    </div>
  </section>
</template>
