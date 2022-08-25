<template>
  <div class="shop-cart">
    <ul class="cart-items">
      <li v-for="product, index in cart" class="cart-item">
        <a :href="'/products/'+product.id">
          <div class="cart-item-content">
            <div class="cart-item-image">
              <img :src="product.image" width="50px" height="50px" />
            </div>
            <div class="cart-item-price">
              <span class="product-price">{{product.price.toFixed(2)}}$</span>
            </div>
          </div>
        </a>
        <button class="delete-button" v-on:click="deleteFromCart(index)">X</button>
      </li>
    </ul>
    <div class="total-price">
      <p>Total: {{total.toFixed([2])}}$</p>
    </div>
    <button>ORDER</button>
    
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
export default {
    components: {
      CartItem
    },
    props: [],
    data() {
        return {
          total: 0,
          storage: window.localStorage,
          cart: []
        };
    },
    methods: {
      deleteFromCart(id) {
        this.cart.splice(id, 1);
        this.storage.setItem('cart', JSON.stringify(this.cart));
        this.total = 0;
        this.cart.forEach((product)=>{
          this.total += product.price;
        });
      }
    },
    created() {
      const items = JSON.parse(this.storage.getItem("cart"))
      this.cart = items ? items : [];
      this.cart.forEach((product)=>{
        this.total += product.price;
      });

    },
}
</script>
<style>
  .shop-cart {
    position: absolute;
    top: 5px;
    right: 10px;

    width:10%;
    padding: 5px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .cart-items {
    list-style: none;
  }
  .cart-item{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cart-item-content{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cart-item-price{
    margin-left: 5px;
  }
  .cart-item-image{
    box-shadow: 2px 2px 6px 0px rgba(66, 68, 90, 1);
  }

  .delete-button{
    margin-left: 5px;
  }

  .total-price{
    margin-top: 10px;
  }
</style>