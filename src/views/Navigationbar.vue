<template>
  <div id="nav">
      <div class="segment1">
<div class="amazonlogo">
  <img src="amazon-web-services-logo-png-transparent-svg-vector.png">
</div>

<!-- <font-awesome-icon icon="circle-user" /> -->

 <div class="delivery">
   <div class="locationIcon"><font-awesome-icon icon="location-dot" /></div>
   <div>
<span class="">Deliver to</span>
      <p class="">Kenya</p> 
   </div>
       
    </div>
     <div class="inputs">
       
       <select class="selector" ref="select">
         <option class="options">All <font-awesome-icon icon="caret-down" /></option>
          <option v-for="item in productList" :key="item" class="options">{{item}}</option> 
       </select>
<div class="section-2">
  <div class="referal" @click="engageSelector">ALL</div>
  <input type="search" @click="changeBg">
       <div class="querry"><font-awesome-icon class="searchIcon"
       icon="magnifying-glass" /></div>
     </div>
</div>
         
     <div class="accounts">
       <span class="hello">Hello, sign in</span>
       <p class="acc">Accounts & lists</p>
     </div>
     <div class="returns">
       <span class=" ">Returns
         <p class=""> & Orders</p>
       </span>
     </div>
     <div class="cart">
       <p class="">Cart</p>
     </div>
      </div>

      <div class="segment2">

 
  <button @click="activateSidemenu" class="sidemenu-activator">
    <font-awesome-icon icon="bars" /> 
    All
    </button>
  
<div class="deals">
  <p>Today's Deals</p>
</div>
<div class="service">
  <p>Customer Service</p>
</div>
<div class="registry">
  <p>Registry</p>
</div>
<div class="gift-cards">
  <p>Gift Cards</p>
</div>
<div class="sell">
  <p>Sell</p>
</div>
      </div>
      <!-- <div class="listpopup">
        <select style="display:none;">
          <option v-for="item in productList" :key="item">{{item}}</option>
        </select>
      </div> -->
  </div>
</template>

<script>

export default {


data() {
  return {
    productList : [ "All Departments", "Arts & crafts", "Automotive" ],
  }
},

methods: {
  activateSidemenu:function(){
    this.$emit('activateMenu');
  },
 engageSelector:function(){
      this.$ref.selector.click();
    }
},
}
</script>

<style scoped>
#nav{ 
     color:#fff;
}
#nav span{
  color: #d2d1d4;
  font-size: 12px;
}
.segment1{
   background-color:#131921;
  display: flex;
  gap:10px;
  padding: 10px;
  border: none;
}
.amazonlogo img{
  width:80px;
  height: 100%;
   cursor: pointer;
}
.referal{
  background-color: #fff;
   color: black;
   padding: 12px;
  cursor: pointer;
  color: #636363;
  font-size:12px;
}
.section-2{
  display: flex;
  position: absolute;
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;
}
.selector{
  cursor:pointer;
  border:none;
  padding: 10px;
  color:#636363;
  font-size: 12px;
  width: 120px;
  position: absolute;
  z-index: 0;
  /* visibility: hidden; */
}
.selector:hover{
transition: 2s;
background: #d2d1d4;
}
.selector:focus{
  outline-color: orange;
  outline:orange;
}
.options{
  padding: 0 20px;
  width: 100px;
}
input:focus{
outline: none;
}
.delivery{
display: flex;
cursor: pointer;
padding: 3px;
gap: 5px;
}
.delivery:hover{
  border: 0.5px solid #fff;
}
.locationIcon{
  margin: auto ;
}
.inputs{
  width:55%;
  display: flex;
  border: none;
  margin: 0 auto;
  /* background-color:aqua; */
}
.inputs input{
  width:650px;
  padding: 10px;
  border: 0.5px solid rgb(190, 190, 190);
}
.querry{
  background: rgb(247, 188, 80);
  padding: 10px;
  border: none;
  cursor: pointer;
}
.querry:hover{
  background: rgb(219, 155, 34);
}
.segment2{
  background-color: #232f3e;
  padding: 10px;
  border: none;
}
.querry{
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchIcon{
  color: black;
  font-size: 20px;
}
.cart{
  cursor: pointer;
}
.returns{
  cursor: pointer;
}
.accounts{
  cursor: pointer;
}
.segment2{
  display: flex;
  gap: 10px;
  font-size: 14px;
}
.sidemenu-activator{
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  gap: 5px;
  cursor: pointer;
}

.service{
  cursor: pointer;
}
.registry{
  cursor: pointer;
}
.gift-cards{
  cursor: pointer;
}
.sell{
  cursor: pointer;
}
.deals{
  cursor: pointer;
}
</style>
