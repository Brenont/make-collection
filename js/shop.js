var containerProducts = document.querySelector("#container-products");

$.getJSON("js/products.json", function (data) {
    const products = data.products;

    // for(item of products) {
    // console.log(item);
    // buildShop()
    // }

    products.forEach(function (product, index) {
        buildShop(product, index);
        // console.log(product, index);
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
    var productsDiv = document.querySelectorAll(".product");

    var bttArray = new Array;

    productsDiv.forEach(function (div) {
        let btt = div.children[2];
        bttArray.push(btt);
    });

    bttArray.forEach(function (button, index) {

        button.addEventListener("click", function () {

            $.getJSON("js/products.json", function (data) {
                var link = data.products[index].link;

                var modalButton = document.querySelector(".modal-buy-button");
                modalButton.target = "_blank";
                modalButton.href = link;
            });
        })
    });
});

// $(document).ready(function () {
//     var buyButton = document.querySelectorAll(".buy-button");
//     console.log(buyButton);

//     buyButton.forEach(function (btt) {
//         console.log(btt)

//         btt.addEventListener("click", function (event, btt) {
//             console.log("clicou");
//             console.log(event);
//             console.log(btt);
//         });
//     })
// })