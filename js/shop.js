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
        product.appendChild(buildButton(false, "Esgotado", "soldOut-button", false))
    } else {
        product.appendChild(buildButton(_product.link, "Comprar", "buy-button", _index));
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

function buildButton(link, _text, _classe, _index) {
    var button = document.createElement("a");
    button.textContent = _text;
    if (link !== false) {
        button.href = "#modal-buy" + _index;
        button.rel = "modal:open";
    }
    // button.target = "_blank";
    button.classList.add(_classe);
    button.classList.add("open-modal");

    return button;
}

// $(document).ready(function () {
//     window.addEventListener("load", function() {

//     console.log("window event");
        
//     var productsDiv = document.querySelectorAll(".product");
//     // console.log("productsDiv", productsDiv);

//     var bttArray = new Array;
//     // console.log("ArrayOld", bttArray);

//     productsDiv.forEach(function (div) {
//         let btt = div.children[2];
//         bttArray.push(btt);

//         // console.log('Each Array of the For', bttArray);
//     });

//     bttArray.forEach(function (button, index) {
//         // console.log(button);

//         button.addEventListener("click", function () {
//             // console.log(index);

//             $.getJSON("js/products.json", function (data) {
//                 var link = data.products[index].link;
//                 // console.log(index);
//                 // console.log("link", data.products[index].link);

//                 var modalButton = document.querySelector(".modal-buy-button");
//                 console.log(modalButton);
//                 modalButton.target = "_blank";
//                 modalButton.href = link;
//                 console.log("lastest", modalButton);
//             });
//         });
//     });
// });

// window.addEventListener("load", linkModal());