<template>
    <section class="footer" v-if="this.$route.name==='Home' || this.$route.name==='ContactUs' || this.$route.name==='About' || this.$route.name==='BuyNow'">
    <section id="newsletter" class="section-p1">
        <div class="newstext">
            <h4>Sign Up For Newsletter</h4>
            <p>Great E-mail updates about our latest shop and <span> special offers</span>></p>
        </div>
        <div class="form">
            <input type="text" placeholder="Your Email Address">
        </div>
    </section>
<footer class="footer-distributed">

    <div class="footer-left">

        <h3>Beach<span>Shop</span></h3>

        <p class="footer-links">
            <a href="#" class="link-1">Home</a>
            <a href="#">Buy Now</a>
            <a href="#">About US</a>

            <a href="#">Contact Us</a>

        </p>

        <p class="footer-company-name">Beach Shop © 2015</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>GLA University</span> Chaumuhan,Mathura</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+91 9315673008</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">gajendrajadaun2807@gmail.com</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

        </div>

    </div>

</footer>
</section>
</template>

    
<script>

    </script>
    
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700);

* {
    font-family: Open Sans;
}
#newsletter{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-image: url(../assets/b14.png);
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-color: rgb(117, 13, 13);

}
#newsletter h4{
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    padding: 6px 4px;
}
#newsletter p{
    font-size: 14px;
    font-weight: 600;
    color: #818ea0;
padding: 24px;
}
#newsletter input{
    color: black;
    background-color: white;
}
#newsletter p span{
    color:#ffbd27;
}
.footer-distributed {
    background: wheat;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 55px 50px;
    bottom: 0px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
}


.footer-distributed .footer-left {
    width: 40%;
}

.footer-distributed h3 {
    color: black;
    font: normal 36px 'Open Sans', cursive;
    margin: 0;
}

.footer-distributed h3 span {
    color: lightseagreen;
}


.footer-distributed .footer-links {
    color: black;
    margin: 20px 0 12px;
    padding: 0;
}

.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
}

.footer-distributed .footer-company-name {
    color: #222;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}


.footer-distributed .footer-center {
    width: 35%;
}

.footer-distributed .footer-center i {
    background-color: #33383b;
    color: #ffffff;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    margin: 10px 15px;
    vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
    font-size: 17px;
    line-height: 38px;
}

.footer-distributed .footer-center p {
    display: inline-block;
    color: black;
    font-weight: 400;
    vertical-align: middle;
    margin: 0;
}

.footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
}

.footer-distributed .footer-center p a {
    color: lightseagreen;
    text-decoration: none;
    ;
}

.footer-distributed .footer-links a:before {
    content: "|";
    font-weight: 300;
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
    content: none;
}

.footer-distributed .footer-right {
    width: 20%;
}
.footer-right .footer-company-about p{
    color: black;
}

.footer-distributed .footer-company-about {
    line-height: 20px;
    color: black;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
}

.footer-distributed .footer-company-about span {
    display: block;
    color: black;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-distributed .footer-icons {
    margin-top: 25px;
}

.footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;

    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-right: 3px;
    margin-bottom: 5px;
}
</style>
