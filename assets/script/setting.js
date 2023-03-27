const bgItems = document.querySelectorAll('.slide-bg_link'),
      imageSlides = document.querySelectorAll('.slide-bg_inner'),
      shapes = document.querySelectorAll('.shapes-content'),
      shapeSlides = document.querySelectorAll('.shapes-item'),
      helperInput = document.querySelector('#helper-input'),
      mouse = document.querySelector('.mouse'),
      slideBg = document.querySelector('.slide-bg'),
      links = document.querySelectorAll('a'),
      mainSection = document.querySelector('.main-section'),
      slidesCount = 5;
let slideCounter = 1;
const easing = BezierEasing(0.770, 0.125, 0.265, 1.040);


const startComplete = () => {
    imageSlides.forEach(el => { el.style.opacity = 1 });
    shapeSlides.forEach(el => { el.style.opacity = 1 });
  };

  const startingTl = gsap.timeline({ defaults: { ease: easing }, onComplete: startComplete });
