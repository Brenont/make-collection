var body = document.querySelector("body");
body.style.overflow = "hidden"

window.addEventListener("load", function () {
    var loader = document.querySelector("#loader");
    loader.classList.add("hide-loader");
    setTimeout(function () {
        loader.style.display = "none";
        body.style.overflow = "initial";
        // var test = setInterval(function() {
            // if(now - countDownDate > 0){
            //     console.log("load atrapalhando");
            //     clearInterval(test);
            // }
        // }, 1000)
    }, 1500);
})