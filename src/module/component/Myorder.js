import React, { Fragment, useEffect, useState } from 'react';
import { backendurl } from '../../Servicepage';
import { Link } from 'react-router-dom';

function MyOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    

    const fetchOrders = async () => {
      const token = localStorage.getItem('token'); // Get the token from local storage
      if (!token) {
        setError('No authentication token found.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${backendurl}/myorders`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Include token in the header
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        setOrders(sortedOrders);
      } 
      
      catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row text-center'>
          <h4>My Orders:</h4>  
        </div>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="row">
            {orders.map((order) => (
              <div key={order._id} className="col-md-12 mb-4">
                <ul className="list-group">
                  {order.cartItems.map((product, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center mb-4 border">
                      <Link to={`view/${order._id}`} className="link-offset-2 link-underline link-underline-opacity-0">
                        <div className="row w-100">
                          <div className="col-md-3">
                            <img
                              src={product.image || '/path/to/placeholder-image.jpg'} // Use a placeholder image if the product image is missing
                              alt={product.title}
                              style={{ width: '150px', aspectRatio: '1/1', marginTop: '30px', marginLeft: '30px' }}
                            />
                          </div>
                          <div className="col-md-7">
                            <h5>{product.title}</h5>
                            <hr/>
                            <p>{product.description}</p>
                          </div>
                          <div className="col-md-2 text-right">
                            <p>Price: ₹{product.price}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default MyOrder;
