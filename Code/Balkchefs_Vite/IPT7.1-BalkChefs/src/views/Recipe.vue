<template>
    <head>
    <link href="/src/style.css" rel="stylesheet">
  </head>
  <div :class="bgColor" class="min-h-screen p-8 flex justify-center items-center">
    <div class="max-w-4xl bg-white p-6 rounded-lg shadow-lg">
      <img :src="image" alt="Tarif Görseli" class="w-full h-96 object-cover rounded-lg shadow-md">

      <h1 class="text-4xl font-bold text-gray-800 mt-6">{{ recipe.name }}</h1>
      <p class="text-lg text-gray-700 mt-4">{{ recipe.description }}</p>

      <h2 class="text-2xl font-semibold text-gray-800 mt-6 border-b-2 border-gray-400 pb-2">{{ $t('ingredients') }}</h2>
      <ul class="list-disc list-inside text-gray-700 mt-2 space-y-1">
        <li v-for="(item, index) in recipe.ingredients" :key="index">{{ item }}</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-800 mt-6 border-b-2 border-gray-400 pb-2">{{ $t('instructions') }}</h2>
      <ol class="list-decimal list-inside text-gray-700 mt-2 space-y-2">
        <li v-for="(step, index) in recipe.instructions" :key="index">{{ step }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const { t, locale } = useI18n();

    const id = Number(route.params.id);
    const recipeKey = {
      1: 'karniyarik',
      2: 'tiramisu'
      // Diğerleri eklenebilir
    }[id];

    const recipe = computed(() => t(`recipes.${recipeKey}`, {}, { clone: true }));

    const imageMap = {
      karniyarik: '/src/assets/karniyarik.jpg',
      tiramisu: '/src/assets/tiramisu.jpg'
    };

    const bgColorMap = {
      karniyarik: 'bg-gradient-to-r from-red-100 to-red-300',
      tiramisu: 'bg-gradient-to-r from-yellow-100 to-yellow-300'
    };

    return {
      recipe,
      image: imageMap[recipeKey],
      bgColor: bgColorMap[recipeKey]
    };
  }
};
</script>
