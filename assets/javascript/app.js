$(document).ready(function(){
    // on the page loads the full screen menu shall hide
    $(".fullscreen_nav_menu").hide();

    $("#hamburger_icon").click(function(){
        $(".fullscreen_nav_menu").show();
    });

    $("#close_icon").click(function(){
        $(".fullscreen_nav_menu").hide();
        $('.shallHide').show();
        $('.pinkDiv').show();      
    });
});