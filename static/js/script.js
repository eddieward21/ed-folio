



let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline

.from('.left', 10, {y:-300}, "-=10")

.from('.middle', 10, {y:-300}, "-=10")
.from('.right', 10, {y:-300}, "-=10")




.fromTo('.from-left-1', { opacity: 0, x:-300 }, { opacity: 1, x:0, duration: 2 })  
.fromTo('.from-right-1', { opacity: 0, x:300 }, { opacity: 1, x:0, duration: 2 })  

.fromTo('.from-left-2', { opacity: 0, x:-300 }, { opacity: 1, x:0, duration: 2 })  
.fromTo('.from-right-2', { opacity: 0, x:300 }, { opacity: 1, x:0, duration: 2 }) 

.fromTo('.from-left-3', { opacity: 0, x:-300 }, { opacity: 1, x:0, duration: 2 })  


let scene = new ScrollMagic.Scene({
  triggerElement: ".main",
  duration: "350%",
  triggerHook: "100",
})
  .setTween(timeline)
  .addTo(controller);

let timeline2 = new TimelineMax();

timeline2
.fromTo('.about-big-text', {x: -300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  
.fromTo('.fade1', {x: 300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  
.fromTo('.fade2', {x: -300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  
.fromTo('.fade3', {x: 300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  
.fromTo('.fade4', {x: -300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  
.fromTo('.fade5', {x: 300, opacity : 0}, {x:0, opacity: 1, duration: 6})  
.fromTo('.fade6', {x: -300, opacity : 0}, {x:0, opacity: 1, duration: 6})  
.fromTo('.fade7', {x: 300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  


let scene2 = new ScrollMagic.Scene({
  triggerElement: ".about",
  duration: "120%",
  triggerHook: "100",
})
  .setTween(timeline2)
  .addTo(controller);



let timeline3 = new TimelineMax();

timeline3
.fromTo('.map-fade1', {x: -300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  
.fromTo('.email-btn', {x: 300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  




let scene3 = new ScrollMagic.Scene({
  triggerElement: ".contact",
  duration: "100%",
  triggerHook: "100",
})
  .setTween(timeline3)
  .addTo(controller);

