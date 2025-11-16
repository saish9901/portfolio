
window.addEventListener("mousemove",(e) => {
    var xval = gsap.utils.mapRange(0,window.innerWidth,20,window.innerWidth-20,e.clientX);
    var yval = gsap.utils.mapRange(0,window.innerHeight,20,window.innerHeight-20,e.clientY);
     gsap.to('#mouse_pointer',{
        left: xval + 'px',
        top: yval + "px",
        ease: Power3
     })
})

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to("#mouse_pointer", {
      width: 45,
      height: 45,
      duration: 0.2,
      ease: "power3.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to("#mouse_pointer", {
      width: 25,
      height: 25,
      duration: 0.2,
      ease: "power3.out"
    });
  });
});
