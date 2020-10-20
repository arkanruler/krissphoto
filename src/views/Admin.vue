<template>
  <nav class="navbar navbar-dark bg-dark">
  <span class="navbar-brand mb-0 h1">Admin panel</span>
</nav>


</template>
<script lang="ts">

import { TimelineMax, TweenMax, } from "gsap";

export default{
  mounted() {
    

    let tl = new TimelineMax()
    // tl.fromTo(App, 1, {y:1000}, {y:0})
//     let els = document.querySelectorAll(".js-splitme");
// [].forEach.call(els, function(el)
// {  
//     // el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
    
// });
     tl.fromTo(".fon1", 0.15, {x:1200}, {x:0})
     tl.from(".contacts",0.58,{autoAlpha:0})
     tl.from(".vk",0.34,{autoAlpha:0})
    
    
  
  }
} 

</script>
<style scoped>
.contacts
{
  top: 140px;
  position: absolute;
  font-family: 'Piedra', cursive;
  color:#ffffff;
  padding-bottom: 200px;
  padding-left: 1172px;
  font-size: 78px;
  font-weight: 100px;
 
}
.vk
{
  top: 200px;
  position: absolute;
  margin-left: 1178px;
  display:initial;
  font-family: 'Piedra', cursive;
  color:#ffffff;
  font-size: 30px;
  font-weight: 100px;
}
.fon1 {
position:absolute;
bottom: 100px;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(../assets/contact.jpg);
background-repeat: no-repeat;
background-size:100%;
z-index: -1;
}
</style>