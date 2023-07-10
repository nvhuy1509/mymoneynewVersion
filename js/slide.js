$(document).ready(function () {
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

  const swiperHomeBlog = new Swiper('.home-blog .blog-list-wrap', {
    direction: 'horizontal',
    loop: false,

    breakpoints: {
      320: {
        width: 279,
        spaceBetween: -5,
      },
      769: {
        width: 385,
        spaceBetween: -8,
      }
    },
    navigation: {
      nextEl: '.home-blog .swiper-button-next',
      prevEl: '.home-blog .swiper-button-prev',
    },
  });
  swiperHomeBlog.on('slideChange', function(){
    var blogItems = $('.home-blog .blog-item');
    blogItems.each((index, item) => {
      if($(item).hasClass("swiper-slide-active")){
        if(index==0 || index == 1){
          $('.home-blog').addClass('only-next');
          $('.home-blog').removeClass('only-prev');
        }else if(index == blogItems.length - 2){
          $('.home-blog').removeClass('only-next');
          $('.home-blog').addClass('only-prev');
        }
      }
    });
  })
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

