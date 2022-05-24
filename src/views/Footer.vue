<template>
    <div id="footer">
        <div class="backTop">
            <p @click="top">Back To Top</p>
        </div>
        <div class="mid-footer">
            <div class="container">
                <div class="part1">
                      <h4>Get to Know Us</h4>
                       <p>Careers</p>
                       <p>Blog</p>
                       <p>About Amazon</p>
                       <p>Investor Relations</p>
                       <p>Amazon Devices</p>
                </div>
                <div class="part2">
                      <h4>Make Money with Us</h4>
                      <p>Sell products on Amazon</p>
                      <p>Sell on Amazon Business</p>
                      <p>Sell apps on Amazon</p>
                      <p>Become an affiliate</p>
                      <p>Advertise your products</p>
                      <p>Self-publish with Us</p>
                      <p>Host an Amazon Hub</p>
                      <p>See more make money with Us</p>
                </div>
                <div class="part3">
                     <h4>Amazon Payment Products</h4>
                     <p>Amazon Business Cards</p>
                     <p>Shop with points</p>
                     <p>Reload your Balance</p>
                     <p>Amazon Currency Convertor</p>
                </div>
                <div class="part4">
                    <h4>Let Us Help You</h4>
                    <p>Amazon and COVID 19</p>
                    <p>Your account</p>
                    <p>Your Orders</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Returns & Replacements</p>
                    <p>Manage Your Content & Devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
                <div class="part-5">

                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
setup() {
    
    return{
top
    }
}
}
</script>

<style scoped>
.mid-footer{
    display: flex;
}
.backTop{
    padding: 10px;
    background-color: #232f3e;
    cursor: pointer;
}
#footer{
    background-color:#1a222c;
    color: #fff;
}
.container{
    padding: 16px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    font-size: 12px;
}

</style>