let div = document.querySelector(".fixed-top")
var height = document.querySelector(':root');
height.style.setProperty('--height', div.clientHeight + "px");


      let hiddenele = document.querySelectorAll('.hidden-n')
      let observe = new IntersectionObserver((entries) =>{
        entries.forEach((entry)=>{
          console.log(entry)
          if(entry.isIntersecting){
            entry.target.classList.add('show-s');
          }else {
            entry.target.classList.remove('show-s');

          }
        })
      });
      hiddenele.forEach((el)=>{observe.observe(el)});

