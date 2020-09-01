import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import BeatStore from './screens/BeatStore';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import BillingScreen from './screens/BillingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductsScreen from './screens/ProductsScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Home from './screens/Home';
import AudioPlayer from './AudioPlayer';
import Welcome from './screens/Welcome';

function App() {

  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
   <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/" >ThessianSound</Link>
      </div>
      <div className="header-links">
        <Link to="/cart">Cart</Link>
        {
          userInfo ? <Link to="/profile">{userInfo.name}</Link>:
          <Link to="/signin">Sign In</Link>
        }
      </div>
    </header>
    <aside className="sidebar">
      <h3>Menu</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Services</a>
        </li>

        <li>
          <a href="index.html">Products</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Switch>
        <Route path="/signin" component={SigninScreen} />
        <Route path="/orders" component={OrdersScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/audioplayer" component={AudioPlayer} />
        <Route path="/billing" component={BillingScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/product/:id" component={BeatStore} />
        <Route exact path="/" component={Home} />
        <Route path="/cart/:id?" component={CartScreen} />
      </Switch>
        </div>
        </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  ); 
}

export default App;
