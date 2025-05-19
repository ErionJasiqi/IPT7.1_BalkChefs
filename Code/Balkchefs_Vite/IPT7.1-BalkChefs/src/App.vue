<template>
  <div>
    <Navbar />

    <div class="flex justify-end items-center p-4 bg-gray-100">
      <label for="language" class="mr-2 text-sm font-medium text-gray-700">{{ $t('changeLanguage') }}</label>
      <select
        id="language"
        v-model="currentLocale"
        @change="changeLocale"
        class="bg-white border border-gray-300 text-sm rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-40 p-2"
      >
        <option value="tr">🇹🇷 Türkçe</option>
        <option value="en">🇬🇧 English</option>
        <option value="de">🇩🇪 Deutsch</option>
        <option value="fr">🇫🇷 Français</option>
      </select>
    </div>

    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      currentLocale: this.$i18n.locale
    };
  },
  watch: {
    currentLocale(newLang) {
      this.$i18n.locale = newLang;
      localStorage.setItem('lang', newLang);
    }
  },
  mounted() {
    const saved = localStorage.getItem('lang');
    if (saved) {
      this.$i18n.locale = saved;
      this.currentLocale = saved;
    }
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = this.currentLocale;
      localStorage.setItem('lang', this.currentLocale);
    }
  }
};
</script>
