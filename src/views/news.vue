<template>
    <!-- Start backgrond -->
    <div class="backimg">
    <nav aria-label="breadcrumb" class="breadcrumb-1">
  <ol class="breadcrumb">
    <RouterLink to="/" class="breadcrumb-item" >Home</RouterLink>
    <RouterLink to="/views/news" class="breadcrumb-item" >News</RouterLink>
  </ol>
  <h1>Blog Posts</h1>

</nav>
   </div>
    <!-- End backgrond --> 

    <!-- start article -->
   <div class="article">
    <div class="container">
    <div class="row">
    <div class="col-md-8">
        <div class="art1">
            <img src="../assets/art1.png" style="max-width: 95%;">
            <div class="art-ico">
                <p><img src="../assets/calnder.png">Monday 05, September 2021</p>
                <p><img src="../assets/person.png">By Author</p>
                <p><img src="../assets/eyes.png">68</p>
                <p><img src="../assets/heart.png">86</p>

            </div>
        <h2>A passion for putting patients first</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br>
             scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare<br> 
             Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus<br>
              porttitor enim et....</p>
       <RouterLink to="/views/singlenews"><button>Read More <i class="bi bi-arrow-right"></i></button></RouterLink>
    </div>

    <div class="art1">
            <img src="../assets/art2.png" style="max-width: 95%;">
            <div class="art-ico">
                <p><img src="../assets/calnder.png">Monday 05, September 2021</p>
                <p><img src="../assets/person.png">By Author</p>
                <p><img src="../assets/eyes.png">68</p>
                <p><img src="../assets/heart.png">86</p>

            </div>
        <h2>A passion for putting patients first</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br>
             scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare<br> 
             Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus<br>
              porttitor enim et....</p>
              <RouterLink to="/views/singlenews"><button>Read More <i class="bi bi-arrow-right"></i></button></RouterLink>
    </div>


    <div class="art1">
            <img src="../assets/art3.png" style="max-width: 95%;">
            <div class="art-ico">
                <p><img src="../assets/calnder.png">Monday 05, September 2021</p>
                <p><img src="../assets/person.png">By Author</p>
                <p><img src="../assets/eyes.png">68</p>
                <p><img src="../assets/heart.png">86</p>

            </div>
        <h2>A passion for putting patients first</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br>
             scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare<br> 
             Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus<br>
              porttitor enim et....</p>
              <RouterLink to="/views/singlenews"><button>Read More <i class="bi bi-arrow-right"></i></button></RouterLink>
    </div>

    <div class="art1">
            <img src="../assets/art4.png" style="max-width: 95%;">
            <div class="art-ico">
                <p><img src="../assets/calnder.png">Monday 05, September 2021</p>
                <p><img src="../assets/person.png">By Author</p>
                <p><img src="../assets/eyes.png">68</p>
                <p><img src="../assets/heart.png">86</p>

            </div>
        <h2>A passion for putting patients first</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat<br>
             scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare<br> 
             Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus<br>
              porttitor enim et....</p>
              <RouterLink to="/views/singlenews"><button>Read More <i class="bi bi-arrow-right"></i></button></RouterLink>
    </div>

    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link " href="#">Next</a>
    </li>
  </ul>
</nav>
    </div>
    <div class="col-md-4 side-art">
      <div class="but-serch">
        <div class="p">
        <input placeholder="Search">
        <span><i id="searchIcon" class="bi bi-search"></i></span>
      </div>

      <div class="recent-post">
        <h2>Recent Posts</h2>
        <div class="onpost">
          <div><img src="../assets/right-art1.png" style="padding-top: 11px;padding-right: 5px;"></div>
          <div>
            <small>Monday 05, September 2021</small>
            <p>This Article’s Title goes Here, 
but not too long.</p>
          </div>
        </div>

        <div class="onpost">
          <div><img src="../assets/right-art2.png" style="padding-top: 11px;padding-right: 5px;"></div>
          <div>
            <small>Monday 05, September 2021</small>
            <p>This Article’s Title goes Here, 
but not too long.</p>
          </div>
        </div>

        <div class="onpost">
          <div><img src="../assets/right-art3.png" style="padding-top: 11px;padding-right: 5px;"></div>
          <div>
            <small>Monday 05, September 2021</small>
            <p>This Article’s Title goes Here, 
