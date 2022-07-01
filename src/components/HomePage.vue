<template>

  <div id="homepage">
    <font-awesome-icon @click="closeSidemenu" class="cancel" icon="xmark" />
    <div class="backdrop">
      <div class="side-menu">
<div class="top-part">
<font-awesome-icon class="user" icon="circle-user" />
  <h2 class="signin-msg">Hello,Sign in</h2>
   
</div>
<div class="rem-section">
  <h3>Digital content & Devices</h3>
  <ul>
    <li>Amazon Music</li>
    <li>Kindle E-Readers & Books</li>
    <li>Appstore for Android</li>
  </ul>
  <h3>Shop By Department</h3>
  <ul>
    <li>Electronics</li>
    <li>Computers</li>
    <li>Smart Home</li>
    <li>Arts & Crafts</li>
    <li>See All</li>
  </ul>
  <h3>Program & Features</h3>
  <ul>
    <li>Gift Cards</li>
    <li># FoundItOnAmazon</li>
    <li>AmazonLive</li>
    <li>Interantional Shopping</li>
    <li>See All</li>
  </ul>
  <h3>Help & Settings</h3>
  <ul>
    <li>Your Account</li>
    <li>English</li>
    <li>United States</li>
    <li>Customer Service</li>
    <li>Sign in</li>
  </ul>
</div>
    </div>
    </div>
    
    <div id="modulePage">

   
   <Navigationbar  @activateMenu="toggleSidemenu" />


 
<div id="container">
  <div class="contain">
   
   <div class="carousel"> 

<div class="slides">
  <carousel :slides="slides" :interval="10000" controls indicators></carousel>
</div>
     
     
</div>
   
  <!-- <div class="btns">
    
 <button class="left" @click="prev">
      <img src="arrowbtns-left.png" alt="">
    </button>
    <button class="right" @click="next">
      <img src="arrowbtns-right.png" alt="">
    </button>
  </div> -->
  <div class="toplayer">
  <div class="gaming">
    <h3>Gaming Accessories</h3>
    <div class="accessories">
        <div class="items" v-for="image in images" :key="image">
<img :src="image" class="pics">
        </div>

    </div>
     <p class="shopLink" @click="productsPage">Shop Now</p>
  </div>
  <div class="shop-category">
<h3>Shop by category</h3>
 <div class="accessories">

<div class="items" v-for="image in categoryImages" :key="image">
<img :src="image.image" class="pics">
<span class="item-name">{{image.name}}</span>
</div>
        </div>
        <div>
          <p class="shopLink" @click="productsPage">Shop Now</p>
        </div>
        
  </div>
  <div class="health-care">
    <h3>Health & Personal Care</h3>
<img :src="healthImage" class="healthPic">
<p class="shopLink" @click="productsPage">Shop Now</p>
  </div>
  <div class="shipment">
<div class="signInBox">
  <h3>Sign in for the best experience</h3>
  <button class="signIn-btn" @click="signIn">Sign in securely</button>
</div>

<img src="Fuji_D2.jpg" class="shipmentImage">

  </div>

  <div></div>
  </div>
  </div>
  
  <div class="layer-2">
<div class="gifts">
<h3>Shop Father's Day Gifts</h3>
<img src="Fuji_FathersDay.jpg" class="healthPic">
<p class="shopLink" @click="productsPage">Shop Now</p>
</div>
<div class="dresses">
  <h3>Dresses</h3>
  <img src="Fuji_dash_dress.jpg" class="healthPic" >
<p class="shopLink" @click="productsPage">Shop Now</p>
</div>
<div class="deals">
  <h3>Deal of the Day</h3>
  <img src="dealDay.jpg" class="healthPic" >
<p class="shopLink" @click="productsPage">See all details</p>
</div>
<div class="electronics">
  <h3>Electronics</h3>
   <img src="Fuji_Dash_PC.jpg" class="healthPic" >
<p class="shopLink" @click="productsPage">See more</p>
</div>
  </div>
  <div class="tv">
    <h3>Most wished for in movies & TV</h3>

<div class="movies">
<img :src="movie" class="MoviePic"  v-for="movie in movieImages" :key="movie">

</div>

  </div>
   <div class="games">
    <h3>Most wished for in Video Games</h3>
    <div class="gamesEdition">
<img :src="game" class="gamePic"  v-for="game in gameImages" :key="game">

</div>

  </div>
<div class="layer-3">
<div class="comfy-style">
  <h3>Comfy Styles For Her</h3>
  <div class="accessories">

  </div>
</div>
<div class="frequents">
  <h3>Frequently repurchased in supplies</h3>
  <img src="iPhone.jpg" >

   <!-- <button @click="prev" class="prev">-</button>
   <button @click="next" class="next">+</button> -->

</div>
<div class="topSellers">
<h3>International top sellers in Home improvement</h3>
<img src="HomeTheter.jpg" >

<!-- <button @click="prev" class="prev">-</button>
   <button @click="next" class="next">+</button> -->

</div>

