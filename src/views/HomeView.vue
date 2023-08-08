<script >
import doctors from '../components/doctors.vue'
import News from '../components/News.vue'
import Cardd from '../components/ccard.vue'
import ffotter from '../components/ffotter.vue'
export default{
  data() {
    
    return{}
  },
  components:{doctors,News,Cardd,ffotter},

  mounted(){
   
     let config = {
      
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true

    }

    flatpickr(".form-control2", config);

    flatpickr(".form-control", {});





  }
}
  

</script>

<template>
  <!-- start background -->
 <div class="caring-for-life">
  <div class="caring-first col-6">
    <p>CARING FOR LIFE</p>
    <h1>Leading the way <br>
      in Medical Excellence
    </h1>
    <button>Our Services</button>
  </div>
<div>

</div>  
</div>
  <!-- End background -->
  <!-- start welcome-to-meddical -->
<div class="welcome-to-med">
  <div class="smoll-card">
  <div class="sc one">
    <p>Book an Appointment</p> <img src="../assets/Calendar.png">
  </div>
  <div class="sc two">
    <p>Book an Appointment</p> <img src="../assets/Team.png">
  </div>
  <div class="sc three">
    <p>Book an Appointment</p> <img src="../assets/Cash.png">
  </div>
</div>

<div class="text-welcom container">
  <p> WELCOME TO MEDDICAL</p>
  <h3>A Great Place to Receive Care</h3>
  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br>
     scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur<br>
      proin massa in. Consequat faucibus porttitor enim et.</small>
    <div>
      <a > Learn More <i class="bi bi-arrow-right"></i></a>
</div>
<img src="../assets/Group183.jpg" >
</div>
</div>
  <!-- end welcome-to-meddical -->

  <!-- start care you can beleve in  -->
  <div class="you-can-beleve-in">
  <div class="container">
<div class="top-tex"><p>CARE YOU CAN BELEVE IN</p>
<h3>Our Service</h3>
</div>
  <div class="care-box">
    <div class="box-first col-2">
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
      <div>
        <button>View All</button>
      </div>
    </div>
    <div class="box-patients col-6">
      <p> A passion for putting patients first</p>
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
    <div class="box-pac col-4">
      <img src="../assets/Group186.jpg" style="max-width: 100%; margin-bottom: 20px;">
      <img src="../assets/Group187.jpg" style="max-width: 100%;">
    </div>
  </div>

</div>
</div>

  <!-- End care you can beleve in  -->


   <!-- start always Caring -->
<div class="always-Caring">
<div class="container">
  <div class="top-tex"><p>AlWAYS CARING</p>
<h3>Our Specialties</h3></div>

<div class="box-card">
  <div class="al-card">
    <div class="onbox">
      <div>
      <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Neurology</p>
    </div>
    </div>
    <div class="onbox">
      <div>
      <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Bones</p></div>
    </div>
      <div class="onbox">
        <div>
        <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Oncology</p></div>
      </div>
        <div class="onbox">
          <div>
          <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Otorhinolaryngology</p></div>
        </div>
        
        
    <div class="onbox">
      <div>
      <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Ophthalmology</p>
    </div>
    </div>
    <div class="onbox">
      <div>
      <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Cardiovascular</p></div>
    </div>
      <div class="onbox">
        <div>
        <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Pulmonology</p></div>
      </div>
        <div class="onbox">
          <div>
          <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Renal.Medicine</p></div>
        </div>
        
    <div class="onbox">
      <div>
      <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Gastroenterology</p>
    </div>
    </div>
    <div class="onbox">
      <div>
      <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Urology</p></div>
    </div>
      <div class="onbox">
        <div>
        <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Dermatology</p></div>
      </div>
        <div class="onbox">
          <div>
          <img src="../assets/Bones.png" style="  filter: invert(61%) sepia(28%) saturate(7334%) hue-rotate(173deg) brightness(96%) contrast(93%);"><p>Gynaecology</p></div>
        </div>
        
</div>
</div>

