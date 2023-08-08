<script>
import doctors from '../components/doctors.vue'
import News from '../components/News.vue'
import cardd from '../components/ccard.vue'
import ffotter from '../components/ffotter.vue'


export default{
    data(){
        return{}
        
    },
    components:{doctors,News,cardd,ffotter}
}
</script>

<template>
    <!-- Start backgrond -->
   <div class="backimg">
    <nav aria-label="breadcrumb" class="breadcrumb-1">
  <ol class="breadcrumb">
    <RouterLink to="/" class="breadcrumb-item" >Home</RouterLink>
    <RouterLink to="/views/AboutView" class="breadcrumb-item" >About us</RouterLink>
  </ol>
  <h1>About us</h1>

</nav>
   </div>
    <!-- End backgrond -->

<!-- Start best care of your health -->

<div class="best-care-of-your-health">
    <div class="container">
        <div class="row">
        <div class="col-md-4">
            <img src="../assets//nn.png" style="width: 100%;">
        </div>
        <div class="col-md-7 box-patients">
            <p class="hee">WELCOME TO HOSPITAL NAME</p>
             <h1> Best Care For Your  Good Health</h1>
      <div class="pear-circle">
        <div class="chi-pear-circ"><div><span class="blue-circle"></span><span>A Passion for Healing</span></div> 
      <div><span class="blue-circle"></span><span>5-Star Care</span> </div>
        </div>
        
        <div class="chi-pear-circ"><div><span class="blue-circle"></span><span>All our best</span></div> 
      <div><span class="blue-circle"></span><span>Believe in Us</span> </div>
        </div>

        <div class="chi-pear-circ"><div><span class="blue-circle"></span><span>A Legacy of Excellence</span></div> 
      <div><span class="blue-circle"></span><span>Always Caring</span> </div>
        </div>
      </div>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
    </div>
        </div>
    </div>
</div>   

<!-- End best care of your health -->

<!-- Start John Doe -->
<div class="John-Doe">
<div class="overlay"></div>
<div class="cont-john">
    <img src="../assets/qoute.png">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Quisque placerat scelerisque tortor ornare ornare. Quisque<br> placerat scelerisque felis vitae tortor augue. Velit nascetur<br> Consequat faucibus porttitor enim et.</p>
<hr>
<p>John Doe</p>

</div>
</div>   
<!-- End John Doe -->

<!-- start doctors -->
<doctors/>
<!-- end doctors -->

<!-- start news -->
<News/>
<!-- end news -->

<!-- start card -->
<cardd/>
<!-- end card -->

<!-- Start Footer -->
<ffotter/>
<!-- End Footer -->
</template>

<style scoped>
/* Start bakgroung */
.backimg{
    background-image: url(..\assets\aboutus-54135133416526324642364.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  position: relative;}
  .breadcrumb-1{
    top: 33%;
    left: 14%;
    position: absolute;
    
  }
  .breadcrumb-1 h1 ,.box-patients h1{
    color: var(--primary);
  }
  .breadcrumb-1 .breadcrumb-item{
    color: var(--primary);
    text-decoration: none;
  }


/* End bakgroung */


/* Start best care of your health */
.best-care-of-your-health{
    margin-top: 10%;
    margin-bottom: 2%;
max-width: 90%;
}
.box-patients{
  padding: 15px;
  font-family: var(--secendfont);
}
.box-patients .hee{
    color: var(--secondery);
    font-weight: bold;
    font-size: 18px;
}
.box-patients .chi-pear-circ{
  justify-content: space-between;
    display: flex;
    
}
.box-patients .blue-circle{
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: var(--secondery);
  display: inline-flex;
}

.box-patients .pear-circle {
  padding: 15px;
  margin-left: 10px;
  text-align: left;
}
.box-patients .pear-circle div{
font-size: 16px;
    font-weight: bold;
    padding: 0px 0px 8px 0px;
    width: 115%;
  }

/* End best care of your health */


 /* Start John Doe  */
 .John-Doe{
    background-image: url(../assets/John-Doe.png);
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    height: 110%;
    position: relative;
    background-attachment: fixed;
 }
 .overlay{
position: absolute;
width: 100%;
height: 100%;
background-color: var(--primary);
opacity: 0.6;
left: 0;
top: 0;
z-index: 0;
 }
 .cont-john{
    position: relative;
    padding: 60px;
    text-align: center;
    align-items: center;
    color: white;
 }

 .cont-john hr {
    color: white;
    margin: auto;
    width: 25%;
 }

 .cont-john p {
    font-size: 26px;
    padding-top: 35px;
 }
 /* End John Doe  */








/* Start responsive */
@media (max-width: 768px) {
   .box-patients{
    order: -1;
   } 
}

/* End responsive */

</style>