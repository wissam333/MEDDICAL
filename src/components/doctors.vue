<template>
     <section id="slider" class="pt-5">
  <div class="container">
    <div class="top-tex text-center"><p>TRUSTED CARE</p>
<h3>Our Doctorc</h3></div>
      <div class="slider">
                <div class="owl-carousel">
                    <div class="slider-card">
                        <div class="d-flex justify-content-center align-items-center mb-2">
                            <img src="../assets//Rectangle20.jpg"  alt="" class="d-block w-100">
                        </div>
                         <span ><p class="text-center p-0 m-0">Doctor Name</p></span>
                         <h5 class="text-center p-1">NEUROLOGY</h5>
                        <p class="text-center " style="display: flex;justify-content: center;"><img src="../assets/linkedIn.png" style="max-width: 18px;margin-right: 10px;"><img src="../assets/facebook.png" style="max-width: 18px;margin-right: 10px"><img src="../assets/instgram.png" style="max-width: 18px"></p>
                        <button>View profile</button>
                      </div>
                      <div class="slider-card">
                        <div class="d-flex justify-content-center align-items-center mb-2">
                            <img src="../assets/Rectangle20(1).jpg"  alt="" class="d-block w-100">
                        </div>
                         <span ><p class="text-center p-0 m-0">Doctor Name</p></span>
                         <h5 class="text-center p-1">NEUROLOGY</h5>
                        <p class="text-center " style="display: flex;justify-content: center;"><img src="../assets/linkedIn.png" style="max-width: 18px; margin-right: 10px"><img src="../assets/facebook.png" style="max-width: 18px;margin-right: 10px"><img src="../assets/instgram.png" style="max-width: 18px;"></p>
                        <button>View profile</button>
                      </div>
                      <div class="slider-card">
                        <div class="d-flex justify-content-center align-items-center mb-2">
                            <img src="../assets/Rectangle20(2).jpg"  alt="" class="d-block w-100">
                        </div>
                         <span ><p class="text-center p-0 m-0">Doctor Name</p></span>
                         <h5 class="text-center p-1">NEUROLOGY</h5>
                        <p class="text-center " style="display: flex;justify-content: center;"><img src="../assets/linkedIn.png" style="max-width: 18px; margin-right: 10px"><img src="../assets/facebook.png" style="max-width: 18px;margin-right: 10px"><img src="../assets/instgram.png" style="max-width: 18px;"></p>
                        <button>View profile</button>
                      </div>
                      <div class="slider-card">
                        <div class="d-flex justify-content-center align-items-center mb-2">
                            <img src="../assets/Rectangle20.jpg"  alt="" class="d-block w-100">
                        </div>
                         <span ><p class="text-center p-0 m-0">Doctor Name</p></span>
                         <h5 class="text-center p-1">NEUROLOGY</h5>
                        <p class="text-center " style="display: flex;justify-content: center;"><img src="../assets/linkedIn.png" style="max-width: 18px; margin-right: 10px"><img src="../assets/facebook.png" style="max-width: 18px;margin-right: 10px"><img src="../assets/instgram.png" style="max-width: 18px;"></p>
                        <button>View profile</button>
                      </div>
                      <div class="slider-card">
                        <div class="d-flex justify-content-center align-items-center mb-2">
                            <img src="../assets/Rectangle20(2).jpg"  alt="" class="d-block w-100">
                        </div>
                         <span ><p class="text-center p-0 m-0">Doctor Name</p></span>
                         <h5 class="text-center p-1">NEUROLOGY</h5>
                        <p class="text-center " style="display: flex;justify-content: center;"><img src="../assets/linkedIn.png" style="max-width: 18px; margin-right: 10px"><img src="../assets/facebook.png" style="max-width: 18px;margin-right: 10px"><img src="../assets/instgram.png" style="max-width: 18px;"></p>
                        <button>View profile</button>
                      </div>
                     
                </div>
            </div>
  </div>
</section>
</template>

<script>

export default {
    data() {
        return{}
        
    },
    mounted(){
    // Owlcarousel
    $(document).ready(function(){
  
    $(".owl-carousel").owlCarousel({
    margin:10,
    nav:true,
    dots: true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    center: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  }); 
   
});
},
    name:'doctors'
   
}
</script>
<style scoped>
/* start Doctors */

.slider {
  margin-bottom: 11%;
  position: relative;
  font-family: var(--secendfont);
}
.slider .owl-item.active.center .slider-card {
  transform: scale(1.15);
  opacity: 1;
 background-color: var(--Accent);
  color:var(--primary);
}
.slider-card {
  padding: 0px 0px;
  background-color: var(--Accent);
  margin: 50px 10px 90px 10px;
  border-radius: 5px;
  box-shadow: 0 15px 45px -20px rgb(0 0 0 / 73%);
  transform: scale(0.9);
  opacity: 0.5;
  transition: all 0.3s;

}
.slider-card img {
  border-radius: 5px 5px 0px 0px;
}
.slider-card h5{
  font-weight: bold;
}
.slider-card button{
    cursor: pointer;
    background-color: var(--primary);
    font-family: var(--secendfont);
    color: white;
    border: none;
    width: 100%;
    padding: 7px;
}
.slider-card button:hover{
  background-color: var(--secondery);
  transition: all .3s;


}

 /* End Doctors */

 @media (max-width: 1000px) {
    .slider-card {
  
  max-width: 100%;
  max-height: 100%;
}
@media (min-width: 1000px) {
    .slider-card {
  max-width: 75%;
  max-height: 75%;
}
}
@media (max-width: 500px) {
  .slider-card h5{
    font-size: 1rem;
  }
}
@media (max-width:400px) {
  .slider-card h5{
    font-size: .7rem;
  }
}
 }
</style>