<template>
<div class="fon">
<div class="home">   
      <h1 class="text">Kristina Baydaricko <p>Master of portrait photography</p></h1>
  </div>
</div>


</template>

<script lang="ts">
import { TimelineMax, TweenMax, } from "gsap";

export default{
  mounted() {
    

    let tl = new TimelineMax()
    // tl.fromTo(App, 1, {y:1000}, {y:0})
    let els = document.querySelectorAll(".js-splitme");
[].forEach.call(els, function(el)
{  
    // el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
    
});
    //  tl.fromTo(".fon", 1, {y:1200}, {y:0})
    tl.from(".fon",0.45,{autoAlpha:0})
    tl.from("h1",0.56,{autoAlpha:0})
    tl.fromTo(".navbar", 0.58,{y:-100},{y:0});
    
    
  
  }
} 

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Piedra&display=swap');
// .navbar
// {
// position: fixed;
// top: 0;
// left: 0;
// right: 0;
// }
.home{
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
min-height: 667px;
position: relative;
background: rgba(0, 0, 0, 0.582);
opacity: 1;
overflow: hidden;
}
.fon {
position:absolute;
bottom: 100px;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(../assets/main.jpg);
background-repeat: no-repeat;
background-size:cover;
 z-index: -1; 
}
.text
{
  display:initial;
  font-family: 'Piedra', cursive;
  color:#ffffff;
  padding-bottom: 500px;
  padding-right: 1001px;
  font-size: 50px;
  font-weight: 100px;

}

</style>