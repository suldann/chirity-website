(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


var select_card = document.querySelectorAll(".select");

var title = document.getElementById("title");
var price = document.getElementById("price");

var selected=2;



var reset = ()=>{
  
select_card.forEach((k)=>{
  
 k.setAttribute("data-selected", "false");
})
}

select_card.forEach((a,i)=>{
  
  a.addEventListener("click",(e)=>{
     reset();
   a.setAttribute("data-selected", "true")
    selected=i+1;
    
    
    
    
  })
})



var select_btn = document.querySelector(".select-btn");

var container = document.querySelector(".container");


var exit_btn = document.querySelector(".exit-btn");



select_btn.addEventListener("click",()=>{
  
  container.style.display="flex"
  
  if(selected==1){
    title.innerHTML = "Feed a child for 1 day";
    price.innerHTML ="5.50 USD";
    
  }
  
  if(selected==2){
    title.innerHTML = "Feed a child for 3 days"
    price.innerHTML ="16.50 USD";
    
  }
  
   if(selected==3){
    title.innerHTML = "Feed a child for 7 days"
     price.innerHTML ="38.50 USD";
    
  }
 

})


exit_btn.addEventListener("click",()=>{
  
  container.style.display="none";

  
  

})
    

    
})(jQuery);

