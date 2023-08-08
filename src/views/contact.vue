<template>
     <!-- Start backgrond -->
   <div class="backimg">
    <nav aria-label="breadcrumb" class="breadcrumb-1">
  <ol class="breadcrumb">
    <RouterLink to="/" class="breadcrumb-item" >Home</RouterLink>
    <RouterLink to="/views/contact" class="breadcrumb-item" >Contact</RouterLink>
  </ol>
  <h1>Our Contacts</h1>

</nav>
   </div>
    <!-- End backgrond -->


    <!-- start map -->
    <div class="map">
    <div class="container">
        <img src="../assets/Mapview.png" style="max-width: 95%;">
    </div>
</div>
    <!-- End map -->
    <!-- Start contact -->
    <div class="get-in-touch container">
        <div class="col-md-6">
            <div class="top-tex"><p>GET IN TOUCH</p>
<h3>Contact</h3></div>
            <div class=" p2">
          <main class='form'>
  <div class='form-name'>
    <input class='form-first' type='text' placeholder='NAME'>
    <input class='form-first' type='text' placeholder='Email'>

  </div>
  <div class='form-name'>
    <input class='form-first' type='Subject' placeholder='Subject'>
   
  </div>
  <textArea class='form-comment form-first' placeholder='Message'></textArea>
  <button class='form-submit'>SUBMIT</button>
</main>
        </div>
        </div>
        <div class="col-md-6">
            
<div class="cards">
  <div class="container">
  <div class="card card22" style="width: 15rem;height: 15rem;">
    <img src="../assets//call222.png" class="card-img-top" alt="..." style=" max-width: 50px;  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
  <div class="card-body">
    <h5 class="card-title">EMERGENCY</h5>
    <p class="card-text">(273)681-812-255</p>
    <p class="card-text">(273)681-812-255</p>
  </div>
</div>


<div class="card card22" style="width: 15rem;height: 15rem;">
    <img src="../assets//location22.png" class="card-img-top" alt="..." style=" max-width: 35px;  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
  <div class="card-body">
    <h5 class="card-title">LOCATION</h5>
    <p class="card-text">0123 Some Place</p>
    <p class="card-text">9876 Some Country</p>
  </div>
</div>



<div class="card card22" style="width: 15rem;height: 15rem;">
    <img src="../assets//email22.png" class="card-img-top" alt="..." style=" max-width: 35px;  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
  <div class="card-body">
    <h5 class="card-title">Email</h5>
    <p class="card-text">fildineeesoe@gmil.com</p>
    <p class="card-text">myebstudi@gmail.com</p>
  </div>
</div>



<div class="card card22" style="width: 15rem;height: 15rem;">
    <img src="../assets//time22.png" class="card-img-top" alt="..." style=" max-width: 35px;  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
  <div class="card-body">
    <h5 class="card-title">Working Hours</h5>
    <p class="card-text">Mon-Sat 09:00-20:00</p>
    <p class="card-text">Sunday Emergency</p>
  </div>
</div>
</div>
</div>
        </div>
    </div>
    <!-- End contact -->
<News/>
<ffotter/>
</template>
<style scoped>
/* Start bakgroung */
.backimg{
    background-image: url(../assets/contactus2222.jpg);
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  position: relative;}
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


/* End bakgroung */

/* start map */
.map{
    padding-top: 5%;
    padding-bottom: 5%;

}
/* End map */

/* card */
.get-in-touch{
    display: flex;
    margin-bottom: 5%;
}
.card{
  padding: 45px 20px 20px 20px;
  background-color: var(--Accent);
  color: var(--primary);
margin: 10px;
text-align: start;
 }
 .cards .container{
  display: flex;
  justify-content: center;  
  flex-wrap: wrap;
 }
 .card .card-body h5{
font-weight: bold; 
}

 .card img {
  margin-left: 10px;
 }
.cards{
  margin-bottom: 20px;
  margin-top: 40px;
}
 .top-tex{
    margin-left: 40px;
 }
 .card22:hover{
  color: var(--Accent);
  background-color: var(--primary);
}
 /* End get in tech  */




 @media  (max-width:768px) {
 
 .card{
   width: 100%;
 }



}
@media  (max-width:1200px) {
.get-in-touch{
    flex-direction: column;
}
}
@media  (min-width:768px) {
 .card{
   width: 33.3%;

 }

}
</style>
<script>
import News from '../components/News.vue'
import ffotter from '../components/ffotter.vue'

export default{
    data() {
    
    return{}
  },
  components:{News,ffotter},
}
</script>
