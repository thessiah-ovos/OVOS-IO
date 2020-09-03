import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveBilling } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function TermsScreen(props) {

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch(saveTerms({}));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Licensing Terms</h2>
          </li>

          </ul>
      </form>
    </div>
  </div>

}
export default TermsScreen;