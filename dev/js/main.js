$(document).ready(function() {

    $('.header__contrast').click(function(event){
        event.preventDefault();
        $('body').toggleClass('darkmode');
    });

}); //end ready