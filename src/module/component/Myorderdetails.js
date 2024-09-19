import React, { useEffect, useState } from 'react';
import { backendurl } from '../../Servicepage';
import { useParams } from 'react-router-dom';

function Myorderdetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define the steps for order status tracking
  const steps = ["Pending", "Approved", "Shipped", "Delivered", "cancelled"];


  // useEffect(() => {
  //   const fetchOrderDetails = async () => {
  //     const token = localStorage.getItem('authToken'); // or use a global state manager
  //     if (!token) {
  //       setError('No authentication token found.');
  //       setLoading(false);
  //       return;
  //     }

  //     try {

  //       const response = await axios.get(`${backendurl}/myorders/${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }

          
  //       });

  //       setOrder(response.data);
  //     } catch (err) {
  //       console.error('Error fetching order details:', err);
  //       setError('Failed to fetch order details. Please try again later.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchOrderDetails();
  // }, [id]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const token = localStorage.getItem('token'); // Get the token from local storage
      if (!token) {
        setError('No authentication token found.');
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch(`${backendurl}/myorders/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Include token in the header
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
  
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error('Error fetching order details:', error);
        setError('Failed to fetch order details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchOrderDetails();
  }, [id]);
  


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!order) {
    return <p>No order found.</p>;
  }


  // Function to get the index of the current step
  const getCurrentStepIndex = (status) => {
    return steps.indexOf(status);
  };

  const currentStepIndex = getCurrentStepIndex(order.orderStatus);

  // Format the date for display
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
   <div className='container my-5'>
      <div className='order-details-card shadow-lg rounded p-4'>
        <div className='row text-center mb-4'>
          <h2 className='order-details-heading'>Order Details</h2>
        </div>

        <div className='row'>
          {/* Order Info */}
          <div className='col-md-6'>
            <div className='order-info'>
              <h4>Order ID: {order._id}</h4>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Mobile:</strong> {order.mobile}</p>
              <p><strong>City:</strong> {order.city}</p>
              <p><strong>State:</strong> {order.state}</p>
              <p><strong>Zip Code:</strong> {order.zip}</p>
              <p><strong>Order Date:</strong> {formatDate(order.orderDate)}</p> {/* Assuming `orderDate` is the date field */}

            </div>
          </div>

           {/* Progress Bar for Order Status */}
          <div className='col-md-6'>
            <div className='status-bar'>
              <h4>Order Progress</h4>
              <div className="progress-container">
                {steps.map((step, index) => (
                  <div key={index} className={`progress-step ${order.orderStatus === 'cancelled' ? 'cancelled' : (index <= currentStepIndex ? 'active' : '')}`}>                    <span>{step}</span>
                    {index < steps.length - 1 && <div className="progress-line"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ordered Products */}
        <h4 className='mt-5'>Ordered Products:</h4>
        <div className="row">
          {order.cartItems && order.cartItems.length > 0 ? (
            order.cartItems.map((product, index) => (
              <div key={index} className="col-md-12 mb-4">
                <div className="product-card shadow-sm rounded p-3 d-flex align-items-center border">
                  <div className="row w-100">
                    <div className="col-md-3 text-center">
                      <img
                        src={product.image || '/path/to/placeholder-image.jpg'} // Placeholder image if missing
                        alt={product.title}
                        className="product-image rounded"
                      />
                    </div>
                    <div className="col-md-7">
                      <h5 className="product-title">{product.title}</h5>
                      <p className="product-description">{product.description}</p>
                      
                    </div>
                    <div className="col-md-2 text-end">
                      <p className="product-price">Price: ₹{product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found in this order.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Myorderdetails;
