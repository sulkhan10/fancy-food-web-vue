<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
</script>
<template>
  <!-- Mobile -->
  <div>
    <nav
      class="fixed flex justify-around bottom-0 left-0 right-0 bg-gray-50 p-2 md:hidden"
    >
      <div class="flex flex-col justify-center">
        <svg
          class="h-8"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          ></path>
        </svg>
        <p>Home</p>
      </div>
      <div class="flex flex-col justify-center">
        <svg
          class="h-8"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
          ></path>
        </svg>
        <p>Promotions</p>
      </div>
      <div class="flex flex-col justify-center">
        <svg
          class="h-8"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
        <p>Others</p>
      </div>
    </nav>
  </div>
  <!-- Web -->
  <div
    class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 hidden md:block"
  >
    <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
      <div class="md:max-w-md lg:col-span-2">
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          class="inline-flex items-center"
        >
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
        </a>
        <div class="my-4 lg:max-w-sm ">
          <p
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >Jalan Perintis Kemerdekaan</p>
          <p
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >Kecamatan Indonesia Bersatu 17</p>
          <p
            class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Daerah Khusus Bhinneka Tunggal Ika
          </p>
        </div>
        <div>
          <div class="flex items-center mt-1 space-x-3">
            <a
              href="/"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path
                  d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                ></path>
              </svg>
            </a>
            <a
              href="/"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                ></path>
              </svg>
            </a>
            <a
              href="/"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path
                  d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4"
      >
        <div>
          <p class="font-semibold tracking-wide text-gray-800">Category</p>
          <ul class="mt-2 space-y-2">
            <li>
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Cupcake</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Pizza</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >kebab</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Salmon</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Doughnut</a
              >
            </li>
          </ul>
        </div>
        <div>
          <p class="font-semibold tracking-wide text-gray-800">About Us</p>
          <ul class="mt-2 space-y-2">
            <li>
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >FAQ</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Report Problem</a
              >
            </li>
           
          </ul>
        </div>

        <div class="md:max-w-md lg:col-span-2">
          <span class="font-semibold tracking-wide text-gray-800"
            >Newsletter</span
          >
          <p                 class="mt-2 text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
>
            Get now free 50% discount for alll products on your first order
          </p>
          <form class="flex flex-col my-4 md:flex-row ">
            <input
              placeholder="Your Email Address"
              type="text"
              class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline rounded-3xl"
              />
              <button
                type="submit"
                class="bg-[#8BAC3E] inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none rounded-3xl"
              >
                Send
              </button>
            
          </form>
          <div class="flex items-center mb-4">
            <svg class="h-6  mr-4" fill="none" stroke="#8BAC3E" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
</svg>            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >info@sulkhan10.mail</a
            >
          </div>
          <div class="flex">
            <svg class="h-6 mr-4" fill="none" stroke="#8BAC3E" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
</svg>            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >850-123-5021</a
            >
          </div>
          
          
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center py-4 border-t sm:flex-row">
      <p class="text-sm text-gray-600">
        © Copyright 2023 Sulkhan10 Inc. All rights reserved.
      </p>
    </div>
  </div>
</template>
