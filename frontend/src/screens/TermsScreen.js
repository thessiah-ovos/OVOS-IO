import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveAgreement } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import BasicNonExclusiveLicense from '../licenses/BasicNonExclusiveLicense';
import CopyrightAssignmentAgreement from '../licenses/CopyrightAssignmentAgreement';
import ExclusiveProUnlimitedLicense from '../licenses/ExclusiveProUnlimitedLicense';
import ProUnlimitedNonExclusiveLicense from '../licenses/ProUnlimitedNonExclusiveLicense';
import StandardNonExclusiveLicense from '../licenses/StandardNonExclusiveLicense';
import PremiumNonExclusiveLicense from '../licenses/PremiumNonExclusiveLicense';

function TermsScreen(props) {

  const [agreementStatus, setAgreement] = useState('');

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveAgreement({ agreementStatus }));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div>
      <h2>Licensing</h2>
      {
              cartItems[0].lease === "Non-Exclusive-Basic" ? 
              <div>
                <BasicNonExclusiveLicense />
              </div>
              :
              cartItems[0].lease === "Non-Exclusive-Standard" ?
              <div>
                <StandardNonExclusiveLicense />
              </div>
              : 
              cartItems[0].lease === "Non-Exclusive-Pro" ? 
              <div>
                <ProUnlimitedNonExclusiveLicense />
              </div>
              :
              cartItems[0].lease === "Exclusive-Pro-Unlimited" ?
              <div>
                 <ExclusiveProUnlimitedLicense />

              </div>
              :
              cartItems[0].lease === "Copyright" ?
              <div>
                <CopyrightAssignmentAgreement />
              </div>
              : 
              cartItems[0].lease === "Non-Exclusive-Premium" ?
              <div>
                <PremiumNonExclusiveLicense />
              </div>
              :
              <div>
                <h4>An Error Occured - No Lease Selected!</h4>
               Lease: {console.log(cartItems[0].lease)}
              </div>
            }
            <input 
    type="checkbox" 
    id="Sign" name="signature" 
    value="esign" 
    onChange={(e) => setAgreement(e.target.value)}
></input>
    <label for="signature"> I Agree </label>
    <input type="checkbox" id="noSign" name="nosignature" value="noesign"></input>
    <label for="nosignature"> I Do Not Agree</label>
    <button type="submit" className="button primary" onClick={submitHandler}>
                Continue
              </button>
    </div>
  </div>

}
export default TermsScreen;