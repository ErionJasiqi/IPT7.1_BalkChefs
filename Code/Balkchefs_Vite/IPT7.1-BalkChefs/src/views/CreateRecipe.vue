<template>
  <div class="max-w-xl mx-auto py-10">
    <h2 class="text-2xl font-bold mb-6">Submit Your Recipe</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input type="text" v-model="title" placeholder="Recipe Title" class="w-full border rounded p-2" />
      <textarea v-model="description" placeholder="Description" class="w-full border rounded p-2"></textarea>
      <input type="file" @change="handleImageUpload" />
      <div v-for="(ingredient, index) in ingredients" :key="index" class="flex gap-2">
        <input v-model="ingredients[index]" placeholder="Ingredient" class="flex-1 border rounded p-2" />
        <button @click.prevent="removeIngredient(index)" class="text-red-600">x</button>
      </div>
      <button @click.prevent="addIngredient" class="text-blue-600">+ Add Ingredient</button>
      <button type="submit" class="bg-black text-white px-4 py-2 rounded">Submit Recipe</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const ingredients = ref([''])
const image = ref(null)

const addIngredient = () => ingredients.value.push('')
const removeIngredient = (i) => ingredients.value.splice(i, 1)
const handleImageUpload = (e) => image.value = e.target.files[0]

const handleSubmit = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) return alert('Please log in.')

  console.log({
    title: title.value,
    description: description.value,
    ingredients: ingredients.value,
    image: image.value
  })
}
</script>