<div class="newArrivals">
  <h3>New arrivals in Toys</h3>
   <img :src="toysImg" class="healthPic">
   <p class="shopLink" @click="productsPage">Shop Now</p>
</div>


</div>
<div class="layer-4">
<div class="comfy-style">
  <h3>Gaming Merchandise</h3>
  <div class="accessories">
<div class="items" v-for="image in gamingMerch" :key="image">
<img :src="image.image" class="pics">
<span class="item-name">{{image.name}}</span>
</div>
  </div>
</div>
<div class="frequents">
  <h3>Frequently repurchased in Baby Products</h3>
  <img src="johnson.jpg"  >
</div>
<div class="topSellers">
<h3>Kindle E Readers</h3>
 <img src="FujiDesktopDashKindle.jpg" class="healthPic" >
 <p class="shopLink" @click="productsPage">Shop Now</p>
</div>

<div class="newArrivals">
  <h3>Top Sellers in Baby Products for you </h3>
  <ul class="products">
    <li>
      <img src="johnson.jpg"  >
    </li>
    <li>
      <img src="FujiDesktopDashKindle.jpg" class="healthPic" >
    </li>
    <li>
      <img src="cleaningTools.jpg"  >
    </li>

      
  
  </ul>
 
</div>
</div>
<div class="books">
  <h3>Top Sellers in Books for you</h3>
  <div class="gamesEdition">
<img :src="book" class="gamePic"  v-for="book in books" :key="book">

</div>
</div>
</div>
 
 <Footer/>
  </div>
  </div>
</template>

<script>
 import Navigationbar from '@/views/Navigationbar.vue'
 import Footer from '@/views/Footer.vue'
import { useRouter } from 'vue-router'
import Carousel from "@/components/Carousel.vue";
export default {
  name: 'HomePage',
    components: {
    Navigationbar,
    Footer,
    Carousel
  },
  setup(){
const router = useRouter();

const slides = ['shop_Toys_Games.jpg', 'shipments.jpg', 'DadGifts.jpg', 'refresh.jpg']
const images = [ 'FujiQuadKeyboard.jpg',  'FujiQuadHeadset.jpg', 'FujiQuadMouse.jpg', 'FujiQuadChair.jpg' ];
const healthImage = "Health.jpg";
const toysImg = "Fuji_Dash_Toys.jpg"
const frequents = [
  { image: 'gamingLaptop.jpg', name: 'Computers & Accessories' },
 {image: 'PS4.jpg', name: 'Video Games'},
];
const movieImages = ['Mobius.jpg', 'spiderman.jpg', 'Batman.jpg', 'Dune.jpg', 'Unchartered.jpg', 'Multiverse-spiderman.jpg', 'x-factor.jpg', 'fallen-liberty.jpg'];
const gameImages = ['nintendo.jpg', 'pokemon.jpg', 'kirby.jpg', 'TheEvilDead.jpg', 'gamingKeyboard.jpg'];
const frequentsImage = frequents[0];
const books = ['TheVeryHungryCaterpillar.jpg','ChickaBoom.jpg','moon.jpg','BELLE.jpg','Moon&Back.jpg','brownbear.jpg'];
const gamingMerch = [
  {image: "Apparel.jpg", name:"Apparel"},
  {image:"cap.jpg", name:"Hat"},
  {image:"Figure.jpg", name:"Action-Figure"},
  {image:"Mug.jpg", name:"Mugs"}

]

const categoryImages = [
  {image: 'gamingLaptop.jpg', name: 'Computers & Accessories'},
  {image: 'PS4.jpg', name: 'Video Games'},
  {image: 'Baby.jpg', name: 'Baby'},
  {image: 'Toys.jpg', name: 'Toys & Games'}
]


function productsPage(){
router.push('/ProductsPage')
}
function signIn(){
router.push('/SignInPage');
}

function toggleSidemenu(){
  const menu = document.querySelector('.backdrop');
  menu.style.display = "block";
  const cancel = document.querySelector('.cancel');
  cancel.style.display ="block";
  const module = document.querySelector('#modulePage');
  module.classList = "active";
}
function closeSidemenu(){
  const menu = document.querySelector('.backdrop');
  menu.style.display = "none";
  const cancel = document.querySelector('.cancel');
  cancel.style.display ="none";
  const module = document.querySelector('#modulePage');
  module.classList = "";
}



return{  images, categoryImages, healthImage, toysImg, frequentsImage, movieImages,gameImages, books, 
gamingMerch, productsPage, toggleSidemenu, closeSidemenu, slides }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#modulePage{
  background: #e5ece8;
  height:100%;
  width:100%;
}
#modulePage.active{
  opacity: 0.5;
  user-select: none;
  pointer-events: none;
  scroll-behavior: none;
}
.cancel{
  font-size:28px;
   cursor: pointer;
   position: absolute;
   margin-top:10px;
   margin-left:-150px;
   z-index: 3;
   display: none;
}
.contain{
 position: relative; 
  overflow: hidden; 
 height: 100vh;
  background: #e5ece8;
  object-fit: cover;
}
.carousel{
  display: flex;
}
.slides{
object-fit: cover;
 position:absolute; 
 z-index:0;
  width: 100vw; 
 height: 90vh;
 transition: 1s;
}
#backgroungImg{
  width: inherit;
  height: inherit;
}
.right{
  background: transparent;
  
  cursor: pointer;
 margin-left:-120px ;
}
.left{
  background: transparent;
  
  cursor: pointer;
  
}
.right :hover{
  visibility: visible;

}
.left :hover{
  visibility: visible;
  border: blue;
}
.btns{
  height: 250px;
  width: 100vw;
  position:absolute;
  z-index:1;
  display: flex;
  justify-content: space-between;
}
.movies{
  margin-top: 20px;
  display: flex;
  gap: 16px;
  overflow-x:hidden;
  cursor: pointer;
}
.gamesEdition{
  margin-top: 20px;
  display: flex;
  gap: 16px;
  overflow-x: hidden;
  cursor: pointer;
}
.booksEdition{
  margin-top: 20px;
  display: flex;
  gap: 16px;
  overflow-x:hidden;
}
#container.active{
  opacity:0.5;
