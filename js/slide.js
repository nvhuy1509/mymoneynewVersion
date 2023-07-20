$(document).ready(function () {
  $(".slide-list").slick({
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
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
  $(".owl-carousel").owlCarousel({
    loop: false,
    autoplay: false,
    // autoplayTimeout: 3500,
    nav:true,
    navRewind:true,
    slideBy: 1,
    navText : ['<img src="/images/PC_index/icon-prev-team.svg" id="prevRM" alt="">','<img src="/images/PC_index/icon-next-team.svg" id="nextRM"  alt="">'],
    // navText : ['<i class="fa fa-sm fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 15,
        
      },
      600: {
        margin: 15,
        items: 1,
      },
      1024: {
        margin: 20,
        items: 3,
      },
    },
  });

  // $(".owl-next").click(function(){
  //  // owl.trigger('to.owl.carousel', [owl.relative(1), 300]);
  // });

  // // Xử lý sự kiện click cho nút "prev"
  // $(".owl-prev").click(function(){
  //   // owl.trigger('to.owl.carousel', [owl.relative(-1), 300]);
  // });

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
  var checked = 1;
  swiperHomeBlog.on('slideChange', function(){
    var blogItems = $('.home-blog .blog-item');
    console.log("blogItems=========")
    console.log(blogItems);
  
    blogItems.each((index, item) => {
      if($(item).hasClass("swiper-slide-active")){
        
        // var test = document.getElementsByClassName("swiper-slide-prev");
        // if(item == blogItems[0]) {
        //   console.log("phần tử đầu tiên -> btn next")
        // } 
        // else if( item == blogItems[blogItems.length - 1]) {
        //   console.log("phần tử cuối -> btn prev")
        // }
        // else {
        //   console.log("phần tử đầu tiên -> btn next")
        // }
        // if(blogItems[0].classList.contains("swiper-slide-active") ||  blogItems[1].classList.contains("swiper-slide-active")) {
        //   console.log(" btn next------")
        //   $('.home-blog').removeClass('only-prev');
        //   $('.home-blog').addClass('only-next');
        //   return;
        // }
        if(blogItems.length > 3) {
          console.log(" nhiều hơn 3 post------")
          if(blogItems[blogItems.length - 2].classList.contains("swiper-slide-active") ) {
            
            $('.home-blog').removeClass('only-next');
            $('.home-blog').addClass('only-prev');
            return;
          } 
          if(index==0 || index == 1){
             $('.home-blog').addClass('only-next');
              $('.home-blog').removeClass('only-prev');
              return;
          }
        }
        if( 1< blogItems.length <=3) {
          console.log(" ít hơn 3 post------" + blogItems.length )
          if(checked == 0 || checked == 1) {
            console.log(" checked111111111------" + checked )
            $('.home-blog').addClass('only-next');
            $('.home-blog').removeClass('only-prev');
            checked +=1;
            return;
          } 
          if(checked == blogItems.length-1) {
            console.log(" checked22222------" + checked )
            $('.home-blog').removeClass('only-next');
            $('.home-blog').addClass('only-prev');
            checked = checked - 1;
          }
          console.log('checked----------' + checked)
        }
        //
        console.log(blogItems[blogItems.length - 1]) ;

       
        // console.log("blogItems.length---- ---------" + blogItems.length);
        // if(index==0 || index == 1){
        //   console.log("index - home-blog-------------" + index);
        //   $('.home-blog').addClass('only-next');
        //   $('.home-blog').removeClass('only-prev');
        // }
        // if(mainId == blogItems.length - 1){
        //   console.log("mainId-------------" + mainId);
        //   $('.home-blog').removeClass('only-next');
        //   $('.home-blog').addClass('only-prev');
        // }
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

