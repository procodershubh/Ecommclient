import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { backendurl, razorkey } from '../../Servicepage';
import { useCart } from './Cartcontext'; // Import useCart

function AddressPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [mobile, setMobile] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
        
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state?.cart || []; // Ensure cart is an array
  const { clearCart } = useCart(); // Destructure clearCart from useCart

  const handlePaymentSuccess = (response) => {
    // Payment is successful, now proceed to submit the order data
    const orderDate = new Date().toISOString(); // ISO format to ensure it's standard

    const orderData = {
      name,
      address,
      mobile,
      city,
      state,
      zip,
      orderDate,
      cartItems: cart.map(product => ({
        title: product.title,
        description: product.description,
        quantity: product.quantity || 1, // Ensure quantity is included
        price: (product.price * (product.quantity || 1)).toFixed(2), // Ensure price is included
        image: product.image || '', // Include image if available
      })),
      paymentId: response.razorpay_payment_id, // Store the payment ID
      paymentStatus: 'completed', // Manually set the payment status to completed

      orderId: response.razorpay_order_id, // Store the order ID from Razorpay
    };

    const token = localStorage.getItem('token'); // Check if this is not null

    fetch(`${backendurl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include token in the header
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.orderId) {
          console.log('Order successfully submitted. Order ID:', data.orderId);
          clearCart(); // Clear the cart after successful order submission
          navigate('/Ordersuccess'); // Redirect on successful order submission
        } else {
          setError('Failed to get order ID');
        }
      })
      .catch((error) => {
        console.error('Error submitting order:', error);
        setError('Error submitting order. Please try again.');
      });
  };

  const handleProceedToPayment = async (e) => {
    e.preventDefault();

    if (!name || !address || !city || !mobile || !state || !zip) {
      setError('Please fill in all fields.');
      return;
    }

    const amount = cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0).toFixed(2) * 100;


    setLoading(true); // Start loading state

    const token = localStorage.getItem('token'); // Check if this is not null

    // Create an order in the backend to get the Razorpay order ID
    try {
      const response = await fetch(`${backendurl}/razorpay/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in the header

        },
        
        body: JSON.stringify({ amount }), // Send the amount to create the Razorpay order
      });

      const order = await response.json();

      // Razorpay options
      const options = {
        key: `${razorkey}`, // Replace with your Razorpay key
        
        amount: order.amount, // in paise (smallest currency unit)
        currency: 'INR',
        name: 'shubham ecommerce',
        description: 'Order Payment',
        order_id: order.id, // Get order ID from backend
        handler: handlePaymentSuccess, // On successful payment
        prefill: {
          name: name,
          contact: mobile,
        },
        theme: {
          color: '#3399cc',
        },
        
      };

      console.log(options)

      const rzp = new window.Razorpay(options);
      rzp.open(); // Open Razorpay payment window
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      setError('Error creating Razorpay order. Please try again.');
    }
  };

  return (
    <div className='container'>
      <h2>Address Details</h2>
      <form >
        <div className="mb-2">
          <label htmlFor="Name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="mb-2">
          <label htmlFor="Mobile" className="form-label">Mobile</label>
          <input type="text" className="form-control" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="mb-2">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="mb-2">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" className="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} required />
        </div>
        <div className="mb-2">
          <label htmlFor="zip" className="form-label">Zip Code</label>
          <input type="text" className="form-control" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} required />
        </div>
        {error && <p className="text-danger">{error}</p>} {/* Display error message */}
        <button type="submit" onClick={handleProceedToPayment} className="btn btn-primary">
          {loading ? 'Processing...' : 'Proceed to Payment'} 
        </button>      </form>
    </div>
  );
}



export default AddressPage;
