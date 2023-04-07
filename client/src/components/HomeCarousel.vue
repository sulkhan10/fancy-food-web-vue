<template>
  <div class="mx-8 md:mx-12 lg:mx-32 mt-16 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full   md:px-24 lg:px-8">
    <h2
      class="text-gray-900 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
    >
      Browse Our Category
    </h2>
    <h2
      class="max-w-lg mb-6 font-sans text-green text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
    >
      Receipt
    </h2>
  </div>
  <div class="mx-8 md:mx-12 lg:mx-32 mt-16 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full   md:px-24 lg:px-8">
    <div class="flex justify-between">
      <div
        ref="cardsContainer"
        class="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <div class="flex-shrink-0">
          <div ref="cardsList" class="flex space-x-4">
            <div
              v-for="(card, index) in cards"
              :key="index"
              ref="card"
              class="w-64 bg-white rounded-md shadow-md p-6 flex flex-col items-center justify-center"
              :style="`background-color: ${card.color}`"
            >
              <div class="h-32">
                <img :src="card.image" :alt="card.image" />
              </div>
              <div class=" flex flex-col items-center justify-center">
                <h3 class="text-gray-900 text-lg font-bold">{{ card.name }}</h3>
                <p class="text-gray-900 font-semibold">{{ card.items }} Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-end gap-4 mt-4 mx-8 md:mx-12 lg:mx-32  px-4  mx-auto sm:max-w-xl md:max-w-full   md:px-24 lg:px-8">
    <button
      class="flex bg-[#8BAC3E] rounded-full p-2 items-center"
      @click="scrollLeft"
    >
      <button
        class="bg-white text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#8BAC3E">
          <path d="M14 20l-7-8 7-8v16z"></path>
        </svg>
      </button>
      <p class="mx-2 font-semibold text-gray-50">PREV</p>
    </button>
    <button
      class="flex bg-[#8BAC3E] rounded-full p-2 items-center"
      @click="scrollRight"
    >
      <p class="mx-2 font-semibold text-gray-50">NEXT</p>
      <button
        class="bg-white text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#8BAC3E">
          <path d="M10 20l7-8-7-8v16z"></path>
        </svg>
      </button>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          name: "Cupcake",
          items: 22,
          color: "#F0FEEB",
          image:
            "https://drive.google.com/uc?id=10W_S8IUT7xGwI3g4vMvxURk4dWdJUJqe",
        },
        {
          name: "Pizza",
          items: 25,
          color: "#E6F3F5",
          image:
            "https://drive.google.com/uc?id=1d-qWon7Yj7RbVyVF38e_RWwFtdxji9UE",
        },
        {
          name: "Kebab",
          items: 12,
          color: "#E6F3F5",
          image:
            "https://drive.google.com/uc?id=1nQJ5e3uvkm8YAIKJPoqE6Z122IV8c6iv",
        },
        {
          name: "Salmon",
          items: 22,
          color: "#F9EEF3",
          image:
            "https://drive.google.com/uc?id=1Lni_cXToZ4xGXRweU4KQ6xMFqeWRBmNi",
        },
        {
          name: "Doughnut",
          items: 11,
          color: "#F3F7D9",
          image:
            "https://drive.google.com/uc?id=1En1OkysUcBlCHtTs6jpzYFlpeg9B7lDT",
        },
        {
          name: "Cupcake",
          items: 22,
          color: "#F0FEEB",
          image:
            "https://drive.google.com/uc?id=10W_S8IUT7xGwI3g4vMvxURk4dWdJUJqe",
        },
        {
          name: "Pizza",
          items: 25,
          color: "#E6F3F5",
          image:
            "https://drive.google.com/uc?id=1d-qWon7Yj7RbVyVF38e_RWwFtdxji9UE",
        },
        {
          name: "Kebab",
          items: 12,
          color: "#E6F3F5",
          image:
            "https://drive.google.com/uc?id=1nQJ5e3uvkm8YAIKJPoqE6Z122IV8c6iv",
        },
        {
          name: "Salmon",
          items: 22,
          color: "#F9EEF3",
          image:
            "https://drive.google.com/uc?id=1Lni_cXToZ4xGXRweU4KQ6xMFqeWRBmNi",
        },
        {
          name: "Doughnut",
          items: 11,
          color: "#F3F7D9",
          image:
            "https://drive.google.com/uc?id=1En1OkysUcBlCHtTs6jpzYFlpeg9B7lDT",
        },
      ], // Array to store cards data
      currentIndex: 0, // Current index of the cards
      cardsPerPage: 3, // Number of cards to display per page
    };
  },
  methods: {
    scrollRight() {
      const cardWidth = this.$refs.card[0].offsetWidth;
      if (this.currentIndex + this.cardsPerPage < this.cards.length) {
        this.currentIndex++;
        this.$refs.cardsContainer.scrollLeft += cardWidth;
      }
    },
    scrollLeft() {
      const cardWidth = this.$refs.card[0].offsetWidth;
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.$refs.cardsContainer.scrollLeft -= cardWidth;
      }
    },
  },
};
</script>
