<template>
  <div>
    <Header></Header>
    <div class="shop-section">
      <div  class="product-container">
        <div v-for="product in products">
        <a :href="'/products/'+product.id">
          <item-component
            :product="product">
          </item-component>
        </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemComponent from './ItemComponent.vue';
import Header from './Header.vue';
export default {
    components: {
      Header,
      ItemComponent
    },
    props: ['category'],
    data() {
        return {
          products: [],
        };
    },
    methods: {
    },
    created() {
      fetch('https://fakestoreapi.com/products/category/'+this.$props.category)
            .then(res=>res.json())
            .then(json=>
            {
              this.products = json;;
            });
    },
}
</script>
<style>
.shop-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.product-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;

  
}
</style>