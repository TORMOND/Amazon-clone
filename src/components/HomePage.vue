<template>
  <div id="homepage">
   <Navigationbar/>

<div class="container">
  <img :src="coverImage" id="backgroundImg">
  <div class="toplayer">
  <div class="gaming">
    <h2>Gaming Accessories</h2>
    <div class="accessories">
        <div class="images" v-for="image in images" :key="image">
<img :src="image">
        </div>
    </div>
  </div>
  <div class="shop-category">
<h2>Shop by category</h2>

  </div>
  <div class="health-care">
    <h2>Computers & Accessories</h2>
  </div>

  <div>


  </div>
  </div>
</div>
 
 <Footer/>
  </div>
</template>

<script>
 import Navigationbar from '@/views/Navigationbar.vue'
 import Footer from '@/views/Footer.vue'
export default {
  name: 'HomePage',
    components: {
    Navigationbar,
    Footer
  },
  setup(){

const backgroundImages = [ 'shop_Toys_Games.jpg', 'Beauty_selection.jpg' ];

const images = [ 'shop_Toys_Games.jpg', 'Beauty_selection.jpg' ];

const slideShow = () =>{
  for(var i = 0; i<images.length; i++){
    
// const coverImage = images[i]

   console.log(images[i]);

  }
  // console.log(coverImage)

}


// slideShow:function(){
//      for(var n = 0; n<images.length; n++){
//       images[n]
//      }
// }



return{  slideShow }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homepage{
  background: #ceced1;
  height:100%;
  width:100%;
}
.toplayer{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:10px;
}
.gaming{
  background: #fff;
}
.shop-category{
  background: #fff;
}
.health-care{
  background: #fff;
}
.accessories{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
