<template>
  <div>
      <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '375px', height: '470px' }"
       ></div>
       </div>
  </div>


</template>
<script >

 import VueGallery from 'vue-gallery';
 import { TimelineMax, TweenMax, } from "gsap";
  
  export default {
    // mounted(){
    //    let tl = new TimelineMax()
    //   if (tl.fromTo(".fon3", 0.15, {x:1200}, {x:0}))
    //   return false
    // },
    data: function () {
      return {
        images: [
          require("../assets/models/chb7.jpg"),
          require("../assets/models/nas2.jpg"),
          require("../assets/models/nas4.jpg"),
          require("../assets/models/osen1.jpg"),
          require("../assets/models/tat3.jpg"),
          require("../assets/models/xz4.jpg"),
          require("../assets/models/xz5.jpg"),
          require("../assets/models/xz6.jpg"),
          require("../assets/models/xz11.jpg"),
          require("../assets/models/nas12.jpg"),
          require("../assets/models/xz10.jpg"),
        ],
        index: null
        
      };
    },

    components: {
      'gallery': VueGallery
    },
    // mounted(){
    //    let tl = new TimelineMax()
    //   tl.fromTo(".fon3", 0.15, {x:1200}, {x:0})
    //   return false
  //}
    }
</script>
<style scoped>
  .image {
    float: left;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 1px;
    flex-direction: column;
  }
</style>
