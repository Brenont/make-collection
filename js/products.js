var containerProducts = document.querySelector("#container-products");

$.getJSON("js/products.json", function (data) {
    var products = data.products;

    products.forEach(function (product) {
        buildShop(product);
    });

});

function buildShop(_product) {

    var product = document.createElement('div');
    product.classList.add("product");

    product.appendChild(buildImg(_product.img));
    product.appendChild(buildTitle("h4", _product.name));
    product.appendChild(buildButton(_product.link, "Comprar"));

    containerProducts.appendChild(product);
}

function buildTitle(_selector, _text) {
    var title = document.createElement(_selector);
    title.textContent = _text;

    return title;
}

function buildImg(imgSrc) {
    var imgSelector = document.createElement("img");
    imgSelector.src = imgSrc;

    return imgSelector;
}

function buildButton(link, _text) {
    var button = document.createElement("a");
    button.textContent = _text;
    button.href = link;
    button.target = "_blank"

    return button;
}