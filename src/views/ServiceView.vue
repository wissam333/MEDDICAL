<template>
    <div class="backimg">   
        <nav aria-label="breadcrumb" class="breadcrumb-1">
  <ol class="breadcrumb">
    <RouterLink to="/" class="breadcrumb-item" >Home</RouterLink>
    <RouterLink to="/views/ServiceView" class="breadcrumb-item" >Service</RouterLink>
  </ol>
  <h1>Our Service</h1>

</nav>
    </div>    
    <div class="cardss container">  
        <div class="row">
            <div class="card col-md-4" >
                <div class="card-img">
                    <div class="overlay">
                        <img src="../assets//cardonhover.png">
                    </div>
                    <img src="../assets/freech.png" class="card-img-top" alt="...">
                    <div class="firs-chaeke"><div class="chek"></div></div>
                </div>
  <div class="card-body">
    
    <h4 class="card-title">Free Checkup</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in..</p>
    <RouterLink to="/views/freecheckup" > <a class="btn "><span> Learn more</span> <i class="bi bi-arrow-right"></i></a></RouterLink>
  </div>
</div>
<div class="card col-md-4" >
                <div class="card-img">
                    <div class="overlay">
                        <img src="../assets//cardonhover.png">
                    </div>
                    <img src="../assets/freech.png" class="card-img-top" alt="...">
                    <div class="firs-chaeke"><div class="chek"></div></div>
                </div>
  <div class="card-body">
    
    <h4 class="card-title">Free Checkup</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in..</p> 
    <RouterLink to="/views/freecheckup" > <a class="btn "><span> Learn more</span> <i class="bi bi-arrow-right"></i></a></RouterLink>
  </div>
</div>

<div class="card col-md-4" >
                <div class="card-img">
                    <div class="overlay">
                        <img src="../assets//cardonhover.png">
                    </div>
                    <img src="../assets/freech.png" class="card-img-top" alt="...">
                    <div class="firs-chaeke"><div class="chek"></div></div>
                </div>
  <div class="card-body">
    
    <h4 class="card-title">Free Checkup</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in..</p>
    <RouterLink to="/views/freecheckup" > <a class="btn "><span> Learn more</span> <i class="bi bi-arrow-right"></i></a></RouterLink>
  </div>
</div>
<div class="card col-md-4" >
                <div class="card-img">
                    <div class="overlay">
                        <img src="../assets//cardonhover.png">
                    </div>
                    <img src="../assets/freech.png" class="card-img-top" alt="...">
                    <div class="firs-chaeke"><div class="chek"></div></div>
                </div>
  <div class="card-body">
    
    <h4 class="card-title">Free Checkup</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in..</p>
    <RouterLink to="/views/freecheckup" > <a class="btn "><span> Learn more</span> <i class="bi bi-arrow-right"></i></a></RouterLink>
  </div>
</div>
<div class="card col-md-4" >
                <div class="card-img">
                    <div class="overlay">
                        <img src="../assets//cardonhover.png">
                    </div>
                    <img src="../assets/freech.png" class="card-img-top" alt="...">
                    <div class="firs-chaeke"><div class="chek"></div></div>
                </div>
  <div class="card-body">
    
    <h4 class="card-title">Free Checkup</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in..</p> 
    <RouterLink to="/views/freecheckup" > <a class="btn "><span> Learn more</span> <i class="bi bi-arrow-right"></i></a></RouterLink>
  </div>
</div>

<div class="card col-md-4" >
                <div class="card-img">
                    <div class="overlay">
                        <img src="../assets//cardonhover.png">
                    </div>
                    <img src="../assets/freech.png" class="card-img-top" alt="...">
                    <div class="firs-chaeke"><div class="chek"></div></div>
                </div>
  <div class="card-body">
    
    <h4 class="card-title">Free Checkup</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in..</p>
    <RouterLink to="/views/freecheckup" > <a class="btn "><span> Learn more</span> <i class="bi bi-arrow-right"></i></a></RouterLink>
  </div>
</div>

        </div>
    </div>

    <cardd/>
    <ffotter/>
</template>
<style scoped>
/* Start background */
.backimg{
    background-image: url(../assets/servicebackground-624357821235782.jpg);
  background-position: left;
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
/* End background */

/* Start Cards */
.cardss{
    padding-top: 11%;
    font-family: var(--secendfont);
    padding-bottom: 11%;

}

.card {
    margin: 10px;
}
.firs-chaeke ,.card-img{
    position: relative;
}
.firs-chaeke .chek {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: var(--primary);
    background-image: url(../assets//checkup.png);
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    right: 5px;
    top: -45px;
    display: block;
}
.card-body{
    padding-top: 35px;
}
.card-body h4 {
    color: var(--primary);
    font-weight: bold;
}
.card-body a span {
    color: var(--secondery);
}
.card-body a i {
    font-size: 20px;
    color: var(--primary);
}
.card-img .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    opacity: .7;
    display: none;
    
}
.card-img .overlay img {
    position: absolute;
    top: 45%;
    left: 45%;
}
.card-img:hover .overlay {
    display: block;
}
.card-img:hover .firs-chaeke .chek {
    display: none;
}
@media  (max-width:768px) {
 
 .card{
   width: 95%;
 }



}
@media  (min-width:768px) {
 .card{
   width: 30%;

 }

}
/* End Cards */
</style>
<script>
import cardd from '../components/ccard.vue'
import ffotter from '../components/ffotter.vue'


export default{
    data(){
        return{}
        
    },
    components:{cardd,ffotter}
}

</script>
