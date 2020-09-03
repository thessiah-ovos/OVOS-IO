import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { beatListReducer, beatDetailsReducer } from './reducers/beatReducers';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import Cookie from 'js-cookie'
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer } from './reducers/orderReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
    cart: { cartItems, payment: {}, agreement: {} }, 
    userSignin: { userInfo },
};
const reducer = combineReducers({
    beatList: beatListReducer,
    beatDetails: beatDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,

})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
