<template>
<header>
  <a id="arrowAnim" href="/">
    <div class="arrowSliding">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay1">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay2">
      <div class="arrow"></div>
    </div>
    <div class="arrowSliding delay3">
      <div class="arrow"></div>
    </div> 
  </a>
</header>
</template>

<script>
import ShopCart from "./ShopCart.vue";

export default {
    components: {
      ShopCart
    },
    props: [],
    data() {
        return {
          
        };
    },
    methods: {
    },
    created() {
    },
}
</script>
<style>   
#arrowAnim {
  margin-top: 20px;
  width: 100vw;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 30px;
  height: 30px;
  border: 20px solid;
  border-color: black transparent transparent black;
  transform: rotate(-45deg);
}


.arrowSliding {
  position: absolute;
  -webkit-animation: slide 4s linear infinite; 
          animation: slide 4s linear infinite;
}

.delay1 {
  -webkit-animation-delay: 1s; 
    animation-delay: 1s;
}
.delay2 {
  -webkit-animation-delay: 2s; 
    animation-delay: 2s;
}
.delay3 {
  -webkit-animation-delay: 3s; 
    animation-delay: 3s;
}

@-webkit-keyframes slide {
    0% { opacity:0; transform: translateX(15vw); }	
   20% { opacity:1; transform: translateX(9vw); }	
   80% { opacity:1; transform: translateX(-9vw); }	
  100% { opacity:0; transform: translateX(-15vw); }	
}
@keyframes slide {
    0% { opacity:0; transform: translateX(15vw); }	
   20% { opacity:1; transform: translateX(9vw); }	
   80% { opacity:1; transform: translateX(-9vw); }	
  100% { opacity:0; transform: translateX(-15vw); }	
} 
</style>