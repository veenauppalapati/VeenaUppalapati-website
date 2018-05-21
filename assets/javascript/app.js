$(document).ready(function(){
    $(".fullscreen_nav_menu").hide();
$('#close_icon').hide();
$('.portfolio').hide();
    $("#hamburger_icon_fullscreen").click(function(){
        
    //    $(this).removeClass('fa-align-justify').addClass('fa-window-close').attr('id', 'close_icon');
       $(".fullscreen_nav_menu").show();
       $('.overlay').hide();

       $('#close_icon').toggle();
       $('#hamburger_icon_fullscreen').hide();
       
    });

    $("#close_icon").click(function(){
        console.log('hello');
        $(".fullscreen_nav_menu").hide();
       $('.overlay').show();

     
       $('#hamburger_icon_fullscreen').toggle();
       $('#close_icon').hide();
      
    });

    $('#caretDown_icon').click(function(){
        $('.headerbg').addClass('headerColor');
        $('h3, #hamburger_icon_fullscreen').css('color', 'white');
        $('.hamburger_icon_wrapper').css('border-left', '1px solid white');
        $('.portfolio_header').css('background-color', 'transparent');
        $('.overlay').hide();
        $('.portfolio').toggle();
       
    });

   
});