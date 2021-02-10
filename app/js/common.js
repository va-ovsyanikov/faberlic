$(document).ready(function(){

    //btn menu mobile
    $('.btn_nav').click(function(){
        $(this).toggleClass('active');
        $('nav').slideToggle();
    });


    $('.s_catalog_select').click(function(){
        $('.s_catalog_order_block_select').slideToggle();
    });
    
    
    
    
    
    var btn = $('.top_link');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('top_link_show');
        } else {
            btn.removeClass('top_link_show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });



});


