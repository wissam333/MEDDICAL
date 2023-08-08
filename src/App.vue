<script >
export default{
  data() {
    
    return{}
  },
  mounted(){
    document.getElementById('searchIcon').onclick = function() {
  document.getElementById('search').classList.add("visible");
  document.getElementById('clear').classList.add("visible");
  document.getElementById('search').focus();
  document.getElementById('searchIcon').classList.add("hide");
}
document.getElementById('clear').onclick = function() {
  document.getElementById('searchIcon').classList.remove("hide");
  document.getElementById('search').classList.remove("visible");
  document.getElementById('clear').classList.remove("visible");
}
var liactive = document.querySelectorAll(".navbar-collapse .navbar-nav .nav-item ");

function handelActive(ev){
  ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
      element.classList.remove("active");
    })
    ev.target.classList.add("active");
}
liactive.forEach(element =>{
  element.addEventListener("click",(e=>{
    handelActive(e);
  }))
})


var plapla = document.querySelector(".navbar-nav")
plapla.addEventListener("click",e=>{
  $('.collapse').collapse('hide');
})
  }
}
</script>

<template>
  <header class="fixed-top">
    <div class="all-he">
    <div class="container">
    <div class="head">
    <!-- start head -->
      <div class="h"><h1><span>MED</span><span>DICAL</span></h1></div>
      <div class="conten-hea">
      <div class="one-con">
        <img src="../src/assets/call.png" class="d-block-10">
        <div>
          <p>Emergency<br>
          <span>(237) 681-812-255</span></p><br>
        </div>
      </div>
      <div class="one-con">
        <img src="../src/assets/time.png" class="d-block-10">
        <div>
          <p>Work Hour <br>
          <span>09:00 - 20:00 Everyday</span></p>
        </div>
      </div>
      <div class="one-con">
        <img src="../src/assets/locaion.png" class="d-block-10">
        <div>
          <p>Location <br>
          <span> Some Place</span></p>
        </div>
      </div>
    </div>
    </div>
    <!-- End head -->
    <div style="display: flex;"></div>
  </div>
</div>
   <!--start nav-->
   <nav class="navbar navbar-expand-lg ">
    <div class="container">
  <a class="navbar-brand" href="#"><div class="h"><h1><span>MED</span><span>DICAL</span></h1></div></a>
  <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <RouterLink to="/" aria-current="page" class="nav-link">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/views/AboutView" class="nav-link ">About us</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/views/ServiceView" class="nav-link ">Service</RouterLink>
      </li><li class="nav-item">
        <RouterLink to="/views/Doctors" class="nav-link ">Doctors</RouterLink>
      </li><li class="nav-item">
        <RouterLink to="/views/news" class="nav-link ">News</RouterLink>
      </li><li class="nav-item">
        <RouterLink to="/views/contact" class="nav-link ">Contact</RouterLink>
      </li> 
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <div class="appointment search-wrap">
<i id="searchIcon" class="bi bi-search"></i>
<input type="text" id="search">
<i id="clear" class="material-icons">clear</i>
        <button>Appointment</button>

      </div>
     
    </form>
  </div>
</div>
</nav>
<!--End nav-->
  </header>





  <RouterView />
</template>

<style >


/* start head */
.head {
  display: flex;
  background-color: white;
  padding-top: 10px;
}
.all-he{
  background-color: white;
}
h1 {
  font-family: var(--firstfont);
}
.head .conten-hea{
  display: flex;
  margin-right: 5%;
  width: 100%;
  flex-flow: wrap;
    justify-content: center;
}
.head .conten-hea .one-con{
  margin-right: 5%;
}
.head .conten-hea img {
  max-height: 30px;
  margin-top: 2%;
  margin-right: 5px;
}
.head .conten-hea div {
  display: flex;
  font-family: var(--secendfont);
}

.h :nth-child(2) {
  color: var(--secondery);
}
.conten-hea .one-con span{
  font-size: 16px;
    font-weight: bold;

}
.head p:not(span){
  color: var(--primary);
  font-weight: bold;
}
/* End head */

/* Start nav */
.navbar{
  background-color: var(--primary);
}
.navbar .navbar-collapse{
  justify-content: space-between;
}


.nav-item{
padding: 10px;
}

.nav-item .nav-link{
color: white;
font-family: var(--secendfont);

}
.navbar form .appointment button , .caring-first button , .article .art1  button
{
  margin-left: 20px;
  padding: 10px 20px 10px 20px;
  border-radius: 50px;
background-color: var(--Accent);
font-family: var(--secendfont);
color: var(--primary);
border: none;
font-weight: bold;
}
.navbar form .appointment button:hover , .caring-first button:hover ,.article .art1  button:hover{
  background-color: var(--secondery);
}


.navbar form .appointment i{

font-size: 20px;
    color: white;
}
.navbar-nav .nav-item .nav-link:hover {
  color: var(--Accent);
}
.navbar-nav .nav-item .nav-link.active {
  color: var(--Accent);
}

/* search-cion */
.search-wrap{
  position: relative;
}

#searchIcon.hide{
  display:none;
}
#search {
  color: var(--primary);
  background-color: var(--Accent);
  border:none;
  border-radius: 10px;
  width: 0%;
  margin-top: 0.25em;
  outline: none;
  cursor: text;
  visibility: hidden;
  transition: 0.8s;  
}
#search.visible{
  width:50%;
  visibility: visible;
  
}
#clear {  
  width: 5%;  
  display: inline-block;
  position: absolute;
  left: 37%;
  top: 4px;
  opacity:0;
  transition:1.8s;
  color: var(--primary);
}
#clear.visible{
  opacity:1;
}
#clear:hover {
  cursor: pointer;
}
/* search-icon */

/* End nav */



/* start responsive */

@media(max-width: 992px){
  .all-he .head .h{
    display: none;
  }
  .navbar .navbar-brand{
  display: block;
}
}
@media(min-width: 992px){
  .all-he .head .h{
    display: block;
  }
  .navbar .navbar-brand{
  display: none;
}
}


/* End responsive */

</style>