</div>
</div>

   <!-- End always Caring -->


   <!-- start book a appointment -->
    <div class="book-a-appointment">
      <div class="overlay"></div>
      <div class="container">
        <div class=" p1">
          <div>
          <h2>Book an Appointment</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
        </div>
        </div>
        <div class=" p2">
          <main class='form'>
  <div class='form-name'>
    <input class='form-first' type='text' placeholder='NAME'>
    <select name="gender" class="gender form-first">
      <option>Gender</option>
      <option>Male</option>
      <option>female</option>

    </select>
  </div>
  <div class='form-name'>
    <input class='form-first' type='text' placeholder='Email'>
    <input class='form-first' type='text' placeholder='Phone'>
   
  </div>
  <div class='form-name'>
    <input class='form-first form-control' type='datetime-local' placeholder='Date'>

    <input class='form-first form-control2' type='time-local' placeholder='Time' value="Time">
   
  </div>
  <div class='form-name'>
    <select name="Doctor" class="Doctor form-first">
      <option>Doctor</option>
      <option>Male</option>
      <option>female</option>

    </select>
    <select name="Department" class="Department form-first">
      <option>Department</option>
      <option>Male</option>
      <option>female</option>

    </select>
   
  </div>
  <textArea class='form-comment form-first' placeholder='Message'></textArea>
  <button class='form-submit'>SUBMIT</button>
</main>
        </div>
      </div>
    </div> 

   <!-- End book a appointment -->



   <!-- Start doctors -->
   <doctors/>
   <!-- End doctors -->


   <!-- Start News -->
  <News/>
   <!-- End News -->



<!-- Start get in tech -->
<cardd/>
<!-- Endget in tech -->

<!-- Start Footer -->
<ffotter/>
<!-- End Footer -->
</template>


