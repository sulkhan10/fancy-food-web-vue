<template>
    <div class="mx-8 md:mx-12 lg:mx-32 mt-16 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full   md:px-24 lg:px-8 ">
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Browse Our Trending
        </h2>
        <h2
          class="text-green max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Receipt
        </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mx-8 md:mx-12 lg:mx-32 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full   md:px-24 lg:px-8">
    <!-- Cards loop -->
    <div
      v-for="(menu, index) in menus"
      :key="index"
      ref="card"
      class="bg-white rounded-md shadow-md p-4 rounded-3xl"
      :style="`background-color: ${menu.color}`" 
    >
      <div class="h-32 py-4 pl-1">
        <img :src="menu.image" :alt="menu.image" class="rounded-xl"/>
      </div> <!-- Placeholder Card Image -->
      <div class="my-4 pl-1">
        <!-- Card Content Here -->
        <h3 class="text-2xl font-bold">{{ menu.name }}</h3>
        <p class="text-gray-600 font-bold mb-4 text-[#8BAC3E]">{{ menu.category }}</p>
        <div class="flex items-center"> 
            <svg
            v-for="(rating, index) in menu.rating"
      :key="index"
              fill="orange"
              stroke="orange"
              class="h-4"
              stroke-width=".5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          
            <svg
            v-for="(rating, index) in (5 - menu.rating)"
      :key="index"
              fill="gray"
              stroke="gray"
              class="h-4"
              stroke-width=".5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          </div>
      </div>
    </div>
  </div>
  <div class="py-8 button flex justify-center pb-24 md:pb-4">
    <button class="bg-[#8BAC3E] text-gray-50 rounded-full text-xl font-semibold py-4 px-8 mt-4">ALL Receipt</button>
  </div>
  </template>
  
  <script>
import { mapState } from 'pinia'
import { useFoodStore } from '../stores/food'
export default {
    computed: {
        ...mapState(useFoodStore, ['menus']),
    },
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
  