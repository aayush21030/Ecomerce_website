import { getCartProductFromLS } from "./getCartProduct.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (id) => {
    let cartProduct = getCartProductFromLS();
    cartProduct = cartProduct.filter((curProd) => curProd.id !== id);

    localStorage.setItem("cartProductLS",JSON.stringify(cartProduct));  
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

        showToast("delete", id);
    }
    updateCartValue(cartProduct);

};