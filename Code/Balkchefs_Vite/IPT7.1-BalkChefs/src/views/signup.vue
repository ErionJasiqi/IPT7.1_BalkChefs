<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900">Sign Up</h2>
        <p class="mt-2 text-sm text-gray-600">
          Already have an account? →
          <RouterLink to="/login" class="text-black font-medium">Login</RouterLink>
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input id="name" v-model="name" type="text" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-black focus:border-black sm:text-sm" />
          </div>
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
          class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = async () => {
  try {
    const res = await axios.post('http://localhost:8443/api/register', {
      name: name.value,
      email: email.value,
      password: password.value
    })

    // Optionally store user data
    localStorage.setItem('user', JSON.stringify(res.data.user))

    // Redirect to homepage
    router.push('/')
  } catch (err) {
    alert('Signup failed')
    console.error(err)
  }
}
</script>
