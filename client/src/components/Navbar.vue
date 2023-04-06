<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
</script>

<template>
  <div class="fixed z-10 w-full bg-gray-900 z-30">
    <div
      class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <div class="flex items-center">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center mr-8 flex gap-5"
          >
            <RouterLink to="/">
              <img
                src="../assets/images/logoNavbar.png"
                style="height: 50px"
                class=""
              />
            </RouterLink>
          </a>
        </div>
        <div>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <RouterLink to="/">
              <li>
                <p
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </p>
              </li>
            </RouterLink>
            <RouterLink to="/">
              <li>
                <a
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  About
                </a>
              </li>
            </RouterLink>
            <RouterLink to="/">
              <li>
                <p
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Promotions
                </p>
              </li>
            </RouterLink>
            <RouterLink to="/">
              <li>
                <a
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >Blogs</a
                >
              </li>
            </RouterLink>
            <RouterLink to="/">
              <li>
                <a
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >Contact Us</a
                >
              </li>
            </RouterLink>
          </ul>
        </div>
        <div>
          <ul class="flex items-center hidden lg:flex">
            <RouterLink to="/login">
              <li v-if="!isLogin">
                <p
                  href="/"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Masuk
              </p>
              </li>
            </RouterLink>
            <RouterLink to="/register">
              <li v-if="!isLogin">
                <button
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
             
                >
                  Daftar Sekarang
                </button>
              </li>
            </RouterLink>
            <li v-if="isLogin">
              <button
                @click.prevent="logoutHandler"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
