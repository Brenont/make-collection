var containerProducts = document.querySelector("#container-products");

$.getJSON("js/products.json", function (data) {
    const products = data.products;

    products.forEach(function (product, index) {
        buildShop(product, index);
    });

});

function buildShop(_product, _index) {

    var product = document.createElement('div');
    product.classList.add("product");

    product.appendChild(buildImg(_product.img));
    product.appendChild(buildTitle("h4", _product.name));
    if (_product.soldOut) {
        product.appendChild(buildButton(false, "Esgotado", "soldOut-button"))
    } else {
        product.appendChild(buildButton(_product.link, "Comprar", "buy-button"));
    }

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

function buildButton(link, _text, _classe) {
    var button = document.createElement("a");
    button.textContent = _text;
    if (link !== false) {
        button.href = "#modal-buy";
        button.rel = "modal:open";
    }
    button.target = "_blank";
    button.classList.add(_classe);

    return button;
}

$(document).ready(function () {
    var buyButton = document.querySelectorAll(".buy-button");
    console.log(buyButton);
    
    buyButton.forEach(function (btt) {
        console.log(btt)
        
        btt.addEventListener("click", function (event, btt) {
            console.log("clicou");
            console.log(event);
            console.log(btt);
        });
    })
})