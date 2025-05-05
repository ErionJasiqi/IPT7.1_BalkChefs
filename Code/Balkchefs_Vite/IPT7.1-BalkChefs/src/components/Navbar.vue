<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo">
    </div>
    <div class="nav-links">
      <router-link to="/">Ana Sayfa</router-link>
      <router-link to="/search">Tarif Ara</router-link>
      <router-link to="/login">Giriş Yap</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: 0.3s;
}

.nav-links a:hover {
  background-color: #ddd;
}
</style>