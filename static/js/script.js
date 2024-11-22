



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
  reverse: false           // Allow animation to reverse when scrolling back up

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

window.addEventListener('mousemove', function(e) {
  cursor.style.display = "block"
  cursor.style.top = e.pageY + 'px'
  cursor.style.left = e.pageX + 'px'


})



let monkeyDiv = document.querySelector('.fade1')

monkeyDiv.addEventListener('mouseover', () => {
  console.log('Your mouse is over monkeyDiv')
  cursor.style.height = '170px'
  cursor.style.width = '300px'
  cursor.style.borderRadius = '0px'
  cursor.style.backgroundImage = "url('/static/images/monkey.gif')"
  cursor.style.backgroundPosition= "top"
  cursor.style.opacity = 0.5
  cursor.style.cursor = "pointer"
  monkeyDiv.style.color = "black"
  document.body.style.cursor = 'pointer';

})
monkeyDiv.addEventListener('mouseleave', () => {
  console.log('mouse left basketball Div')
  cursor.style.height = '5vh'
  cursor.style.width = '5vh'
  cursor.style.borderRadius = '50%'
  monkeyDiv.style.color = "gray"
  document.body.style.cursor = 'default';

  cursor.style.backgroundImage = "none"


})



let basketballDiv = document.querySelector('.fade7')

basketballDiv.addEventListener('mouseover', () => {
  console.log('Your mouse is over basketballDiv')
  cursor.style.height = '300px'
  cursor.style.width = '200px'
  cursor.style.borderRadius = '0px'
  cursor.style.backgroundImage = "url('/static/images/basketball.gif')"
  cursor.style.backgroundPosition= "top center"
  cursor.style.opacity = 0.5
  basketballDiv.style.color = "black"
  document.body.style.cursor = 'pointer';


})
basketballDiv.addEventListener('mouseleave', () => {
  console.log('mouse left basketball Div')
  cursor.style.height = '5vh'
  cursor.style.width = '5vh'
  cursor.style.borderRadius = '50%'
  basketballDiv.style.color = "gray"
  document.body.style.cursor = 'default';

  cursor.style.backgroundImage = "none"



})


let dogDiv = document.querySelector('.fade5')

dogDiv.addEventListener('mouseover', () => {
  console.log('Your mouse is over dogDiv')
  cursor.style.height = '200px'
  cursor.style.width = '300px'
  cursor.style.borderRadius = '0px'
  cursor.style.backgroundImage = "url('/static/images/dog.gif')"
  cursor.style.backgroundPosition= "top"
  cursor.style.opacity = 0.5
  cursor.style.cursor = "pointer"
  dogDiv.style.color = "black"
  document.body.style.cursor = 'pointer';

})
dogDiv.addEventListener('mouseleave', () => {
  console.log('mouse left basketball Div')
  cursor.style.height = '5vh'
  cursor.style.width = '5vh'
  cursor.style.borderRadius = '50%'
  dogDiv.style.color = "gray"
  document.body.style.cursor = 'default';

  cursor.style.backgroundImage = "none"


})



let backendDiv = document.querySelector('.fade3')

backendDiv.addEventListener('mouseover', () => {
  console.log('Your mouse is over backendDiv')
  cursor.style.height = '170px'
  cursor.style.width = '300px'
  cursor.style.borderRadius = '0px'
  cursor.style.backgroundImage = "url('/static/images/backend.gif')";
  cursor.style.objectFit = 'scale-down'
  cursor.style.backgroundPosition= "bottom"

  cursor.style.opacity = 0.5
  cursor.style.cursor = "pointer"
  backendDiv.style.color = "black"
  document.body.style.cursor = 'pointer';

  cursor.style.classList.add('grow')

})
backendDiv.addEventListener('mouseleave', () => {
  console.log('mouse left basketball Div')
  cursor.style.height = '5vh'
  cursor.style.width = '5vh'
  cursor.style.borderRadius = '50%'
  backendDiv.style.color = "gray"
  document.body.style.cursor = 'default';

  cursor.style.backgroundImage = "none"

  cursor.style.classList.remove('grow')


})

