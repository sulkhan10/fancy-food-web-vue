<template>
    <div>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Browse Our Category
        </h2>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Receipt
        </h2>
    </div>
    <div class="overflow-x-hidden ">
      <div class="flex justify-between">
        
        <div ref="cardsContainer" class="ml-64  flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']" >
          <div class="flex-shrink-0">
            <div ref="cardsList" class="flex space-x-4">
              <!-- Cards loop -->
              <div v-for="(card, index) in cards" :key="index" ref="card" class="w-64 bg-white rounded-md shadow-md p-4">
                <div class="bg-gray-300 h-32"></div> <!-- Placeholder Card Image -->
                <div class="mt-4">
                  <!-- Card Content Here -->
                  <h3 class="text-lg font-semibold">{{ card.title }}</h3>
                  <p class="text-gray-600">{{ card.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    <div class="flex justify-end">
      <button @click="scrollLeft" class="bg-gray-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 20l-7-8 7-8v16z"></path>
        </svg>
      </button>
      <button @click="scrollRight" class="bg-gray-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20l7-8-7-8v16z"></path>
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [], // Array to store cards data
        currentIndex: 0, // Current index of the cards
        cardsPerPage: 3, // Number of cards to display per page
      };
    },
    mounted() {
      // Fetch cards data from API or set it statically
      // Example:
      // axios.get('https://api.example.com/cards')
      //   .then(response => {
      //     this.cards = response.data;
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
  
      // Static cards data for demonstration
      this.cards = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        title: `Card ${index + 1}`,
        description: `Card ${index + 1} description`,
        // Add more properties for card content as needed
      }));
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
  