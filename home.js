  function hover(visible) {
        if (!window.disableHover) {
          document.getElementById('bgblur').style.visibility = visible;
        }
      }

     

      function project() {
        window.disableHover = true;
        document.getElementById('bgblur').style.visibility = "hidden";

        const drops = document.querySelectorAll('.drophover');
        drops.forEach(el => {
          el.classList.remove('drophover');
          el.removeAttribute('onmouseover');
          
          el.removeAttribute('onmouseout');
        });

       
      }

  function clickeds() {


   

  window.disableHover = true;
  document.getElementById('bgblur').style.visibility = "hidden";

  const drops = document.querySelectorAll('.drop');
  drops.forEach(el => {
    el.classList.remove('drophover');
    el.removeAttribute('onmouseover');
    el.removeAttribute('onmouseout');
   
    
  });
}

  function openproj(){
  setTimeout(function () {
          window.location.href = "D://New folder//coding//my website//project//project.html";
          
        }, 6000);}


function ends(bgend){



  const root = document.documentElement;
      root.style.setProperty('--bgimgends', `url(${bgend})`);


  let container = document.querySelector(".maincontent");
  for (var i = 0; i <= 280; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);

  }
  let block = document.querySelectorAll('.block');
  let animation = anime.timeline({
    targets: block,
    easing: "easeInOutExpo",
    
    
  })

animation
  .add({
    scale:0,
    

translateX: function(){ return anime.random(-360,2100);},
translateY: function(){ return anime.random(-360,2100);},
rotate: function(){ return anime.random(-360,360);},
duration: function(){return anime.random(500,3000);}
du

  })



    
  .add({
    scale:1,
    

translateX: 0,
translateY: 0,
rotate: 0,
duration: function(){return anime.random(500,3000);}

  }) 

   setTimeout(function () {
          document.getElementById("main").style.visibility="visible";
         
        }, 1200);
 
}
 

