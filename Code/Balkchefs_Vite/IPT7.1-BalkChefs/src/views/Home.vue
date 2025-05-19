<template>
  <div class="bg-gradient-to-r from-orange-200 to-orange-400 min-h-screen p-8">
    <h1 class="underline font-bold text-center text-4xl text-white">{{ $t('home.featured') }}</h1>
    
    <div class="recipes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <router-link v-for="recipe in featuredRecipes" :key="recipe.id" :to="'/recipe/' + recipe.id" class="recipe-card bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition">
        <img :src="recipe.image" alt="Tarif Görseli" class="w-full h-56 object-cover rounded-lg">
        <h2 class="text-xl font-semibold text-gray-700 mt-4">{{ recipe.name }}</h2>
        <p class="text-sm text-gray-600">{{ recipe.description }}</p>
      </router-link>
    </div>

    <h2 class="text-center text-3xl font-semibold text-gray-800 mt-12">{{ $t('home.meat') }}</h2>
    <div class="recipes flex flex-wrap justify-center gap-6 mt-6">
      <router-link v-for="recipe in meatDishes" :key="recipe.id" :to="'/recipe/' + recipe.id" class="recipe-card bg-white p-4 rounded-lg shadow-md hover:scale-105 transition">
        <img :src="recipe.image" alt="Tarif Görseli" class="w-40 h-40 object-cover rounded-lg">
        <h2 class="text-lg font-semibold text-gray-700 mt-2">{{ recipe.name }}</h2>
      </router-link>
    </div>

    <h2 class="text-center text-3xl font-semibold text-gray-800 mt-12">{{ $t('home.vegan') }}</h2>
    <div class="recipes flex flex-wrap justify-center gap-6 mt-6">
      <router-link v-for="recipe in veganDishes" :key="recipe.id" :to="'/recipe/' + recipe.id" class="recipe-card bg-white p-4 rounded-lg shadow-md hover:scale-105 transition">
        <img :src="recipe.image" alt="Tarif Görseli" class="w-40 h-40 object-cover rounded-lg">
        <h2 class="text-lg font-semibold text-gray-700 mt-2">{{ recipe.name }}</h2>
      </router-link>
    </div>

    <h2 class="text-center text-3xl font-semibold text-gray-800 mt-12">{{ $t('home.desserts') }}</h2>
    <div class="recipes flex flex-wrap justify-center gap-6 mt-6">
      <router-link v-for="recipe in desserts" :key="recipe.id" :to="'/recipe/' + recipe.id" class="recipe-card bg-white p-4 rounded-lg shadow-md hover:scale-105 transition">
        <img :src="recipe.image" alt="Tarif Görseli" class="w-40 h-40 object-cover rounded-lg">
        <h2 class="text-lg font-semibold text-gray-700 mt-2">{{ recipe.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredRecipes: [
        { id: 1, name: "Karnıyarık", description: "Lezzetli Türk mutfağı klasiği.", image: "/src/assets/karniyarik.jpg" },
        { id: 2, name: "Tiramisu", description: "İtalyan tatlısı, kahve ve krema ile mükemmel uyum.", image: "/src/assets/tiramisu.jpg" }
      ],
      meatDishes: [
        { id: 3, name: "Adana Kebap", image: "/src/assets/adana.jpg" },
        { id: 4, name: "Etli Güveç", image: "/src/assets/guvec.jpg" }
      ],
      veganDishes: [
        { id: 5, name: "Falafel", image: "/src/assets/falafel.jpg" },
        { id: 6, name: "Vegan Burger", image: "/src/assets/vegan-burger.jpg" }
      ],
      desserts: [
        { id: 7, name: "Baklava", image: "/src/assets/baklava.jpg" },
        { id: 8, name: "Profiterol", image: "/src/assets/profiterol.jpg" }
      ]
    };
  }
};
</script>
