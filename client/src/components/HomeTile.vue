<template>
    <div>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Browse Our Trending
        </h2>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Receipt
        </h2>
    </div>
    <div class="grid grid-cols-4 gap-4">
    <!-- Cards loop -->
    <div
      v-for="(card, index) in cards"
      :key="index"
      ref="card"
      class="bg-white rounded-md shadow-md p-4"
      :style="`background-color: ${card.color}`" 
    >
      <div class="h-32 bg-gray-300"></div> <!-- Placeholder Card Image -->
      <div class="mt-4">
        <!-- Card Content Here -->
        <h3 class="text-lg font-semibold">{{ card.title }}</h3>
        <p class="text-gray-600">{{ card.description }}</p>
      </div>
    </div>
  </div>
  <div class="py-8 button flex justify-center">
    <button>ALL RECEIPT</button>
  </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      cards: [], // Array to store cards data
      colors: ["yellow", "blue", "green"], // List of colors for card background
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
    this.cards = Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      title: `Card ${index + 1}`,
      description: `Card ${index + 1} description`,
      color: this.colors[Math.floor(Math.random() * this.colors.length)], // Randomly select a color from the list
      // Add more properties for card content as needed
    }));
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
  