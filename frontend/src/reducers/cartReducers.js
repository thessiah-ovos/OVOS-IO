import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_AGREEMENT } from "../constants/cartConstants";

function cartReducer(state={cartItems:[], payment: {}, agreement: {} }, action){
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x=> x.product === item.product);
            if (product){
                return { 
                    cartItems: 
                    state.cartItems.map(x=>x.product === product.product?product: x)
                };
            }
            return { cartItems: [...state.cartItems, item] }
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x => x.product !== action.payload)}   
          case CART_SAVE_PAYMENT:
            return { ...state, payment: action.payload };   
          case CART_SAVE_AGREEMENT:
            return { ...state, agreement: action.payload };  
            default:
                return state
        }
}

export { cartReducer }