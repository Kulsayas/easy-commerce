import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "Tomato Sauce",
        quantity: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1529566260205-50597c058463?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        about: "Rich and flavorful tomato sauce for pasta or pizza.",
        category: "Food - Canned Goods",
        price: "$31.94",
      },
      {
        name: "Vintage Graphic Tee",
        quantity: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1522896696058-236b2f7fb361?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        about: "Retro-style graphic tee with a soft wash for a vintage feel.",
        category: "Clothing - Tops",
        price: "$94.53",
      },
    ],
  }),
});
