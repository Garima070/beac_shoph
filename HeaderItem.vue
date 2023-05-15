<template>
<div class="nav" v-if="this.$route.name==='Home' || this.$route.name==='ContactUs' || this.$route.name==='About' || this.$route.name==='BuyNow'">
    <img class="top" src="../assets/images.png" alt="">
    <router-link to="/"><a href="">Home</a></router-link>
    <router-link to="BuyNow"><a href="">Buy Now</a></router-link>
    <router-link to="/About"><a href="">About Us</a></router-link>
    <router-link to="/ContactUs"><a href="">Contact Us</a></router-link>
    <div class="nav-right">
        <button v-if="this.$route.name==='Home' || this.$route.name==='ContactUs' || this.$route.name==='About' || this.$route.name==='BuyNow'" class="logout"   @click="$store.dispatch('logout')">Logout</button>
    <router-link to="/Register" ><a v-if="this.$route.name==='Register'" class="register" href="">Register</a></router-link>
</div>
</div>
</template>

<script>
export default {
    name: 'HeaderItem'
}
</script>

<style scoped>
.nav {
    overflow: hidden;
    background-color: wheat;
    height: 61px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
}

.nav a {
    float: left;
    color: black;
    padding: 10px 12px;
    text-align: center;
    font-size: 21px;
    text-decoration: none;
    margin-top: -2px;
}

.nav a:hover {
color: aliceblue;
background-color: rgb(216, 206, 206);
}

.logout{
    position: absolute;
    right: 40px;
    color: black;
    padding: 10px 12px;
    text-align: center;
    font-size: 21px;
    text-decoration: none;
    top: 6px;
    background-color: wheat;
    border: none
}
.register{
    position: absolute;
    right: 30px;
}
.logout:hover{
    color: aliceblue;
background-color: rgb(216, 206, 206);
}
.top{
    float: left;
    height: 60px;
    width: 70px;
}
</style>
