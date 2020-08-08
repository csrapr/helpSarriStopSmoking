$(document).ready(function() {
    $('#animation1').slideDown('slow').animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    $('#animation2').slideDown('slow').animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
    
});

$(document).ready(() => {
    $("#ask-button").click(() => {
        $.getJSON("https://api.countapi.xyz/hit/sarristopsmoking/visits", function(response) {
            $('#button-div').fadeOut("normal", function() {
                $(this)[0].innerHTML = `<p>Thank you! Sarri has been encouraged ${response.value} times now!</p>`
            });
        });
    });
});