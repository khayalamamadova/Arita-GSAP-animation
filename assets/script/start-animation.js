const startAnimation = () => {
    console.log('start');
    const currentSlide = document.querySelector('.slide-bg_inner-current'),
          currentShape = document.querySelector('.shapes-item_current'),
          currentText = document.querySelector('.slides-container_slide-active');

          startingTl.to('.header', 0.5, {
        opacity: 1,
        y: 0,
        delay: 0.5 
    })
    .to('.main-section_explore', 0.5, {
        opacity: 1,
        y: 0
    }, '-=0.5')
    .to(currentText.querySelector('.slides-container_title'), 0.6, {
        opacity: 1,
        y: 0
    }, '-=0.1')
    .to(currentText.querySelector('.designers-info'), 0.6, {
        opacity: 1,
        y: 0,

    }, '-=0.4')
    .from(currentSlide, 0.4, {
        xPercent: 100,
    }, '-=0.4')
      .from(currentSlide.querySelector('.slide-bg_link'), 0.4, {
        xPercent: -100,
      }, '-=0.4')
      .from(currentShape, 0.6, {
        xPercent: 100,
    }, '-=0.2')
      .from(currentShape.querySelector('.shapes-content'), 0.6, {
        xPercent: -100,
        delay: -0.6
      }, '-=0.2')
}