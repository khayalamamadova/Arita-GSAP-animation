const shapesSlides = (direction) => {
    let currentSlide = document.querySelector('.shapes-item_current'),
    nextSlide;
    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling

    if(nextSlide) {
        shapeSlides.forEach(el=> el.classList.remove('index'))

        currentSlide.classList.add('index')
        const tl = gsap.timeline({
            defaults: {ease: easing},
            onComplete: function(){
                currentSlide.classList.remove('index')
            }
        })

        tl.from(nextSlide, 0.5, {
            xPercent: 100,
            delay: 0.5

        })
        .from(nextSlide.querySelector('.shapes-content'),0.5, {
            xPercent: -100,
            delay: -1
        })

        currentSlide.classList.remove('shapes-item_current')
         nextSlide.classList.add('shapes-item_current')

    }
}