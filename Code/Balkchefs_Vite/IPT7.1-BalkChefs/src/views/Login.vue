<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900">Login</h2>
        <p class="mt-2 text-sm text-gray-600">
          To register for free click here →
          <RouterLink to="/signup" class="text-black font-medium">Sign up</RouterLink>
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" v-model="email" type="email" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-black focus:border-black sm:text-sm" />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" v-model="password" type="password" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-black focus:border-black sm:text-sm" />
          </div>
        </div>

        <button type="submit"
          class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = async () => {
  try {
    const res = await axios.post('http://localhost:8443/api/login', {
      email: email.value,
      password: password.value
    })

    // Save user info
    localStorage.setItem('user', JSON.stringify(res.data.user))

    // Redirect to home page
    router.push('/')
  } catch (err) {
    alert('Login failed. Check your credentials.')
    console.error(err)
  }
}
</script>
