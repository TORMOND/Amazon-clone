<template>
  <div id="nav">
      <div class="segment1">
<div class="amazonlogo">
  <img src="amazon-web-services-logo-png-transparent-svg-vector.png">
</div>


 <div class="delivery">
       <span class="">Deliver to</span>
      <p class="">Kenya</p> 
    </div>
     <div class="inputs">
       <select class="selector" >
         <option>ALL</option>
         <!-- <option v-for="item in productList" :key="item">{{item}}</option> -->
       </select>

       <input type="search" @click="changeBg">
       <div class="querry"></div>
     </div>
     
     <div class="delivery">
       <span class="hello">Hello, sign in</span>
       <p class="acc">Accounts & lists</p>
     </div>
     <div class="delivery">
       <span class=" ">Returns
         <p class=""> & Orders</p>
       </span>
     </div>
     <div class="delivery">
       <p class="">Cart</p>
     </div>
      </div>

      <div class="segment2">


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
  setup() {
    const productList = ["All Departments", "Arts & crafts", "Automotive" ];

    return { productList }
  },
}
</script>

<style>
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
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
}

.amazonlogo img{
  width:80px;
  height: 100%;
   cursor: pointer;
}
.selector{
  cursor:pointer;
  border:none;
  padding: 10px;
  color:#636363;
  font-size: 12px;
  
}
.selector:hover{
transition: 2s;
background: #d2d1d4;
}
.selector:focus{
  outline-color: orange;
  outline:orange;
}
input:focus{
outline: none;
}
.delivery{
cursor: pointer;
padding: 3px;
}
.delivery:hover{
  border: 1px solid #fff;
}
.inputs{
  width:60%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  border: none;
  margin: 0 auto;
}
.inputs input{
  width:66%;
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
  background: orange;
}
.segment2{
  background-color: #232f3e;
  padding: 10px;
  border: none;
}

</style>