background-color: Black;
}
#homepage{
   background: #e5ece8;
  height:100%;
  width:100%;
}
.toplayer{
   display:grid; 
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: 25%;
  column-gap:20px;
  padding: 20px;
  position: absolute;
  z-index: 1;
  margin-top: 250px;
}
.pics{
  width:inherit;
  height:inherit;
}
.gaming{
  background: #fff;
   padding: 16px 0;
}
.shop-category{
  background: #fff;
   padding: 16px;
}
.health-care{
  background: #fff;
   padding: 16px;
}
.accessories{
  margin: 20px 0;
  height: 78%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.items{
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.item-name{
  font-size: 12px;
}
.healthPic{
width:95%;
height:82%;
cursor: pointer;
margin: 10px 0;
}
.health-care{
  padding: 10px;
}
.shopLink{
  display: flex;
  padding: 0 16px;
  color: #216FD8;
  font-size: 12px;
  cursor: pointer;
}
.signInBox{
background-color: #fff;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 20px;
}
.signIn-btn{
  border: none;
  cursor: pointer;
  background-color: yellow;
  padding: 8px 30px;
  border-radius: 10px;
}
.shipmentImage{
  width:95%;
  margin-top: 10px;
}
.layer-2{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:20px;
  padding: 20px;

}
.gifts{
  background-color: #fff;
  padding: 16px 10px;
  cursor: pointer;
}
.dresses{
  background-color: #fff;
  padding: 16px 10px;
  cursor: pointer;
}
.deals{
  background-color: #fff;
  padding: 16px 10px;
  cursor: pointer;
}
.electronics{
  background-color: #fff;
  padding: 16px 10px;
  cursor: pointer;
}
.tv{
  background-color: #fff;
  padding: 16px;
  margin-bottom: 20px;
  margin-top: 25px;
}
.games{
  background-color: #fff;
  padding: 16px;
  margin-bottom: 20px;
}
.layer-3{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:20px;
  padding: 20px;
}
.layer-4{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:20px;
  padding: 20px;
}
.comfy-style{
   background-color: #fff;
  padding: 16px;
}
.frequents{
   background-color: #fff;
  padding: 16px;
}
.topSellers{
   background-color: #fff;
  padding: 16px;
}
.newArrivals{
   background-color: #fff;
  padding: 16px;
}
.books{
  background-color: #fff;
  padding: 16px;
  margin-bottom: 20px;
}
.prev{
position: absolute;
z-index: 1;
border: none;
margin-left: 40px;
width:50px;
height:200px;
cursor: pointer;
}
.next{
position:absolute;
z-index: 1;
margin-left:-200px;
width:50px;
height:200px;
cursor: pointer;
border: none;
}
.products {
  position:relative;
}
.products  li{
  position: absolute;
    object-fit: cover;
    list-style: none;
}
.backdrop{
  display:none;
  position:absolute;
  z-index:2;
  height: 100vh;
  width: 100vw;
}
.side-menu{
 height: 100vh;
 width:25vw;
 background-color:#fff;
 animation:slidemenu 0.8s;
 animation-timing-function: linear;
}

@keyframes slidemenu{
   from{
transform: translateX(-250px);
   }
   to{
 transform: translateX(0px);
   }
}

.rem-section{
  height:inherit;
overflow-y:scroll;
padding: 10px;
}
.top-part{
  display: flex;
  padding: 10px;
  gap: 10px;
  color: #fff;
  background-color: #232f3e;
}
.user{
  font-size: 24px;
  color: #fff;
}
.rem-section{
  display: flex;
  flex-direction: column;
}
.rem-section li{
  padding: 10px;
  list-style: none;
}
.rem-section ul{
   display: inline-flex;
   flex-direction: column;
}
.rem-section h3{
  padding: 10px;
  display: inline-flex;
}
.signin-msg{
  font-weight: 600;
}
@media all and (max-width:1200px) {
  .toplayer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  } 
}
</style>
