$(document).ready(function(){
    // on the page loads the full screen menu shall hide
    $(".fullscreen_nav_menu").hide();


    $("#hamburger_icon_fullscreen").click(function(){
        $(".fullscreen_nav_menu").show();
        $('.title_mobile').hide();
        $('.hamburger_icon_wrapper').hide();
        $('.shallHide').hide();
        $('.pinkDiv').hide(); 
        $('.network_links_container').hide();
    });

    $("#close_icon").click(function(){
        $(".fullscreen_nav_menu").hide();
        $('.shallHide').show();
        $('.pinkDiv').show(); 
        $('.hamburger_icon_wrapper').show();
        $('.title_mobile').show();
        $('.network_links_container').show();
    });
});