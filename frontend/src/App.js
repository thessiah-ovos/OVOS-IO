import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import BeatStore from './screens/BeatStore';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import TermsScreen from './screens/TermsScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductsScreen from './screens/ProductsScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Home from './screens/Home';
import AudioPlayer from './AudioPlayer';
import Welcome from './screens/Welcome';
import Services from './screens/Services';
import ContactUs from './screens/ContactUs';

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
        
        <Link to="/" >OVOS</Link>
      </div>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/beatstore">Beat Store</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        {
          userInfo ? <Link to="/profile">{userInfo.name}</Link>:
          <Link to="/signin">Sign In</Link>
        }
      </div>
    </header>
    
    <main className="main">
      <div className="ovosWelx">
      </div>
      <div className="content">
        <Switch>
        <Route path="/signin" component={SigninScreen} />
        <Route path="/orders" component={OrdersScreen} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/audioplayer" component={AudioPlayer} />
        <Route path="/terms" component={TermsScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/product/:id" component={BeatStore} />
        <Route path="/beatstore" component={Home} />
        <Route exact path="/" component={Welcome} />
        <Route path="/cart/:id?" component={CartScreen} />
      </Switch>
        </div>
        </main>
    <footer className="footer">
      <div>
        &copy; thessiansound.com | Designed by Thessiah 
        <div className="footer-bottom">
        All rights reserved. </div>
      </div>
    </footer>
  </div>
  </BrowserRouter>
  ); 
}

export default App;
