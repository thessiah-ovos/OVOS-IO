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
import Navbar from './screens/Navbar';
import Root from './screens/Root';
import About from './screens/About';
import Footer from './Footer';
import Pricing from './screens/Pricing';

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
    <>
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path='/' component={Root} />
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
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing}/>
    </Switch>
    <Footer /> 
  </BrowserRouter>
  </>
  ); 
}

export default App;
