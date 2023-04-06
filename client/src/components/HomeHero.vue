<script></script>
<template>
  <div
    class="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl"
  >
    <div class="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
      <div class="max-w-xl mb-6">
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Good Food Us<br class="" />
          Good Mood
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
      </div>
      <div class="flex items-center">
        <a
          href="/"
          class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Daftar Sekarang
        </a>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >About Us</a
        >
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute bottom-0 left-0 m-4 p-4 bg-black bg-opacity-50 text-white rounded flex items-center z-10"
      >
        <img
          src="../assets/images/homeHeroImage.png"
          class="w-12 h-12 mr-4 object-cover rounded"
          alt="Thumbnail"
        />
        <div>
          <h2 class="text-lg font-bold mb-2">Food Rating:</h2>
          <!-- This is the star rating -->
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-black bg-opacity-50 rounded-full"
        >
          <!-- Isi elemen absolut di sini -->
        </div>
        <img
          src="../assets/images/homeHeroImage.png"
          class="object-cover object-top w-full h-64 mx-auto lg:h-auto md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
