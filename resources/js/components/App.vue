<template>
    <div class="container">
        <a class="section man-section" href="/man">
            <section-component category="man"></section-component>
        </a>
        <a class="section woman-section" href="/woman">
            <section-component category="woman"></section-component>
        </a>
    </div>
</template>

<script>
import SectionComponent from "./SectionComponent.vue"
export default {
    components: {
        SectionComponent
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
    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .section {
        color: white;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-repeat: no-repeat;
        background-position: center center;
        }
    .woman-section {
        background-image: url("https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    }
    .woman-section:hover{

    }
    .man-section{
        border-right: 20px solid black;
        background-image: url("https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    }
    .man-section:hover{

    }
</style>