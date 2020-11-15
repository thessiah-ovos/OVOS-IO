import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listBeats } from '../actions/beatActions';
import Pagination from './Pagination';

function Home(props) {
 
  const beatList = useSelector(state => state.beatList);
  const { products, loading, error} = beatList;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  useEffect(() => {
     dispatch(listBeats());
     return () => {
    };
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return  loading ? <div>Loading...</div>: 
  error ? <div>{error}</div> :
  <div>
    <ul className="products">
    {currentPosts.map(product =>
        <li key={product._id}>
          <div className="product">
              <Link to={'/product/' + product._id}> 
              <img className="product-image" src={product.image} alt="product" />
          </Link>
          <div className="product-name">
                  <Link className="product-name" to={'/product/' + product._id}>{product.name}</Link>          </div>
          </div>
      </li>
            )
      }
  </ul>
   <Pagination
   postsPerPage={postsPerPage}
   totalPosts={products.length}
   paginate={paginate}
 /> 
</div>
}

export default Home;