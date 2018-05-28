$(document).ready(function(){
    
    
    $('#submit').click(function(){
        var fullName = $('#fullname').val()
        
        var subject = $('#subject').val();
        var messageArea = $('#message-area').val();
        var messageDetails = `mailto:veena.uppalapati@nyfa.edu?subject=${subject}&body=${messageArea}%0A%0A- ${fullName}`
        console.log(messageDetails);

        $(this).attr('href', messageDetails);
    })
});
// href=

