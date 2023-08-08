<template>
    <!-- start background -->
    <div class="backimg">   
        <nav aria-label="breadcrumb" class="breadcrumb-1">
  <ol class="breadcrumb">
    <RouterLink to="/" class="breadcrumb-item" >Home</RouterLink>
    <RouterLink to="/views/ServiceView" class="breadcrumb-item" >Service</RouterLink>
    <RouterLink to="/views/freecheckup" class="breadcrumb-item" >Free Checkup</RouterLink>

  </ol>
  <h1>Free Checkup</h1>

</nav>
    </div>   
    <!-- End background -->
 <!-- start care you can beleve in  -->
 <div class="you-can-beleve-in">
  <div class="container">
  <div class="care-box">
    <div class="box-first col-3" style="height: fit-content;">
      <div class="al-v">
      <div>
        <img src="../assets/checkup.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
        <p>Free Checkup</p>
      </div>
      <div>
        <img src="../assets/cardiogram.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
        <p>Cardiogram</p>
      </div>
      <div>
        <img src="../assets/testing.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
        <p>Dna Testing</p>
      </div>
      <div>
        <img src="../assets/blod-bink.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
        <p>Blood Bank</p>
      </div>
    </div>
      
    </div>
    <div class="box-patients col-9">
        <img src="../assets/fffree.png" style="max-width: 95%;">
      <h1> A passion for putting patients first</h1>
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

  <!-- End care you can beleve in  -->

  <doctors/>
    <Cardd/>
    <ffotter/>
</template>
<style scoped>
/* start background */
.backimg{
    background-image: url(../src/assets/freechackupback-5431262.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  position: relative;
margin-bottom: 5%;
}
  .breadcrumb-1{
    top: 25%;
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
/* End background */
.you-can-beleve-in{
    margin-bottom: 0;
}
</style>
<script>
import doctors from '../components/doctors.vue'
import Cardd from '../components/ccard.vue'
import ffotter from '../components/ffotter.vue'

export default {
    data(){
        return{}
    },
    components:{doctors,Cardd,ffotter},
}
</script>
