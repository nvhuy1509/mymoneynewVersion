$(document).ready(function () {
  $(window).on("load resize orientationchange", function () {
    $(".customers-list").each(function () {
      var $mission = $(this);
      if ($(window).width() > 767) {
        if ($mission.hasClass("slick-initialized")) {
          $mission.slick("unslick");
        }
      } else {
        if (!$mission.hasClass("slick-initialized")) {
            $mission.slick({
              slidesToShow: 3,
              autoplay: true,
              autoplaySpeed: 3500,
              slidesToScroll: 1,
              mobileFirst: true,
              arrows: false,
              dots: false,
          });
        }
      }
    });
  });
  $(".roadmap-slider").owlCarousel({
    loop: false,
    autoplay: false,
    // autoplayTimeout: 3500,
    nav:true,
    navText : ['<img src="/images/PC_index/icon-prev-team.svg" alt="">','<img src="/images/PC_index/icon-next-team.svg" alt="">'],
    // navText : ['<i class="fa fa-sm fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      600: {
        margin: 15,
        items: 2,
      },
      1024: {
        margin: 20,
        items: 3,
      },
    },
  });
    
  
  $(".blog-slider").owlCarousel({
    loop: false,
    autoplay: false,
    // autoplayTimeout: 3500,
    nav:true,
    navText : ['<img src="/images/PC_index/icon-prev-team.svg" alt="">','<img src="/images/PC_index/icon-next-team.svg" alt="">'],
    // navText : ['<i class="fa fa-sm fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 40,
      },
      600: {
        margin: 40,
        items: 2,
      },
      1024: {
        margin: 40,
        items: 2,
      },
    },
  });
    
});

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: false,
// });
// $('.slider-nav').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   asNavFor: '.slider-for',
//   dots: false,
//   focusOnSelect: false
// });

// $('.slider-onclick').click(function(e) {
//   e.preventDefault();
//   // var slideno = $(this).data('slide');
//   $('.slider-for').slick('slickNext');
// });

// $('.slider-mbBlog').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   dots: true,
//   fade: false,
// });

