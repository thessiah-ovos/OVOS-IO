import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsBeat } from '../actions/beatActions';
import {Howl, Howler} from "howler";

function BeatStore(props) {
      
   // const [qty, setQty] = useState(1);
   const [lease, setLease] = useState(1);
   const [price, setPrice] = useState(29.99);
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
      setPrice(39.99)
      console.log(price)
        props.history.push("/cart/" + props.match.params.id + "?lease=" + lease); //+ "?price=" + price
    }

    const handlePrice = () => {
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