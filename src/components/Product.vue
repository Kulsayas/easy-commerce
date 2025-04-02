<script setup>
import { defineProps } from "vue";

defineProps({
  products: Array,
});
</script>

<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 mx-4"
  >
    <div v-for="product in products" class="card bg-gray-100 w-full shadow-sm">
      <figure>
        <img :src="product.imageUrl" :alt="product.name" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <span>
          {{ product.about }}
        </span>
        <div class="card-actions flex justify-between items-center">
          <span>{{ product.price }}</span>
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>
