$(document).ready(function(){
    var itemBanners = $('.banner-item');
    var itemThumbs = $('.thumb-item');
    var tabSidebar = $('.tab-item');

    itemThumbs.each(function(index){
        $(this).on('click', function(){
            itemThumbs.removeClass('active');
            $(this).addClass('active');
            itemBanners.removeClass('active');
            $(itemBanners[index]).addClass('active');
            tabSidebar.removeClass('active');
            $(tabSidebar[index]).addClass('active');
            if(index === 0){
                $('.thumb-list').removeClass('scrolling');
            }
        })
    })

    tabSidebar.each(function(index){
        $(this).on('click', function(){
            tabSidebar.removeClass('active');
            $(this).addClass('active');
            itemBanners.removeClass('active');
            $(itemBanners[index]).addClass('active');
            itemThumbs.removeClass('active');
            $(itemThumbs[index]).addClass('active');
        })
    })

    if($(window).width() < 600 && itemBanners.length > 1){
        $('.banner-list').slick({
                items: 1,
                dots: true,
                autoplay: false,
                autoplayTimeout: 3500,
                nav:true,
                arrows: false,
            }
        );

        var itemDot = $('.banner-list .slick-dots li button');
        tabSidebar.each(function(index){
            var text = $(this).text();
            $(itemDot[index]).html(`<span>${text}</span>`);
        })
    }  
});

const scrollContainer = document.querySelector(".thumb-list");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    if(scrollContainer.scrollLeft > 0){
        scrollContainer.classList.add("scrolling");
    }else{
        scrollContainer.classList.remove("scrolling");
    }
});