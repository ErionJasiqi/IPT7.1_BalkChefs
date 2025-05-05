
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

<template>
  <body>
  <div class="">
    <h1>Öne Çıkan Tarifler</h1>
    <div class="recipes">
      <div v-for="recipe in featuredRecipes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Tarif Görseli" />
        <h2>{{ recipe.name }}</h2>
        <p>{{ recipe.description }}</p>
      </div>
    </div>

    <h2>🍖 Et Yemekleri</h2>
    <div class="recipes">
      <div v-for="recipe in meatDishes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Tarif Görseli" />
        <h2>{{ recipe.name }}</h2>
      </div>
    </div>

    <h2>🌿 Vegan & Vejetaryen</h2>
    <div class="recipes">
      <div v-for="recipe in veganDishes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Tarif Görseli" />
        <h2>{{ recipe.name }}</h2>
      </div>
    </div>

    <h2>🍬 Tatlılar & Atıştırmalıklar</h2>
    <div class="recipes">
      <div v-for="recipe in desserts" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Tarif Görseli" />
        <h2>{{ recipe.name }}</h2>
      </div>
    </div>
  </div>
  </body>
</template>

