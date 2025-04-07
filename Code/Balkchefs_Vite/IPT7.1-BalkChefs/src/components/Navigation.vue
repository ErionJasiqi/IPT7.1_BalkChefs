<script>
import { RouterLink, RouterView } from 'vue-router'  
</script>
<template>
<html>
<body>
<ul class="flex p-6 bg-orange-100 ">
  <li class="">
    <a class="p-6 hover:bg-orange-200 ">Home</a>
  </li>
  <li class="ml-auto">
    <a class="p-6 hover:bg-orange-200">Sign up</a>
  </li>
  <li class="ml-6">
    <RouterLink to="/login">
    <a class="p-6 hover:bg-orange-200">Log in</a>
</RouterLink>
  </li>
</ul>
</body>
</html>
</template>

<style>
</style>