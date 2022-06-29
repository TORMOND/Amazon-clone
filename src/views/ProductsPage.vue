<template>
  <div id="productsPage">
       <Navigationbar/>

<div class="container">

  <div class="advertisements">

  </div>
 <div class="Product-review">
<div class="product-image">
<img src="iPhone.jpg">
</div>
<div class="product-infor">
  <div class="information">
  <div class="segment-1">
    <div class="heading-1">
       <h2>Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked(Renewed Premium)</h2>
    </div>
   
    <span class="visit-link">Visit the Amazon Renewed Store</span>
<div class="part-1">

  <span class="visit-link">
        <font-awesome-icon class="ratings"   icon="star" />
        <font-awesome-icon class="ratings" icon="star" />
        <font-awesome-icon class="ratings" icon="star" />
        <font-awesome-icon class="ratings" icon="star" />
        <font-awesome-icon class="ratings" icon="star-half-stroke" />
       107 ratings || 41 answered questions</span>
</div>
     
  </div>
  <div class="segment-2">
<div class="price">
 <p class="price-p">Price:</p>
 <h3 class="price-num">$889.00</h3>
</div>

<span class="shipping-rates">$172.42 Shipping & importation Fees to Kenya Details</span>
<h4>A like new experience backed by one year satisfaction gurantee</h4>

<p class="renewed">This Renewed premium product is shipped and sold by Amazon and has been certified by Amazon to work  and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support</p>
<a class="visit-link">see terms here</a>
<div class="heading-3">
  <h3>Enhance your purchase</h3>
</div>

  </div>
  <div class="segment-3">
<h4 class="trade-in">Trade-in and save</h4>
<span class="shipping-rates">Save up to $550.00 on your new device with Amazon.com Gift Card credit when you trade in your old device</span>

<div>
  <button class="st-trade">Start your trade-in</button>
</div>


  </div>
  <div class="segment-4">
    <ul class="model-details">
      <li>
        <p class="definition">Model Name</p>
        <span>IPhone 12 Pro max</span>
      </li>
      <li>
        <p class="definition">Wireless Carrier</p>
        <span>Unlocked</span>
      </li>
      <li>
        <p class="definition">Brand</p>
        <span>Apple</span>
      </li>
      <li>
        <p class="definition">Form Factor</p>
        <span>Smart Phone</span>
      </li>
      <li>
        <p class="definition">Memory Storage</p>
        <span>128 Gb</span>
      </li>
      <li>
        <p class="definition">Capacity</p>
        <span></span>
      </li>
      <li>
        <p class="definition">Operating System</p>
        <span>IOS 12</span>
      </li>
      <li>
        <p class="definition">Color</p>
        <span>Pacific Blue</span>
      </li>
      <li>
        <p class="definition">Cellular Technology</p>
        <span>LTE</span>
      </li>
      <li>
        <p class="definition">Included Components</p>
        <span>SIM Tray ejector, USB Cable</span>
      </li>
      <li>
        <p class="definition">Display Type</p>
        <span>OLED</span>
      </li>
    </ul>
  </div>
  <div class="segment-5">
    <div class="item-details">
  <h4>About this item</h4>
  <ul>
    <li> Unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).</li>
    <li>
      Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity.
       </li>
    <li>
Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.
    </li>
    <li>

      Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card.

    </li>
    <li>
      Backed by a one-year satisfaction guarantee.
    </li>
  </ul>
</div>
  </div>
  <div class="segment-6">


  </div>
<div>
</div>

</div>


</div>
<div class="actions">
<h3 class="price-num">$889.00</h3>
<span class="shipping-rates">$172.42 Shipping & importation Fees to Kenya Details</span>

<div>
  <p>Delivery</p>
<h5>June 1 - 14</h5>
</div>

<a class="deliver"><font-awesome-icon icon="location-dot" />Deliver to Kenya</a>
<p class="stock">In Stock</p>
<div class="selector">
  <span>Qty:</span>
  
  <select name="Qty" id="Qty" class="Qty">
  
  <option v-for="number in quantity" :key="number">
   {{number}}
  </option>
</select>
</div>
<div class="btn">
  <button class="add-cart">Add to cart</button>
  <button class="buy">Buy Now</button>
</div>

<div>
  
</div>


<a>Secure transaction</a>

<span>Ships from</span>
<span>Sold by</span>

<span>Support:</span>

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
 name: 'ProductsPage',
    components: {
    Navigationbar,
    Footer
  },
  setup() {
    const quantity = []
    for(let i=1; i<4; i++){
      quantity.push(i)
    }
    return{ quantity }
  }
}
</script>

<style scoped>
.Product-review{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.product-infor{
  display: flex;
}
.actions{
  display: flex;
  flex-direction: column;
}
.segment-1{
  display:flex;
  flex-direction: column;
}
.segment-2{
  display:flex;
  flex-direction: column;
}
.heading-1{
  display:flex;
}
.heading-1 h2{
  font-weight:400;
  display: inline-flex;
}
.part-1{
    display: flex;
}
.visit-link{
  color:#007185;
  display: inline-flex;
}
.visit-link :hover{
  color: #FFA41C;
}

.model-details li{
 list-style: none;
 display: flex;
 gap: 10px;
 padding: 5px 0;
}
.definition{
 font-weight: 600;
 width:20%;
}
.ratings{
  color:#FFA41C;
  cursor: pointer;
}
.price-num{
  color:#b12704;
  font-size: 20px;
}
.price-p{
  color: grey;
  font-size: 12px;
}
.price{
  display:flex;
  gap:10px;
}
.shipping-rates{
  color: grey;
  font-size:14px;
  display: inline-flex;
}
.segment-2 h4{
font-weight: 600;
display: inline-flex;
}
.renewed{
display: inline-flex;
}
.heading-3{
  display: flex;
}
.heading-3 h3{
font-weight: 600;
display: inline-flex;
}
.trade-in{
  display: inline-flex;
}
.st-trade{
  padding: 5px 50px;
  font-size: 14px;
  cursor:pointer;
  border-radius: 5px;
  border: 0.5px solid rgb(148, 146, 146);
}
.product-image{
  height: 100vh;
  object-fit: cover;
}
.product-image img{
height:inherit;
width: 90%;
}
.item-details{
  padding: 20px;
  display:flex;
  justify-content: flex-start;
  flex-direction: column;
}
.item-details h4{
margin:10px 0;
display: inline-flex;
}
.segment-3{
  display:flex;
  justify-content: flex-start;
  flex-direction: column;
}
.segment-4{
  border-bottom: 0.5px solid grey;
  padding: 16px 0;
}
.actions{
  padding: 5px;
  width: 242px;
  display: flex;
  flex-direction: column;
}
.deliver{
  display: inline-flex;
  font-size: 12px;
}
.stock{
  font-size:18px;
  color:#007600;
  display: inline-flex;
}
.selector{
border: 0.5px solid grey;
border-radius: 5px;
width:60px;
cursor: pointer;
}
.selector span{
  font-size: 12px;
}
option{
  padding: 10px;
}
.Qty{
  display: inline-flex;
  outline: none;
  border: none;
}
.btn{
  display: flex;
   flex-direction: column;
   gap: 10px;
   padding: 10px 0;
}
.add-cart{
  background-color: #fff01c;
  padding: 10px;
  border: none;
  border-radius:32px;
  cursor: pointer;
}
.buy{
  background-color: #FFA41C;
  padding: 10px;
  border: none;
  border-radius:32px;
  cursor: pointer;
}

</style>