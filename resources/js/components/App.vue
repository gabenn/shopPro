<template>
    <div class="main-page">
        <a class="category-section man-section" href="/man">
            <section-component category="man"></section-component>
        </a>
        <a class="category-section woman-section" href="/woman">
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
    .main-page {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .category-section {
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
        transition: transform 1s ease;
        background-image: url("https://ssmscdn.yp.ca/image/resize/f4659670-d38a-4e35-bcdc-18be44b262a3/ypui-d-mp-pic-gal-lg/garage-clothing-co-3.jpg");
    }
    .woman-section:hover{
        transform: scale(1.1);
    }
    .man-section{
        transition: transform 1s ease;
        background-image: url("https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1");
    }
    .man-section:hover{
        transform: scale(1.1);
    }
</style>