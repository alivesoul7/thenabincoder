$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar on scroll script
        if (this.scrollY > 20){
            $('nav.navbar').addClass("sticky");
        } else {
            $('nav.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Scroll to sections when clicking on menu items
    $('.menu-btn').click(function(){
        var target = $(this).attr('href');
        var offset = $(target).offset().top;
        $('html, body').animate({scrollTop: offset - 60}, 'slow');
        return false; // Prevent default anchor link behavior
    });

    // Typing animation script
    var typed = new Typed(".typing", {
        strings: ["Stu", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Stu", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
