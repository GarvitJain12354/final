
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    speed: 600,
    spaceBetween: 30,

    breakpoints: {
      1024: {
        slidesPerView: "5",
      },
    },


    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2,
    },

  });

  function click(){
    document.querySelectorAll(".swiper-slide").forEach(function(elem){
        elem.addEventListener("click",function(){
            const href = this.getAttribute('data-href');
          document.querySelector(href).style.display = "flex"
            // elem.childNodes[5].style.display= "flex"
      
            document.querySelector("#cross").style.display = "flex"
        
             document.querySelector("#page4").style.display = "none"
            document.querySelector("#page5").style.display = "none"
       document.querySelector("#bottom").style.zIndex = "9"
           
        })
      
    })


    document.querySelector("#cross").addEventListener("click",function(){
        document.querySelectorAll(".pop").forEach(function(e){
            e.style.display= "none"
       
          
          
            document.querySelector("#cross").style.display = "none"
            document.querySelector("#page4").style.display = "inherit"
            document.querySelector("#page5").style.display = "flex"
       document.querySelector("#bottom").style.zIndex = "9999999999999999"

          
         
   
        })
    })


    document.querySelectorAll(".right button").forEach(function(elem){
        elem.addEventListener("click",function(){
            document.querySelectorAll(".pop").forEach(function(e){
                e.style.display= "none"
               
                
                document.querySelector("#cross").style.display = "none"
                document.querySelector("#page4").style.display = "inherit"
                document.querySelector("#page5").style.display = "flex"
       document.querySelector("#bottom").style.zIndex = "9999999999999999"
               
            })
        }) 
    })
    
     
  }
  click()


  document.querySelector(".f2 h2").addEventListener("click",function(){
    window.scrollTo(0,0)
});

var flag = 0
document.querySelector("#menu").addEventListener("click",function(){
    if(flag ===0){
        document.querySelector("#l1").style.transform = "rotate(-48deg) translateY(10px) translateX(10px)"
        document.querySelector("#l2").style.transform = "rotate(45deg) translateY(-20px)"
        document.querySelector("#l2").style.width = "80%"
        document.querySelector("#mpage").style.display = "flex"
        var tl = gsap.timeline()
        tl
        .to("#lp1",{
            width:"100%",
            
        
        })
        .to("#lp2",{
            width:"100%",
           
        },"-=.3")
        .to("#lp3",{
            width:"98%",
            
        
        },"-=.3")
        flag = 1
    }
else{
    document.querySelector("#l1").style.transform = "rotate(0deg) translateY(0px) translateX(0px)"
    document.querySelector("#l2").style.transform = "rotate(0deg) translateY(0px)"
    document.querySelector("#l2").style.width = "50%"
    var tl = gsap.timeline()
    tl
    .to("#lp3",{
        width:"0%",
        
    
    })
    .to("#lp2",{
        width:"0%",
        
    
    },"-=.3")
    .to("#lp1",{
        width:"0%",
        onComplete:function(){
            document.querySelector("#mpage").style.display = "none"
        }
    
    
    },"-=.3")
    

    flag = 0
}
})
document.querySelectorAll("#lp3 a").forEach(function(a){
    a.addEventListener("click",function(){
        document.querySelector("#l1").style.transform = "rotate(0deg) translateY(0px) translateX(0px)"
        document.querySelector("#l2").style.transform = "rotate(0deg) translateY(0px)"
        document.querySelector("#l2").style.width = "50%"
        var tl = gsap.timeline()
        tl
        .to("#lp3",{
            width:"0%",
            
        
        })
        .to("#lp2",{
            width:"0%",
            
        
        },"-=.3")
        .to("#lp1",{
            width:"0%",
            onComplete:function(){
                document.querySelector("#mpage").style.display = "none"
            }
        
        
        },"-=.3")
        
    
        flag = 0
    })
})

function nav(){
gsap.to("#bottom",{
    scrollTrigger:{
        trigger:"#page2",
        start:"top top",
        
        // markers:true ,
        scrub:.5,
        end:"10% 5%"
    },
    height:"5vw",
    display:"flex"
})
}
nav()

function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function(elem){
        
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        
        spanParent.classList.add("parent")
        spanChild.classList.add("child")
        
        spanChild.innerHTML = elem.innerHTML;
        // console.log(spanChild.textContent)
        spanParent.appendChild(spanChild);
        
        elem.textContent = "";
        elem.appendChild(spanParent);
    })
  }
  revealToSpan()

  function textanimation(){
    gsap.from("#sec1  .child",{
   scrollTrigger:{
trigger:"#page2",

start:"-12% top",

   },
        opacity:0,
        y:"100%",
        ease:Expo.ease,
        stagger:{
            amount:.2
        },
        
      })

      gsap.from("#sec2 .child",{
        scrollTrigger:{
     trigger:"#sec2",
     
     start:"-15% top"
        },
             opacity:0,
             y:"100%",
             ease:Expo.ease,
             stagger:{
                 amount:.2
             },
             
           })


           gsap.from("#page3 .child",{
            scrollTrigger:{
         trigger:"#page3",
         
         start:"-10% top"
            },
                 opacity:0,
                 y:"100%",
                 ease:Expo.ease,
                 stagger:{
                     amount:.2
                 },
                 
               })     
               
               gsap.from("#page4 .child",{
                scrollTrigger:{
             trigger:"#page4",
             
             start:"-12% top"
                },
                     opacity:0,
                     y:"100%",
                     ease:Expo.ease,
                     stagger:{
                         amount:.2
                     },
                     
                   })        
  }
  textanimation()

  document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};
