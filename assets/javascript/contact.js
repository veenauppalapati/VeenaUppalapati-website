$(document).ready(function(){
    $(".fullscreen_nav_menu").hide();

    $("#hamburger_icon_fullscreen").click(function(){
        $(".fullscreen_nav_menu").show();
       $('.contactForm').hide();
    });

    $("#close_icon").click(function(){
        $(".fullscreen_nav_menu").hide();
       $('.contactForm').show();
    });
});