but not too long.</p>
          </div>
        </div>


        <div class="onpost">
          <div><img src="../assets/right-art4.png" style="padding-top: 11px;padding-right: 5px;"></div>
          <div>
            <small>Monday 05, September 2021</small>
            <p>This Article’s Title goes Here, 
but not too long.</p>
          </div>
        </div>


        <div class="onpost">
          <div><img src="../assets/right-art5.png" style="padding-top: 11px;padding-right: 5px;"></div>
          <div>
            <small>Monday 05, September 2021</small>
            <p>This Article’s Title goes Here, 
but not too long.</p>
          </div>
        </div>

        <div class="onpost">
          <div><img src="../assets/right-art6.png" style="padding-top: 11px;padding-right: 5px;"></div>
          <div>
            <small>Monday 05, September 2021</small>
            <p>This Article’s Title goes Here, 
but not too long.</p>
          </div>
        </div>


      </div>

      <div class="recent-post">
        <h2>Categories</h2>
        <div class="onpost1">
          <div class="on-cat">
            <p>Surgery</p><div class="blu-serc"><p>3</p></div>
          </div>
          <div class="on-cat">
            <p>Health Care</p><div class="blu-serc"><p>5</p></div>
          </div>
          <div class="on-cat">
            <p>Medical</p><div class="blu-serc"><p>8</p></div>
          </div>
          <div class="on-cat">
            <p>professional</p><div class="blu-serc"><p>9</p></div>
          </div>
        </div>
        </div>
      </div>
    </div>
   </div>
</div></div>
    <!-- End article -->

    <!-- card -->
    <Cardd/>
    <!--card-->

    <!-- footer -->

    <ffotter/>
    <!-- footer -->
</template>


<style scoped>
/* Start bakgroung */
.backimg{
    background-image: url(../src/assets/news-54135254880.jpg);
  background-position: center;
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


/* Start article */
.article{
    padding-top: 5%;
    font-family: var(--secendfont);
    padding-bottom: 5%;
}
.art1{
    font-family: var(--secendfont);
    padding-bottom: 5%;
}
.art1 h2 {
    font-family: var(--firstfont);
    color: var(--primary);
}
.art1 .art-ico{
    display: flex;
    padding-top: 10px;
    margin-bottom: -10px;
}
.art1 .art-ico p {
    padding: 15px;
}
.art1 .art-ico p img {
  padding-right: 5px;
}
/* End article */

/* start recent post */
.article .p{
  position: relative;
}
.article .p input{
padding: 7px 15px 7px 15px;
border: none;
border-radius: 4px;
background-color: var(--primary);
font-size: 23px;
    width: 100%;
    color: white;
}
.article .p span{
position: absolute;
top: 7px;
    right: 15px;
    font-size: 21px;
    color: white;
    opacity: .6;
}
.article .p input::placeholder{
  color: white;
  opacity: .6;
}
.recent-post .onpost , .onpost1 .on-cat{
  display: flex;
  width: 100%;
}
.recent-post .onpost1 , .onpost1 .on-cat{
  padding: 10px;
}
.recent-post{
  padding: 15px;
  border: 1px solid #ddd;
  margin-top: 20px;
}
.recent-post .onpost small{
  font-size: .75em;
  color: var(--secondery);
}
.recent-post  h2 {
  font-family: var(--firstfont);
  color: var(--primary);
}
.recent-post .onpost p {
  font-weight: bold;
}
.onpost1 .on-cat{
  justify-content: space-between;
}
.onpost1 .on-cat .blu-serc {
  background-color: var(--secondery);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: relative;
}
.onpost1 .on-cat .blu-serc p {
  position: absolute;
    top: 7%;
    left: 30%;
}
/* End recent post */
@media (max-width: 768px) {
 .side-art{
    order: -1;
    padding-bottom: 50px;
  }
}
</style>

<script>
import Cardd from '../components/ccard.vue'
import ffotter from '../components/ffotter.vue'
export default{
  data() {
    
    return{}
  },
  components:{Cardd,ffotter},
}
</script>
