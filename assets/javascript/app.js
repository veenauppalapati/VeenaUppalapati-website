$(document).ready(function(){
    $(".fullscreen_nav_menu").hide();
$('#close_icon').hide();
$('.portfolio').hide();
$('.work_window_row').hide();
    $("#hamburger_icon_fullscreen").click(function(){
        
    //    $(this).removeClass('fa-align-justify').addClass('fa-window-close').attr('id', 'close_icon');
       $(".fullscreen_nav_menu").show();
       $('.overlay').hide();
       $('.portfolio').hide();
       $('#close_icon').toggle();
       $('#hamburger_icon_fullscreen').hide();
       $('.work_window_row').hide();
       
    });

    $("#close_icon").click(function(){
        console.log('hello');
        $(".fullscreen_nav_menu").hide();
       $('.overlay').hide();
       $('.portfolio').show();
       $('#hamburger_icon_fullscreen').toggle();
       $('#close_icon').hide();
       $('.work_window_row').show();
      
    });

    $('#caretDown_icon').click(function(){
        $('.headerbg').addClass('headerColor');
        $('h3, #hamburger_icon_fullscreen').css('color', 'white');
        $('.hamburger_icon_wrapper').css('border-left', '1px solid white');
        $('.portfolio_header').css('background-color', 'transparent');
        $('.overlay').hide();
        $('.portfolio').toggle();
        $('.work_window_row').show();
       
    });

    function myFunction(x) {
        if (x.matches) { // If media query matches
           $('#caretDown_icon').hide();
        } else {
            $('#caretDown_icon').show();
        }
    }
    
    var x = window.matchMedia("(max-height: 320px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
   
});