import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsBeat } from '../actions/beatActions';
import {Howl, Howler} from "howler";

function BeatStore(props) {
      
   // const [qty, setQty] = useState(1);
   const [lease, setLease] = useState(1);
  // const [price, setPrice] = useState('');
   const beatDetails = useSelector((state) => state.beatDetails);
   const {  product, loading, error } = beatDetails;
   const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(detailsBeat(props.match.params.id));
        return () => {
            //;
        };

    }, []);

    const handleAddToCart = () => {
        var price;
        console.log(lease);
        lease === "Non-Exclusive-Basic" ? price = 29.99 :
        lease === "Non-Exclusive-Standard" ? price = 49.99 :
        lease === "Non-Exclusive-Premium" ? price = 99.99 :
        lease === "Non-Exclusive-Pro-Unlimited" ? price = 299.99 :
        lease === "Exclusive-Pro-Unlimited" ? price = 499.99 :
        lease === "Copyright" ? price = 1000 : price = 0;
        console.log(price)
        props.history.push("/cart/" + props.match.params.id + "?price:" + price + "?lease=" + lease); //+ "?price=" + price
    }

    return <div>
        <div className="back-to-home">
            <Link to="/">Home</Link>
        </div>
            {loading ? (
            <div>Loading...</div>
            ) : error ? (
            <div>{error} </div>
            ) : (

                <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                       <Link to="/audioplayer">Audio Sampler</Link>
                    </li>
                </ul>
             </div> 
             <div className="details-action">
                 <ul> 
                        <li>
                        <li>            
                        Prices: <li>Non-Exclusive-Basic - $29.99 </li>
                                <li>Non-Exclusive-Standard - $49.99 </li>
                                <li>Non-Exclusive-Premium - $99.99 </li>
                                <li>Non-Exclusive-Pro-Unlimited - $299.99 </li>
                                <li>Exclusive-Pro-Unlimited - $499.99 </li>
                                <li>Copyright - $1000 </li>

                        Lease: <select value={lease} onChange={(e) => { setLease(e.target.value)}}>
                            <option>Non-Exclusive-Basic</option>
                            <option>Non-Exclusive-Premium</option>
                            <option>Non-Exclusive-Standard</option>
                            <option>Non-Exclusive-Pro-Unlimited</option>
                            <option>Exclusive-Pro-Unlimited</option>
                            <option>Copyright</option>
                        </select>
                        </li>
                        </li> 
                        <li>
                            <button onClick={handleAddToCart} className="button primary" >Add to Cart</button>
                        </li>
                     </ul>
                 </div>   
            </div>  
            )
        }
        
    </div>
}

export default BeatStore;