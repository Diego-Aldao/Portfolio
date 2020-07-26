window.onload = () => {
  //ANIMACIONES GSAP HEADER
  gsap.to(".mt-header", {
    delay: 0.3,
    opacity: 1,
    duration: 0.7,
  });
  gsap.from(".tp-header", {
    x: -100,
    delay: 0.8,
  });
  gsap.to(".tp-header", {
    delay: 1,
    x: 0,
    opacity: 1,
    duration: 0.8,
  });
  gsap.from(".sub-header", {
    y: 100,
    delay: 0.8,
  });
  gsap.to(".sub-header", {
    delay: 1,
    y: 0,
    opacity: 1,
    duration: 0.8,
  });
  gsap.from(".ts-header", {
    y: 100,
    delay: 0.8,
  });
  gsap.to(".ts-header", {
    delay: 1,
    y: 0,
    opacity: 1,
    duration: 0.8,
  });
  gsap.from(".btn-header", {
    delay: 1.8,
    color: "#ccd6f6",
    border: "1px solid #ccd6f6",
  });
  gsap.to(".btn-header", {
    delay: 1.3,
    opacity: 1,
  });
};
