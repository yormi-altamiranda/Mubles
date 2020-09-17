$(document).ready(function () {
    $('#slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav: false,
                dots: false
            },
            600:{
                items:2,
                nav: false,
                dots: false
            },
            1000:{
                items:4,
                nav: false
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: false
            },
            600:{
                items:1,
                nav:false,
                dots: false
            },
            1000:{
                items:1,
                nav:false,
            }
        }
    })


});