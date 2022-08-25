<template>
<div>
    <Header></Header>
    <div class='container'>
        <div class='highlight-window' id='product-img' :style="'background-image: url('+product.image+'); padding: 20px;'">
            <div class='highlight-overlay' id='highlight-overlay'></div>
        </div>
        <div class='window'>
            <div class='main-content'>
                <h3>{{product.title}}</h3>
                <div class='description' id='description'>
                  {{product.description}}    
                </div>
                <div class='highlight-window mobile' id='product-img'>
                    <div class='highlight-overlay'  id='highlight-overlay-mobile'></div>
                </div>
                <div class='divider'></div>

                <div class='purchase-info'>
                    <div class='price'>{{product.price}}$</div>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from "./Header.vue"

export default {
    components: {
      Header
    },
    props: ['productId'],
    data() {
        return {
          product: {
            price: 0,
            title: "",
            description: "",
            image: "",
          }
        };
    },
    methods: {
    },
    created() {
      fetch('https://fakestoreapi.com/products/'+this.$props.productId)
            .then(res=>res.json())
            .then(json=>{
              console.log(json)
              this.product = json;  
            })
    },
}
</script>
<style>    
html{
  overflow-x: hidden;
}

h1,
h2,
h3 {
  margin: 0;
}

.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.window {
  background: #fff;
  width: 470px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 450px;
  position: relative;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
.main-content {
  padding:50px 46px 25px 20px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #222;
  height: 100%;
  -webkit-flex-flow: column;
      -ms-flex-flow: column;
          flex-flow: column;
}

h1 {
  letter-spacing: 0px;
  letter-spacing: .02rem;
  font-size: 48px;
  font-size: 3rem;
}

h3 {
  color: #666;
  font-size: 19px;
  font-size: 1.2rem;
}

.description {
  margin-top: 20px;
  width: 100%;
}

.highlight-window {
  height: 550px;
  width: 400px;
  background: #ccc;
  background-size: cover;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  z-index: 10;
  position:relative;
  background-position:center top;
}

.color {
  height: 30px;
  cursor:pointer;
  width: 30px;
  background: #eee;
  border: 1px solid #eee;
  position:relative;
}
.highlight-overlay {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  filter: alpha(opacity=0);
  background-size:cover;
  -webkit-transition:opacity .4s ease;
          transition:opacity .4s ease;
  background-position:center top;
}
.background-element {
  background: #457;
  position: absolute;
  width: 120%;
  height: 400px;
  left: -50px;
  top: -80px;
  -webkit-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
          transform: rotate(-5deg);
  -webkit-transition:background .6s ease;
          transition:background .6s ease;
}
a {
  text-decoration:none;
}
a:hover {
  text-decoration:underline;
  color:#666;
}
button {
  background:#333;
  border:none;
  font-weight:400;
  height:40px;
  margin-top:auto;
  margin-bottom:auto;
  padding-left:25px;
  padding-right:25px;
  box-sizing:border-box;
  color:#fff;
  cursor:pointer;
  -webkit-transition:all .3s ease;
          transition:all .3s ease;
}
button:hover {
  background:#555;
  -webkit-transition:all .3s ease;
          transition:all .3s ease;
}
.divider {
  width:80%;
  height:1px;
  background:#ddd;
  margin-top:20px;
  margin-bottom:20px;
  margin-left:auto;
  margin-right:auto;
}

.purchase-info {
  -webkit-box-pack:justify;
  -webkit-justify-content:space-between;
      -ms-flex-pack:justify;
          justify-content:space-between;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
}
.price {
  font-size: 40px;
  font-size:2.5rem;
}

.highlight-window.mobile {
  display:none;
}

</style>