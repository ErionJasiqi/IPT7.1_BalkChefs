<template>
  <div class="p-8">
    <input v-model="query" placeholder="Tarif ara..." class="border p-2 rounded w-full" />
    <div v-if="filteredRecipes.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <router-link v-for="recipe in filteredRecipes" :key="recipe.id" :to="'/recipe/' + recipe.id"
        class="p-4 bg-white shadow rounded">
        <h2 class="text-xl font-bold">{{ recipe.name }}</h2>
        <p>{{ recipe.description }}</p>
      </router-link>
    </div>
    <p v-else class="mt-4">Eşleşen tarif bulunamadı.</p>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';

export default {
  setup() {
    const query = ref('');
    const { tm } = useI18n();
    const recipes = tm('recipes');

    const recipeList = Object.entries(recipes).map(([key, val], index) => ({
      id: index + 1,
      ...val
    }));

    const filteredRecipes = computed(() =>
      recipeList.filter(r =>
        r.name.toLowerCase().includes(query.value.toLowerCase()) ||
        r.description.toLowerCase().includes(query.value.toLowerCase())
      )
    );

    return { query, filteredRecipes };
  }
};
</script>