<style>
/* start background */
.caring-for-life{
  background-image: url(../assets/2023-07-09_132201.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
    position: relative;
}
.caring-first{
  
    position: relative;}

    .caring-first h1 {
      color: var(--primary);
    }
    .caring-first p {
      color: var(--secondery);
      font-family: var(--secendfont);
      font-size: 18px;
      font-weight: bold;
    }

.caring-first button
{
  margin-top: 5px;
}
/* end background */

/* start welcome to meddical */
.welcome-to-med , .you-can-beleve-in{
  position: relative;
  margin-bottom: 10%;
}
.smoll-card{
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
    top: -30px;
}
.smoll-card .sc {
display: flex;
align-items: center;
padding: 20px;
 margin: 10px;
border-radius: 10px;
width: 25%;
justify-content: space-between;
    align-items: end;
    font-family: var(--secendfont);
}
.smoll-card .one {
background-color: var(--primary);
color: white;
}

.smoll-card .two {
  background-color: var(--Accent);
color: var(--primary);
}

.smoll-card .three {
  background-color: var(--secondery);
  color: white;

}
.text-welcom{
padding-top: 12%;
text-align: center;
}
.text-welcom:not(h3){
  font-family: var(--secendfont);

}
.text-welcom p  , .top-tex p{
  color: var(--secondery);
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0rem
}
.text-welcom h3, .top-tex h3 {
  color: var(--primary);
  font-family: var(--firstfont);
}

.text-welcom small {
  font-size: 16px;

}
.text-welcom div {
  margin-bottom: 50px;
margin-top: 25px;
cursor: pointer;
}
.text-welcom img {
  width: 85%;
}

.text-welcom div a{
color: var(--secondery);
}
.text-welcom div i{
color: var(--primary);
font-weight: bold;
}

/* end welcome to meddical */



/* start care you can beleve in */

.you-can-beleve-in{
  text-align: center;
}
.you-can-beleve-in h3{
  margin-bottom:3rem
}
.care-box {
  display: flex;
  padding: 30px;
  font-family: var(--secendfont);
}
.care-box .box-first{
  border: 1px solid #ddd;
  border-radius: 10px;
}
.care-box .box-first .al-v div{
  padding:20px 20px 0px 20px;

}
.care-box .box-first div:not(:last-child){
  padding-bottom: 17px;
}
.care-box .box-first div:last-child button{
width: 100%;
border: none;
background-color: var(--primary);
color: var(--Accent);
padding: 8px;
}
.care-box .box-first div:last-child button:hover , .book-a-appointment .p2 .form-submit:hover{
background-color: var(--secondery);
}

.care-box .al-v div:hover , .box-card  .onbox:hover,.card22:hover{
  color: var(--Accent);
  background-color: var(--primary);
}

.care-box .al-v div:hover img , .box-card  .onbox:hover img,.card22:hover img{
  filter:grayscale(100%) !important;
}

.box-patients{
  padding: 15px;
  
}
.box-patients :first-child{
  font-size: 25px;
  font-weight: bold;

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
/* End care you can beleve in */

/* start always-Caring */
.always-Caring{
  font-family: var(--secendfont);
  text-align: center;
  margin-bottom: 5%;
}
.box-card {
  padding: 30px;
  display: inline-block;
  width: 100%;
}

.box-card .al-card {
  display: flex;
  flex-wrap: wrap;
}

.al-card .onbox{ 
    height: 100%;
    padding: 30px;
    border: 1px solid #eee;
}
.box-card .line .onbox div {
  padding: 40px 30px 40px 30px;
}
/* end always-Caring */


 /*start book-a-appointment */
 .book-a-appointment{
  background-image: url(../assets/Rectangle33.jpg);
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
 }
 .overlay{
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.6);
left: 0;
top: 0;
z-index: 0;
 }

 
 .book-a-appointment .container .p1,.p2{
  z-index: 1;
  align-items: center;
 }
 .book-a-appointment .p1 h2{
  font-family: var(--firstfont);
  color: var(--secondery);
  font-size: 32px;
 }
 .form {
  display: flex;
  flex-direction: column;
}

.form * {
  width: 100%;
  padding: 1rem;
  text-transform: uppercase;
  border: .5px solid white;
  outline: 0;
  
}





.form-submit {
  cursor: pointer;
    background-color: var(--Accent);
    font-family: var(--secendfont);
    color: var(--primary);
    border: none;
    font-weight: bold;
}

.form-submit:active {
  background-color: rgba(255,255,255,0.95);
  color: rgb(178, 207, 195);
}

.form-first{
  background-color: var(--primary);
  color: #eeeeeec6;
  

}
.form-first::placeholder{
  color: white;
  opacity: .6;
}
::placeholder{
  color: #eee;
  opacity: .6;

}



 /*End book-a-appointment */




 



/* Start responsive */


@media(max-width: 750px){
  .caring-for-life{

background-position: top left 75%;

  }
  .caring-first{
    top: calc(30% + 48px);
    left:calc(13% - 40px); 
    width: 70%;
  }
  .welcome-to-med .smoll-card{
    display: none;
  }
  .you-can-beleve-in .care-box {
    flex-direction: column;
  }
  .you-can-beleve-in .care-box .box-first ,  .you-can-beleve-in .care-box .box-patients ,   .you-can-beleve-in .care-box .box-pac{
    width: 100%;
  }

  .book-a-appointment .p1{
    width: 90%;
  }
  .book-a-appointment .p2{
    width: 90%;
  }
  .book-a-appointment .container {
  display: grid;
  align-items: center;
 }
 .form-comment {
  height: 30%;
}
.form {
  padding: 5px;
}
.form-name {
  display: block;
 
  padding: 0;
}


}

@media (max-width: 470px) {
  .al-card .onbox{
    overflow: scroll;

  }
}
@media (max-width: 1000px) {
  .box-card .line{
    flex-direction: column;
  }
  .al-card .onbox{ 
  width: 50%;
}

}

@media (min-width: 1000px) {
  .al-card .onbox{ 
  width: 25%;
}

}
@media(min-width: 750px){
  .caring-for-life{

background-position:top right;
  }
  .caring-first{
    top: 28%;
    left: 13%;
  }
  .book-a-appointment .p1{
    width: 50%;
  }
  .book-a-appointment .p2{
    width: 50%;
  }
  .book-a-appointment .container {
  display: flex;
  align-items: center;
 }
 .form-comment {
  height: 13rem;
}
.form {
  padding: 30px;
}
.form-name {
  display: flex;
  padding: 0;
}

}








/* End responsive */

</style>