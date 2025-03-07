$(document).ready(function(){
    $('.slider-container').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        slidestoShow: 2,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>'

        
    });
  });

  
        // Toggle Mobile Menu
        document.getElementById('nav-toggle').addEventListener('click', function() {
            var mobileNav = document.getElementById('mobile-nav');
            mobileNav.classList.toggle('hidden');
        });
    



        //  new 

       

    let currentSlide = 0;

    function moveToSlide(slideIndex) {
        const carousel = document.getElementById('carousel');
        const slideWidth = document.querySelector('.testimonial').offsetWidth;
        carousel.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
        currentSlide = slideIndex;
    }

    // Auto-slide functionality (optional)
    // setInterval(() => {
    //     currentSlide = (currentSlide + 1) % 3;
    //     moveToSlide(currentSlide);
    // }, 2000); // Change slide every 5 seconds



      
      var swiper = new Swiper(".progress-slide-carousel", {
      loop: true,
      fraction: true,
      autoplay: {
        delay: 1200,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".progress-slide-carousel .swiper-pagination",
        type: "progressbar",
      },
      });
// ===================================

// <!--JAVASCRIPT CODE-->
    
      var swiper = new Swiper(".fraction-slide-carousel", {
      loop: true,
      fraction: true,
      navigation: {
        nextEl: ".fraction-slide-carousel .swiper-button-next",
        prevEl: ".fraction-slide-carousel .swiper-button-prev",
      },
      pagination: {
        el: '.fraction-slide-carousel .swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function(number) {
          return number;
        }
      },
      });
      

      //  swiper

  
