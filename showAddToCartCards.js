import products from "./api/products";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCartProductFromLS } from "./getCartProduct.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";
let cartProduct = getCartProductFromLS();
let filterProducts = products.filter((curProd)=> {
    return cartProduct.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, price} = curProd;
        let productClone = document.importNode(templateContainer.content,true);

        const lSActualData = fetchQuantityFromCartLS(id,price);
        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        
        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;

        productClone.querySelector(".productPrice").textContent = lSActualData.price;

        productClone.querySelector(".stockElement")
        .addEventListener("click",(event) => {
            incrementDecrement(event,id,stock,price);


        });

        productClone
        .querySelector(".remove-to-cart-button")
        .addEventListener("click",() => removeProdFromCart(id));

        cartElement.appendChild(productClone);
        
    });
};




showCartProduct();
updateCartProductTotal();


