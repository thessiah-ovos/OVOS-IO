import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
  }

  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector(state => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name)
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
    return () => {

    };
  }, [userInfo])

  const downloader = (order) => {
    return (
        <div>
            <div class="imgs">
                <a href={order.orderItems[0].image} download>
                    <button type="button" class="btn btn-indigo btn-lg">Download </button>
                </a>
            </div>
        </div>
    )
}

  console.log(orders)

  return <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>User Profile</h2>
            </li>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved Successfully.</div>}
            </li>
            <li>
              <label htmlFor="name">
                Name
          </label>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="email">
                Email
          </label>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>

            <li>
              <button type="submit" className="button primary">Update</button>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
            </li>

          </ul>
        </form>
      </div>
    </div>
    <div className="profile-orders content-margined">
      {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>LEASE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid}</td>
                  <td>{order.orderItems[0].lease}</td>
                  <td>
                    <Link to={"/order/" + order._id}>DETAILS</Link>
                  </td>
                </tr>)}
              </tbody>
            </table>
      }
      <div>
        <h2>Download Files</h2>
      </div>
      <div>
      {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table2">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>LEASE</th>
                  <th>DOWNLOAD</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.orderItems[0].lease}</td>
                  <td>
                    {order.orderItems[0].lease === 'Non-Exclusive-Basic' && order.orderItems[0].name === "Davu" ? 
                    <a href="https://drive.google.com/drive/folders/1-hwhiDfJce7zwl9oK-qEXqRxJaVzzONM?usp=sharing">Davu NX Basic Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Standard' && order.orderItems[0].name === "Davu" ? 
                    <a href="https://drive.google.com/drive/folders/1iqfdrRHVNUfg0MGEk6Ibf9JHtnss2HIJ?usp=sharing">Davu NX Standard Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Premium' && order.orderItems[0].name === "Davu" ? 
                    <a href="https://drive.google.com/drive/folders/1rmazWDmEaFrMQ0dSQNM0ewxDWk2CdXX9?usp=sharing">Davu NX Premium Files</a> : 

                    order.orderItems[0].lease === 'Non-Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Davu" ? 
                    <a href="https://drive.google.com/drive/folders/1nJ_YlnA1ozy6rQdt5ZcUPycaWASknMT_?usp=sharing">Davu NX Pro Files</a> : 

                    order.orderItems[0].lease === 'Copyright' && order.orderItems[0].name === "Davu" ? 
                    <a href="https://drive.google.com/drive/folders/1nJ_YlnA1ozy6rQdt5ZcUPycaWASknMT_?usp=sharing">Davu Copyright Files</a> : 
                    
                    order.orderItems[0].lease === 'Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Davu" ? 
                    <a href="https://drive.google.com/drive/folders/1nJ_YlnA1ozy6rQdt5ZcUPycaWASknMT_?usp=sharing">Davu EX Pro Files</a> : 


                    order.orderItems[0].lease === 'Non-Exclusive-Basic' && order.orderItems[0].name === "Jewry" ? 
                    <a href="https://drive.google.com/drive/folders/19vEq_apryyoeY7rIVHEk_88dkHJ_Ag5x?usp=sharing">Jewry NX Basic Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Standard' && order.orderItems[0].name === "Jewry" ? 
                    <a href="https://drive.google.com/drive/folders/1Eb5CPv1lvMH5xj4nVaPjtHHCjHAv0gBM?usp=sharing">Jewry NX Standard Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Premium' && order.orderItems[0].name === "Jewry" ? 
                    <a href="https://drive.google.com/drive/folders/1BZ_I-4SOcJjAyEz-brqydwkhBgbZmCFX?usp=sharing">Jewry NX Premium Files</a> : 

                    order.orderItems[0].lease === 'Non-Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Jewry" ? 
                    <a href="https://drive.google.com/drive/folders/1BZ_I-4SOcJjAyEz-brqydwkhBgbZmCFX?usp=sharing">Jewry NX Pro Files</a> : 

                    order.orderItems[0].lease === 'Copyright' && order.orderItems[0].name === "Jewry" ? 
                    <a href="https://drive.google.com/drive/folders/1epoLsat5MPM62phw5L2AhEQpsVTqC1X7?usp=sharing">Jewry Copyright Files</a> : 
                    
                    order.orderItems[0].lease === 'Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Jewry" ? 
                    <a href="https://drive.google.com/drive/folders/1RzZcA381L1iB_BDJ3ZXdpBBMt5VbP5Tq?usp=sharing">Jewry EX Pro Files</a> : 



                    order.orderItems[0].lease === 'Non-Exclusive-Basic' && order.orderItems[0].name === "Made It" ? 
                    <a href="https://drive.google.com/drive/folders/1V71Tod_ASNB8kDJUPi7NlBSkmW55clgM?usp=sharing">Made It NX Basic Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Standard' && order.orderItems[0].name === "Made It" ? 
                    <a href="https://drive.google.com/drive/folders/1xDzH2FdXeIgPRFjDCOONZe_yo-2bbFj6?usp=sharing">Made It NX Standard Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Premium' && order.orderItems[0].name === "Made It" ? 
                    <a href="https://drive.google.com/drive/folders/1dgYeYTxDbwIpUKA-fwV8srMvYdQxtQKH?usp=sharing">Made It NX Premium Files</a> : 

                    order.orderItems[0].lease === 'Non-Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Made It" ? 
                    <a href="https://drive.google.com/drive/folders/1dgYeYTxDbwIpUKA-fwV8srMvYdQxtQKH?usp=sharing">Made It NX Pro Files</a> : 

                    order.orderItems[0].lease === 'Copyright' && order.orderItems[0].name === "Made It" ? 
                    <a href="https://drive.google.com/drive/folders/1fteYNUg4kMxlxNspfp8UHsWUGRT3OrTJ?usp=sharing">Made It Copyright Files</a> : 
                    
                    order.orderItems[0].lease === 'Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Made It" ? 
                    <a href="https://drive.google.com/drive/folders/1fteYNUg4kMxlxNspfp8UHsWUGRT3OrTJ?usp=sharing">Made It EX Pro Files</a> : 




                    order.orderItems[0].lease === 'Non-Exclusive-Basic' && order.orderItems[0].name === "Nuisance" ? 
                    <a href="https://drive.google.com/drive/folders/1k-qIJzsvG-I7MdVMxToD99IH_FkaXWT_?usp=sharing">Nuisance NX Basic Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Standard' && order.orderItems[0].name === "Nuisance" ? 
                    <a href="https://drive.google.com/drive/folders/1kiG6x4K6kXu7zDUFNYvJiQc1UKC-JBJv?usp=sharing">Nuisance NX Standard Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Premium' && order.orderItems[0].name === "Nuisance" ? 
                    <a href="https://drive.google.com/drive/folders/1AzydP7dnaJ-gBAUkW670vEt01dOZvImM?usp=sharing">Nuisance NX Premium Files</a> : 

                    order.orderItems[0].lease === 'Non-Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Nuisance" ? 
                    <a href="https://drive.google.com/drive/folders/1AzydP7dnaJ-gBAUkW670vEt01dOZvImM?usp=sharing">Nuisance NX Pro Files</a> : 

                    order.orderItems[0].lease === 'Copyright' && order.orderItems[0].name === "Nuisance" ? 
                    <a href="https://drive.google.com/drive/folders/1fvNKqCv49SoUoDASFhkq5tBfwPF1EQn_?usp=sharing">Nuisance Copyright Files</a> : 
                    
                    order.orderItems[0].lease === 'Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Nuisance" ? 
                    <a href="https://drive.google.com/drive/folders/1E6CfjOOc2BalQQaQl6Mt_npb1YIZrVju?usp=sharing">Nuisance EX Pro Files</a> : 



                    order.orderItems[0].lease === 'Non-Exclusive-Basic' && order.orderItems[0].name === "Pages" ? 
                    <a href="https://drive.google.com/drive/folders/1gwtohNFwC6OENLNAW2kcGhlXB8DP6x8h?usp=sharing">Pages NX Basic Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Standard' && order.orderItems[0].name === "Pages" ? 
                    <a href="https://drive.google.com/drive/folders/1nmAuq22Sj5sOdlrtRTMvsiF0ZAH4zI7v?usp=sharing">Pages NX Standard Files</a> : 
                    
                    order.orderItems[0].lease === 'Non-Exclusive-Premium' && order.orderItems[0].name === "Pages" ? 
                    <a href="https://drive.google.com/drive/folders/1EeI0ZaBBFUWK6Z5J7YJF75Jek5YGSZIt?usp=sharing">Pages NX Premium Files</a> : 

                    order.orderItems[0].lease === 'Non-Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Pages" ? 
                    <a href="https://drive.google.com/drive/folders/1EeI0ZaBBFUWK6Z5J7YJF75Jek5YGSZIt?usp=sharing">Pages NX Pro Files</a> : 

                    order.orderItems[0].lease === 'Copyright' && order.orderItems[0].name === "Pages" ? 
                    <a href="https://drive.google.com/drive/folders/1kuCXwxb4Rk0gN2Am6yvCsT2uTRu7Fs0o?usp=sharing">Pages Copyright Files</a> : 
                    
                    order.orderItems[0].lease === 'Exclusive-Pro-Unlimited' && order.orderItems[0].name === "Pages" ? 
                    <a href="https://drive.google.com/drive/folders/1Uy3zeuE7Mg9ttk-wWln5GG08ZOQz9hvM?usp=sharing">Pages EX Pro Files</a> 
                    : 
                  <h2>No Links Availble</h2>
                  }
                  </td>
                </tr>)}
              </tbody>
            </table>
      }
      </div>
    </div>
  </div>
}

export default ProfileScreen;