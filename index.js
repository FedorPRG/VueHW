//Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

new Vue({
  el: "#app",
  data: {
    products: [
      {
        name: "Product",
        price: "20",
      },
      {
        name: "Product",
        price: "30",
      },
      {
        name: "Product",
        price: "10",
      },
    ],
  },
  methods: {
    sortAscending() {
      this.products.sort((a, b) => a.price - b.price);
    },
    sortDescending() {
      this.products.sort((a, b) => b.price - a.price);
    },
  },
});
