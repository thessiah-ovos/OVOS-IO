import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function CartScreen(props) {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
 // const [price, setPrice] = useState(29.99);


  const beatId = props.match.params.id;
  const arr = props.location.search.split(/([0-9]+)/)
  console.log(arr[1])
  const price = arr[1];
  const lease = props.location.search ? props.location.search.split("=")[1] : 4;

//  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  console.log(lease);
  console.log(props.match.params);

  const removeFromCartHandler = (beatId) => {
    dispatch(removeFromCart(beatId));
  }
  useEffect(() => {
    if (beatId) {
      dispatch(addToCart(beatId, lease, price));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=terms");
  }

  return <div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <div>
          </div>
        </li>
        {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>

                  </div>
                  <div>
                    Lease: {item.lease}
                   

                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  ${item.price}
                </div>
              </li>
            )
        }
      </ul>

    </div>
    <div className="cart-action">
      <h3>
          {console.log(cartItems)}
          Subtotal: ${cartItems.reduce((a, c) => a + c.price * 1, 0)}
        
        
         
      </h3>
      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>

    </div>

  </div>
}

export default CartScreen;
