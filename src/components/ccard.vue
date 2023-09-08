<template>
  <div class="get-in-tech">
<div class="top-tex text-center"><p>GET IN TOUCH</p>
<h3>Contact</h3></div>
<div class="cards ">
<div class="container card-del">
<div class="card card22 hidden-n" style="width: 15rem;height: 15rem;">
  <img src="../assets//call222.png" class="card-img-top" alt="..." style=" max-width: 50px;  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
<div class="card-body">
  <h5 class="card-title">EMERGENCY</h5>
  <p class="card-text">(273)681-812-255</p>
  <p class="card-text">(273)681-812-255</p>
</div>
</div>


<div class="card card22 hidden-n" style="width: 15rem;height: 15rem;">
  <img src="../assets//location22.png" class="card-img-top" alt="..." style=" max-width: 35px;  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
<div class="card-body">
  <h5 class="card-title">LOCATION</h5>
  <p class="card-text">0123 Some Place</p>
  <p class="card-text">9876 Some Country</p>
</div>
</div>



<div class="card card22 hidden-n" style="width: 15rem;height: 15rem;">
  <img src="../assets//email22.png" class="card-img-top" alt="..." style=" max-width: 35px;  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);">
<div class="card-body">
  <h5 class="card-title">Email</h5>
  <p class="card-text">fildineeesoe@gmil.com</p>
  <p class="card-text">myebstudi@gmail.com</p>
</div>
</div>



<div class="card card22 hidden-n" style="width: 15rem;height: 15rem;">
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
</template>

<style scoped>
/* Start get in tech  */
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

/* End get in tech  */




@media  (max-width:768px) {

.card{
 width: 100%;
}



}
@media  (min-width:768px) {
.card{
 width: 33.3%;

}

}

.hidden-n{
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
}
.show-s{
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);

}

@media (prefers-reduced-motion) {
  .hidden-n{
  transition: none;
}
}
</style>

<script>
  


</script>