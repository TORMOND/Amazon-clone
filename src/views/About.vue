<template>
  <div class="about">
    <h1>This is an about page</h1>

<carousel :slides="slides" :interval="3000" controls indicators></carousel>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
    components: { Carousel },
  data() {
    return {
       slides:['shop_Toys_Games.jpg', 'shipments.jpg', 'DadGifts.jpg', 'refresh.jpg']
    }
  },
  methods: {
    prev:function(){
let currentImage = 0;

currentImage++

if(currentImage = 1){
  const imageTwo = document.querySelector('#backgroundImg2');
  imageTwo.style.display = "block"
}
    },
    next:function(){
      
    }
  },
}
</script>
<style scoped>
.slides{
  display: flex;
 /* width: 500px; */
 /* overflow: hidden; */
}
#backgroundImg1, #backgroundImg2,
#backgroundImg3, #backgroundImg4 {
  width:500px;
  height:500px;
  display: hidden;
}
</style>
