$(document).ready(function(){
    $(".fullscreen_nav_menu").hide();

    $("#hamburger_icon_fullscreen").click(function(){
        $(".fullscreen_nav_menu").show();
       $('.overlay').hide();
    });

    $("#close_icon").click(function(){
        $(".fullscreen_nav_menu").hide();
       $('.overlay').show();
    });

    $('#caretDown_icon').click(function(){
        $('.headerbg').addClass('headerColor');
        $('h3, #hamburger_icon_fullscreen').css('color', 'white');
        $('.hamburger_icon_wrapper').css('border-left', '1px solid white');
        $('.portfolio_header').css('background-color', 'transparent');
        $('.overlay').hide();
    })
   
});