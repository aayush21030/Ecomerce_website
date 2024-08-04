import { getCartProductFromLS } from "./getCartProduct.js";

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let LocalCartProducts = getCartProductFromLS();

    let initialValue = 0;
    let totalProductPrice = LocalCartProducts.reduce((accum,curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    },initialValue);
    // console.log(totalProductPrice);
    productSubTotal.textContent = `₹ ${totalProductPrice}`;
    productFinalTotal.textContent = `₹ ${totalProductPrice + 50}`;
};