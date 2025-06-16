<template>
  <div class="max-w-3xl mx-auto py-10 space-y-6">
    <h2 class="text-2xl font-bold">My Account</h2>
    <div class="border p-4 rounded">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>

    <router-link to="/create-recipe" class="inline-block mt-4 bg-black text-white px-4 py-2 rounded">
      + Create New Recipe
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const user = computed(() => JSON.parse(localStorage.getItem('user')))
</script>
