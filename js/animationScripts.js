const tlInfinity = new TimelineMax({ repeat: -1 });
const tl = new TimelineMax();
const tm = TweenMax;
const bg = document.querySelector('.hero');
const price = document.querySelectorAll('.hero__price');
const heroBurguer = document.querySelectorAll('.hero__burguer');
const rightSideGal = document.querySelectorAll('.gallery__right_side > a');

const gallery_tl = new TimelineMax({
    scrollTrigger: {
        trigger: '.gallery__left_side_container',
        scrub: 1,
        //markers: true,
        start: 'top bottom',
        end: 'top top'
    }
});

tlInfinity.to(bg, 25, {
    backgroundPosition: "-2247px 0px"
});


gallery_tl.from('.gallery__left_side_container',1,{
    x:-850,
    opacity: '0',
    ease: Power4.easeOut
},'gallery').
staggerFrom([rightSideGal[0],rightSideGal[1]], 1, {
    x:150,
    opacity: '0',
    ease: Power4.easeOut
},.2, 'gallery')



