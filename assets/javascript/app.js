$(document).ready(function(){
    $(".fullscreen_nav_menu").hide();
    $('#close_icon').hide();
    $('.portfolio').hide();
    $('.work_window_row').hide();
    $('.portfolio_header').css('border-bottom', 'none');
    // when the hamburger button is triggered
    $("#hamburger_icon_fullscreen").click(function(){       
        $(".fullscreen_nav_menu").show();
        $('.overlay').hide();
        $('.portfolio').hide();
        $('#close_icon').show();
        $('#hamburger_icon_fullscreen').hide();
        $('.work_window_row').hide();   
        $('.portfolio_header').css('border-bottom', '1px white solid');

    });

    // When the close icon is triggered
    $("#close_icon").click(function(){
        $(".fullscreen_nav_menu").hide();
        $('.overlay').hide();
        $('.portfolio').show();
        $('#hamburger_icon_fullscreen').toggle();
        $('#close_icon').hide();
        $('.work_window_row').show();
        $('.portfolio_header').css('border-bottom', 'none');
    });

    // When the carat icon is triggered
    $('#caretDown_icon').click(function(){
        $('.headerbg').addClass('headerColor');
        $('h3, #hamburger_icon_fullscreen').css('color', 'white');
        $('.hamburger_icon_wrapper').css('border-left', '1px solid white');
        $('.portfolio_header').css('background-color', 'transparent');
        $('.overlay').hide();
        $('.portfolio').toggle();
        $('.work_window_row').show();
        $('.fullscree_nav_menu').css('background-color', '#FA3945');   
        $('.portfolio_header').css('border-bottom', 'none');
    });

    // mediaQueryjs
    function myFunction(x) {
        if (x.matches) { // If media query matches
           $('#caretDown_icon').hide();
           $('.fullscreen_network_links_container').hide();
           $('.portfolio_header').css('border-bottom', 'none');
        } else {
            $('#caretDown_icon').show();
            $('.fullscreen_network_links_container').show();
            $('.portfolio_header').css('border-bottom', '1px white solid');
        }
    }
    
    var x = window.matchMedia("(max-height: 320px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
   
});