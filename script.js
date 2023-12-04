document.addEventListener("DOMContentLoaded", function() {
    var crsr = document.querySelector("#cursor");
    var crsrblur = document.querySelector("#blur");

    document.addEventListener("mousemove", function(dets) {
        crsr.style.left = dets.x - 10 + "px";
        crsr.style.top = dets.y - 10 +"px";
        crsrblur.style.left = dets.x - 150 + "px";
        crsrblur.style.top = dets.y - 150 +"px";
    });
});


gsap.to("#nav",{
    backgroundColor:"black",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#aboutus img, about-center",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3,
    }
})

gsap.from(".card",{
    scale: 0.85,
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        // markers:true,
        scrub:0.5,
    }
})

gsap.from("#colon1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#testimonials",
        scroller:"body",
        // markers:true,
        scrub:3,
    }
})

gsap.from("#colon2",{
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#testimonials",
        scroller:"body",
        // markers:true,
        scrub:3,
    }
})

gsap.from("#testimonials p",{
    scale: 0.85,
    scrollTrigger:{
        trigger:"#testimonials",
        scroller:"body",
        // markers:true,
        scrub:3,
    }
})

gsap.from("#waiting-for-text",{
    y:70,
    scrollTrigger:{
        trigger:"#waiting-for",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 10%",
        scrub:0.5,
    }
})





