let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.from('.left', 10, {y:300})
.from('.middle', 10, {y:300}, "-=10")
.from('.right', 10, {y:300}, "-=10")


.fromTo('.from-left-1', { opacity: 0, x:-300 }, { opacity: 1, x:0, duration: 2 })  
.fromTo('.from-right-1', { opacity: 0, x:300 }, { opacity: 1, x:0, duration: 2 })  

.fromTo('.from-left-2', { opacity: 0, x:-300 }, { opacity: 1, x:0, duration: 2 })  
.fromTo('.from-right-2', { opacity: 0, x:300 }, { opacity: 1, x:0, duration: 2 }) 

.fromTo('.from-left-3', { opacity: 0, x:-300 }, { opacity: 1, x:0, duration: 2 })  

let scene = new ScrollMagic.Scene({
  triggerElement: ".main",
  duration: "340%",
  triggerHook: "100",
})
  .setTween(timeline)
  .addTo(controller);


