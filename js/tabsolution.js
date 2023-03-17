$(document).ready(function(){
    var itemBanners = $('.banner-item');
    var itemThumbs = $('.thumb-item');
    var tabSidebar = $('.tab-item');
    console.log(itemBanners.length, itemThumbs.length);

    itemThumbs.each(function(index){
        $(this).on('click', function(){
            itemThumbs.removeClass('active');
            $(this).addClass('active');
            itemBanners.removeClass('active');
            $(itemBanners[index]).addClass('active');
            tabSidebar.removeClass('active');
            $(tabSidebar[index]).addClass('active');
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
})