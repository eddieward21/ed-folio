let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 10, {x:-300})
  .to(".girl", 10, {y:-350}, "-=10")


  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")

  .fromTo(".bio-text", { opacity: 0 }, { opacity: 1, duration: 6 })

  .fromTo(".me-container", { opacity: 0 }, { opacity: 1, duration: 6 })  



  .fromTo(".me", { opacity: 0 }, { opacity: 0.7, duration: 3 })  


let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);


/*
let scene2 = new ScrollMagic.Scene({
triggerElement: "section",
duration: "300%",
triggerHook: 0,
})  
    .setTween(timeline)
    .addTo(controller)
*/

const logo = document.querySelectorAll('#logo path');
console.log(logo)

for(let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}