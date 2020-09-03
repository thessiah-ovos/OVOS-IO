import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listBeats } from '../actions/beatActions';

function Home(props) {

  const beatList = useSelector(state => state.beatList);
  const { products, loading, error} = beatList;
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(listBeats());
     return () => {
      //

    };
  }, []);
  
  return  loading ? <div>Loading...</div>: 
  error ? <div>{error}</div> :
  <ul className="products">
    {products.map(product =>
        <li key={product._id}>
          <div className="product">
           <div className="product-name">
              <Link to={'/product/' + product._id}> 
              <img className="product-image" src={product.image} alt="product" />
          </Link>
          <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
          </div>
          </div>
          </div>
      </li>
            )
      }
    
  </ul>
}

export default Home;