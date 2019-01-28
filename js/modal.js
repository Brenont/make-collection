$(document).ready(function(){
    $(".buy-button").click(function() {
        $("#modal-buy").modal({
            fadeDuration: 300,
            // fadeDelay: 10,
        });
        return false;
    })
});