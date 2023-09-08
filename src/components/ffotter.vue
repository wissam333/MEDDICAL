<template>
    <div class="footer-end">
  <div class="container">
  <div class="my-foo-tt"> 
    <div class="col-md-3 las-al-lin-str"> 
      <h1>MEDDICAL</h1>
      <p>
        Leading the Way in Medical
Execellence, Trusted Care.      </p>
    </div>
    <div class="col-md-3 las-al-lin-str"> 
      <strong>
        Important Link
      </strong>
      <div class="p">
       <p><Router-Link to="/views/book-an-appointment">Appointment</Router-Link></p> 
       <p><Router-Link to="/views/Doctors">Doctors</Router-Link> </p>
        <p><Router-Link to="/views/ServiceView">Services</Router-Link></p>
        <p><Router-Link to="/views/AboutView">About Us</Router-Link></p>
      </div>
</div>
<div class="col-md-3 las-al-lin-str"> 
  <strong>
    Contact Us
      </strong>
      <div class="p">
       <p>Call: (237) 681-812-255</p> 
       <p> Email: fildineesoe@gmail.com</p>
        <p>Address: 0123 Some place</p>
        <p>Some country</p>
      </div>

</div>
<div class="col-md-3 las-al-lin-str"> 
  <strong>
    Newsletter
      </strong>
      <div class="p">
        <input placeholder="Enter your email">
        <span><img src="../assets/emailsend.png"></span>
      </div>
</div>

  </div>
  <hr>
  <div style="display: flex;justify-content: space-between;"> 
  <div style="width: 50%;">
  <small>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</small>
</div >
  <div class="all-i-ic"> 
    <i class="bi bi-facebook"></i>
    <i class="bi bi-twitter"></i>
    <i class="bi bi-instagram"></i>
    <i class="bi bi-youtube"></i>
  </div>
</div>
</div>
</div>
</template>
<style scoped>


 /* Start footer */

 .footer-end{
  background-color: var(--primary);
  color: white;
  display: flex;
  margin-top: 5%;
  padding: 5%;
}
.all-i-ic{
  display: flex;
    align-items: center;
    width: 40%;
    justify-content: end;
    padding: 11px;
}
.all-i-ic i{
  font-size: 130%;
    padding-right: 5%;
    cursor: pointer;
}
.las-al-lin-str .p p{
  margin-bottom: 10px;
}
.las-al-lin-str .p p a {
  color: white;
  text-decoration: none;

}
.las-al-lin-str .p{
  position: relative;
}
.las-al-lin-str .p input{
padding: 7px 15px 7px 15px;
border: none;
border-radius: 4px;
background-color: var(--Accent);
font-size: 18px;
    width: 100%;
}
.las-al-lin-str .p span{
position: absolute;
top: 6px;
    right: 15px
}
.las-al-lin-str .p input::placeholder{
  color: var(--primary);
}

/* End footer */

@media  (max-width:1000px){
    .my-foo-tt{
  flex-direction: column;
}
.las-al-lin-str{
  margin-bottom: 6%;
}
.las-al-lin-str .p{
  margin-top: 4%;
}
.my-foo-tt{
  margin-top: 10%;
}
}
@media  (min-width:1000px) {
    .las-al-lin-str .p{
  margin-top: 10%;
}
.my-foo-tt{
  display: flex;margin-top: 3%;}
}
</style>

<script>

export default {
  
}
</script>
