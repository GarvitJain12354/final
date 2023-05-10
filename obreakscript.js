var flag = 0
document.querySelector("#menu").addEventListener("click",function(){
    if(flag ===0){
        document.querySelector("#l1").style.transform = "rotate(-48deg) translateY(10px) translateX(10px)"
        document.querySelector("#l2").style.transform = "rotate(45deg) translateY(-20px)"
        document.querySelector("#l2").style.width = "80%"
        document.querySelector("#mpage").style.display = "flex"
        gsap.to("#page1 h1,#bottom img",{
            opacity:0
        })
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
    .to("#page1 h1,#bottom img",{
        opacity:1
    })

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


document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};

document.querySelector(".f2 h2").addEventListener("click",function(){
    window.scrollTo(0,0)
});