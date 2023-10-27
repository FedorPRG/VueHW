<template>
  <div>
    <h1>Детали конкретного продукта</h1>
    <button @click="moveСurrency(currency)" v-for="(currency, index) in currencys"
      :key="index">{{ currency.name }}</button>
    <div v-for="(product, index) in products" :key="index">
      <p>Название продукта: {{ product.name }}</p>
      <p>Стоимость продукта: {{ priceDisplay(product.price) }}</p>
      <p>Наличие продукта: {{ availableDisplay(product.available) }}</p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data () {
    return {
      currentСurrency: {
        name: '₽',
        exchange: 1
      },
      currencys: [
        {
          name: '₽',
          exchange: 1
        },
        {
          name: '€',
          exchange: 0.01
        }, {
          name: '$',
          exchange: 0.011
        }],
      products: [
        {
          name: 'Product1',
          price: '100',
          available: true
        },
        {
          name: 'Product2',
          price: '200',
          available: false
        },
        {
          name: 'Product3',
          price: '300',
          available: true
        }
      ]
    }
  },

  methods: {
    moveСurrency (currency) { this.currentСurrency = currency },
    priceDisplay (price) { return (price * this.currentСurrency.exchange).toFixed(2) + `${this.currentСurrency.name}` },
    availableDisplay (available) {
      return available ? 'Available' : 'Out of stock'
    }
  }
}
</script>

<style lang="scss" scoped></style>
