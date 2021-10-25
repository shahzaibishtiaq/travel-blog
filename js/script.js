const responsive ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
    $nav = $('.nav');
    $toggle = $('.toggle-collapse');

    // click event on toggle button
    $toggle.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });
    $('.bottom-to-top').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    });

    AOS.init();



});