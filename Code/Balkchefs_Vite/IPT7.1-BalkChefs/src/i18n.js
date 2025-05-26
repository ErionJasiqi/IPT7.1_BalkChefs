import { createI18n } from 'vue-i18n';
const messages = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      search: "Tarif Ara",
      login: "Giriş Yap"
    },
    home: {
      featured: "Öne Çıkan Tarifler",
      meat: "🍖 Et Yemekleri",
      vegan: "🌿 Vegan & Vejetaryen",
      desserts: "🍬 Tatlılar & Atıştırmalıklar"
    },
    changeLanguage: "Dili Değiştir",
  },
  en: {
    nav: {
      home: "Home",
      search: "Search",
      login: "Log in"
    },
    home: {
      featured: "Featured Recipes",
      meat: "🍖 Meat Dishes",
      vegan: "🌿 Vegan & Vegetarian",
      desserts: "🍬 Desserts & Snacks"
    },
    changeLanguage: "Change Language",
    
  },
};
const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'tr',
  fallbackLocale: 'en',
  messages
});

export default i18n;