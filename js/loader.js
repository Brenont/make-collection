var body = document.querySelector("body");
body.style.overflow = "hidden"

window.addEventListener("load", function () {
    var loader = document.querySelector("#loader");
    loader.classList.add("hide-loader");
    setTimeout(function () {
        loader.style.display = "none";
        body.style.overflow = "initial";
    }, 1500);
})