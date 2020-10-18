<template>
  <div id="app">
     <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import { TimelineMax, TweenMax, } from "gsap";
import Navbar from '@/components/navbar.vue'; 
export default {
  mounted() {

 let App=document.querySelector('.fon');



    console.log('1')
  },
   components: {
     Navbar
   }
}
 
 
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
