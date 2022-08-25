<template>
  <div class="title-container">
    <h1 class="title">
      {{$props.category}}
    </h1>
  </div>
</template>

<script>
import Header from "./Header.vue"

export default {
    components: {
      Header
    },
    props: ['category'],
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
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    opacity: 0.0;
    color: black;
    background-color: white;
    padding: 5px; 
    border: 5px solid black;
    border-radius: 10%;

    text-transform: uppercase;
  }
</style>