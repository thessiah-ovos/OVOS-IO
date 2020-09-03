import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_AGREEMENT, CART_SAVE_PAYMENT } from "../constants/cartConstants";
import Cookie from 'js-cookie';

const { default: Axios } = require("axios")

const addToCart = (beatId, lease) => async (dispatch, getState) =>{
    try {
        const { data } = await Axios.get("/api/products/" + beatId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            lease
        }
    });

    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        
    }
}

const removeFromCart = (beatId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: beatId });

    const {cart:{cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    
}

const saveAgreement = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_AGREEMENT, payload: data });
  }
  
  const savePayment = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload: data });
  }

export { addToCart, removeFromCart, saveAgreement, savePayment }