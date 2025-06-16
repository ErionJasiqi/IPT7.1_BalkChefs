<template>
  <div class="bg-gradient-to-r from-orange-200 to-orange-400 min-h-screen p-8">
    <h1 class="underline font-bold text-center text-4xl text-white">{{ $t('home.featured') }}</h1>

    <div class="recipes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <router-link
        v-for="recipe in featuredRecipes"
        :key="recipe.id"
        :to="'/recipe/' + recipe.id"
        class="recipe-card bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition"
      >
        <img :src="recipe.image" alt="Tarif Görseli" class="w-full h-56 object-cover rounded-lg" />
        <h2 class="text-xl font-semibold text-gray-700 mt-4">{{ recipe.name[$i18n.locale] }}</h2>
        <p class="text-sm text-gray-600">{{ recipe.description[$i18n.locale] }}</p>
      </router-link>
    </div>

    <h2 class="text-center text-3xl font-semibold text-gray-800 mt-12">{{ $t('home.meat') }}</h2>
    <div class="recipes flex flex-wrap justify-center gap-6 mt-6">
      <router-link
        v-for="recipe in meatDishes"
        :key="recipe.id"
        :to="'/recipe/' + recipe.id"
        class="recipe-card bg-white p-4 rounded-lg shadow-md hover:scale-105 transition"
      >
        <img :src="recipe.image" alt="Tarif Görseli" class="w-40 h-40 object-cover rounded-lg" />
        <h2 class="text-lg font-semibold text-gray-700 mt-2">{{ recipe.name[$i18n.locale] }}</h2>
      </router-link>
    </div>

    <h2 class="text-center text-3xl font-semibold text-gray-800 mt-12">{{ $t('home.vegan') }}</h2>
    <div class="recipes flex flex-wrap justify-center gap-6 mt-6">
      <router-link
        v-for="recipe in veganDishes"
        :key="recipe.id"
        :to="'/recipe/' + recipe.id"
        class="recipe-card bg-white p-4 rounded-lg shadow-md hover:scale-105 transition"
      >
        <img :src="recipe.image" alt="Tarif Görseli" class="w-40 h-40 object-cover rounded-lg" />
        <h2 class="text-lg font-semibold text-gray-700 mt-2">{{ recipe.name[$i18n.locale] }}</h2>
      </router-link>
    </div>

    <h2 class="text-center text-3xl font-semibold text-gray-800 mt-12">{{ $t('home.desserts') }}</h2>
    <div class="recipes flex flex-wrap justify-center gap-6 mt-6">
      <router-link
        v-for="recipe in desserts"
        :key="recipe.id"
        :to="'/recipe/' + recipe.id"
        class="recipe-card bg-white p-4 rounded-lg shadow-md hover:scale-105 transition"
      >
        <img :src="recipe.image" alt="Tarif Görseli" class="w-40 h-40 object-cover rounded-lg" />
        <h2 class="text-lg font-semibold text-gray-700 mt-2">{{ recipe.name[$i18n.locale] }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredRecipes: [
        {
          id: 1,
          name: {
            tr: "Karnıyarık",
            en: "Stuffed Eggplant",
            fr: "Aubergine Farcie",
            de: "Gefüllte Aubergine"
          },
          description: {
            tr: "Lezzetli Türk mutfağı klasiği.",
            en: "A delicious classic from Turkish cuisine.",
            fr: "Un classique délicieux de la cuisine turque.",
            de: "Ein köstlicher Klassiker der türkischen Küche."
          },
          image: "/src/assets/karniyarik.jpg"
        },
        {
          id: 2,
          name: {
            tr: "Tiramisu",
            en: "Tiramisu",
            fr: "Tiramisu",
            de: "Tiramisu"
          },
          description: {
            tr: "İtalyan tatlısı, kahve ve krema ile mükemmel uyum.",
            en: "Italian dessert, perfect harmony of coffee and cream.",
            fr: "Dessert italien, parfaite harmonie de café et de crème.",
            de: "Italienisches Dessert, perfekte Harmonie von Kaffee und Sahne."
          },
          image: "/src/assets/tiramisu.jpg"
        }
      ],
      meatDishes: [
        {
          id: 3,
          name: {
            tr: "Adana Kebap",
            en: "Adana Kebab",
            fr: "Kebab d'Adana",
            de: "Adana Kebab"
          },
          image: "/src/assets/adana.jpg"
        },
        {
          id: 4,
          name: {
            tr: "Etli Güveç",
            en: "Meat Casserole",
            fr: "Ragoût de viande",
            de: "Fleischeintopf"
          },
          image: "/src/assets/guvec.jpg"
        }
      ],
      veganDishes: [
        {
          id: 5,
          name: {
            tr: "Falafel",
            en: "Falafel",
            fr: "Falafel",
            de: "Falafel"
          },
          image: "/src/assets/falafel.jpg"
        },
        {
          id: 6,
          name: {
            tr: "Vegan Burger",
            en: "Vegan Burger",
            fr: "Burger Végétalien",
            de: "Veganer Burger"
          },
          image: "/src/assets/vegan-burger.jpg"
        }
      ],
      desserts: [
        {
          id: 7,
          name: {
            tr: "Baklava",
            en: "Baklava",
            fr: "Baklava",
            de: "Baklava"
          },
          image: "/src/assets/baklava.jpg"
        },
        {
          id: 8,
          name: {
            tr: "Profiterol",
            en: "Profiterole",
            fr: "Profiterole",
            de: "Windbeutel"
          },
          image: "/src/assets/profiterol.jpg"
        }
      ]
    };
  }
};
</script>
