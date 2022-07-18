



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
  duration: "100%",
  triggerHook: "100",
})
  .setTween(timeline2)
  .addTo(controller);



let timeline3 = new TimelineMax();

timeline3
.fromTo('.contact-form-fade1', {x: -300, opacity : 0}, {x:0, opacity: 1, duration: 10 })  
.fromTo('.contact-side-text', {x: 300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  

.fromTo('.f1', {opacity : 0, x: -300}, {opacity: 1, x:0, duration: 6 })
.fromTo('.f2', {opacity : 0, x: -300}, {opacity: 1, x:0, duration: 6 })
.fromTo('.f3', {opacity : 0, x: -300}, {opacity: 1, x:0, duration: 6 })
.fromTo('.msg-btn', {opacity : 0, x: 300}, {opacity: 1, x:0, duration: 6 })

.fromTo('.map-fade1', {x: -300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  
.fromTo('.email-right', {x: 300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  
.fromTo('.map-fade3', {x: -300, opacity : 0}, {x:0, opacity: 1, duration: 6 })  





let scene3 = new ScrollMagic.Scene({
  triggerElement: ".contact",
  duration: "120%",
  triggerHook: "100",
})
  .setTween(timeline3)
  .addTo(controller);

let cursor = document.querySelector('.cursor')

let basketballDiv = document.querySelector('.fade7')

basketballDiv.addEventListener('mouseover', () => {
  console.log('Your mouse is over basketballDiv')
  cursor.style.height = '300px'
  cursor.style.width = '200px'
  cursor.style.borderRadius = '0px'
  cursor.style.backgroundImage = "url('https://media1.giphy.com/media/ZBoJJXx3Kqcww67yEh/giphy.gif?cid=ecf05e47hz3rl2j4b5dugfpjds6k7iced2ys8e2a4dn8o7t0&rid=giphy.gif&ct=g')"
  cursor.style.backgroundPosition= "top center"
  cursor.style.opacity = 0.5
  cursor.style.cursor = "pointer"
})
basketballDiv.addEventListener('mouseleave', () => {
  console.log('mouse left basketball Div')
  cursor.style.height = '50px'
  cursor.style.width = '50px'
  cursor.style.borderRadius = '50%'

})

window.addEventListener('mousemove', function(e) {
  cursor.style.display = "block"
  cursor.style.top = e.pageY + 'px'
  cursor.style.left = e.pageX + 'px'


})





