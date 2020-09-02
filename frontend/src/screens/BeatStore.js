import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsBeat } from '../actions/beatActions';
import {Howl, Howler} from "howler";

function BeatStore(props) {
      
   // const [qty, setQty] = useState(1);
   const [lease, setLease] = useState(1);
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
        props.history.push("/cart/" + props.match.params.id + "?lease=" + lease)
    }

    Howler.volume(0.5)
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
                       Price: <b>${product.price}</b>
                    </li>
                    <li>
                       Artist: {product.artist}
                    </li>
                    <li>
                       Audio Test: {/*product.audio*/}
                    </li>
                </ul>
             </div> 
             <div className="details-action">
                 <ul>
                     
                    <li>
                        Price: {product.price}
                    </li> 
                        <li>
                        <li>
                        Lease: <select value={lease} onChange={(e) => { setLease(e.target.value)}}>
                            <option>Non-Exclusive-Basic</option>
                            <option>Non-Exclusive-Premium</option>
                            <option>Non-Exclusive-Standard</option>
                            <option>Non-Exclusive-Pro</option>
                            <option>Exclusive-Pro-Unlimited</option>
                            <option>Copyright</option>
                        </select>
                        </li>
                      {/*  Qty: <select value={qty} onChange={(e) => { setQty(e.target.value)}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
            </select> */}
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