$(document).ready(function(){
    $(".buy-button").click(function() {
        $("#modal-buy").modal({
            fadeDuration: 300,
        });
        return false;
    })
});