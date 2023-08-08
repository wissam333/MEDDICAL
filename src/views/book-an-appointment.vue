<template>
     <!-- Start backgrond -->
     <div class="backimg">
    <nav aria-label="breadcrumb" class="breadcrumb-1">
  <ol class="breadcrumb">
    <RouterLink to="/" class="breadcrumb-item" >Home</RouterLink>
    <RouterLink to="/views/book-an-appointment" class="breadcrumb-item" >Appointment</RouterLink>
  </ol>
  <h1>Book An Appointment</h1>

</nav>
   </div>
    <!-- End backgrond --> 
   <!-- Start book-an-appointment -->
    <div class="book-an-appointment">
        <div class="container">
        <div class="row">
        <div class="col-md-6">
            <h2>Book An Appointment</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
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
        <div class="col-md-6 shedule">
            <div class="shedule-hours container">
                <h1>Shedule Hours</h1>
                <div class="day">
                    <p>Monday</p>  <span><hr> </span> <p>9:00 AM - 7:00PM</p>
                </div>
                <div class="day">
                    <p>Tuesday</p>  <span><hr> </span> <p>9:00 AM - 7:00PM</p>
                </div>
                <div class="day">
                    <p>Wednesday</p>  <span><hr> </span> <p>9:00 AM - 7:00PM</p>
                </div>
                <div class="day">
                    <p>Thursday</p>  <span><hr> </span> <p>9:00 AM - 7:00PM</p>
                </div>
                <div class="day">
                    <p>Friday</p>  <span><hr> </span> <p>9:00 AM - 7:00PM</p>
                </div>
                <div class="day">
                    <p>Saturday</p>  <span><hr> </span> <p>9:00 AM - 7:00PM</p>
                </div>
                <div class="day">
                    <p>Sunday</p>  <span><hr> </span> <p>9:00 AM - 7:00PM</p>
                </div>
                <div class="line"><hr></div>
                <div class="Emergency-call">
        <img src="../assets/Emergency.png" class="d-block-10">
        <div>
          <p>Emergency<br>
          <span>(237) 681-812-255</span></p><br>
        </div>
      </div>
            </div>
        </div>
    </div>
</div>
</div>
   <!-- End book-an-appointment -->

 <!-- start map -->
 <div class="map">
    <div class="container">
        <img src="../assets/Mapview.png" style="max-width: 95%;">
    </div>
</div>
    <!-- End map -->
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
    background-image: url(../src/assets/appointment-64326342243.jpg);
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


/* End bakgroung */


/* start Book An Appointment */
.book-an-appointment{
    padding-top: 5%;
    font-family: var(--secendfont);
}
.book-an-appointment .p2{
    width: 90%;
  }
  .book-an-appointment h2 {
    color: var(--primary);
    font-family: var(--firstfont);
  }
.form {
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.form * {
  width: 100%;
  padding: 1rem;
  text-transform: uppercase;
  border: .5px solid white;
  outline: 0;
  
}



.form-name{
    padding: 0;
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
  color: #eee;
}
.form-first::placeholder{
  color: white;
}
::placeholder{
  color: #eee;
}


/* start  shedule-hours */
.shedule-hours{
    background-color: var(--primary);
    color: white;
    text-align: center;
padding: 30px;

}
.shedule-hours h1 {
    color: var(--Accent) !important;
padding-bottom: 30px;
}
.shedule-hours .day {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

}
.shedule-hours .day span{
    width: 20%;
}
.shedule-hours .day span hr {
    opacity: 1;

}
.shedule-hours .line {
    justify-content: center;
    display: flex;

}
.shedule-hours .line hr {
    width: 80%;
    opacity: 1;
}
.Emergency-call{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: left;

}
.Emergency-call img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
}
@media (max-width: 768px) {
 .shedule{
    order: -1;
    padding-bottom: 50px;
  }
}
/* start map */
.map{
    padding-top: 5%;
    padding-bottom: 5%;

}
/* End map */

/* End shedule-hours */
/* End Book An Appointment */
</style>
<script>
  import cardd from '../components/ccard.vue'
import ffotter from '../components/ffotter.vue'
export default{
    data() {
    
    return{}
  },
  components: {cardd,ffotter },

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