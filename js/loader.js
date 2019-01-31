window.addEventListener("load", function () {
    var loader = document.querySelector("#loader");
    loader.classList.add("hide-loader");
    setTimeout(function () {
        loader.style.display = "none";
    }, 1500);
})