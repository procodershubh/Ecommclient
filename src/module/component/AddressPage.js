import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { backendurl } from '../../Servicepage';
import { useCart } from './Cartcontext'; // Import useCart

function AddressPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [mobile, setMobile] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state?.cart || []; // Ensure cart is an array
  const { clearCart } = useCart(); // Destructure clearCart from useCart

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !address || !city || !mobile || !state || !zip) {
      setError('Please fill in all fields.');
      return;
    }
  
    const orderDate = new Date().toISOString(); // ISO format to ensure it's standard
  
    // Calculate total price for each item
    const orderData = {
      name,
      address,
      mobile,
      city,
      state,
      zip,
      orderDate, // Add order date to order data
      cartItems: cart.map(product => ({
        title: product.title,
        description: product.description,
        quantity: product.quantity || 1, // Ensure quantity is included 
        // price: product.price,
        price: (product.price * (product.quantity || 1)).toFixed(2), // Ensure price is included
        image: product.image || '', // Include image if available, default to empty string if not
      })),
    };
  
    const token = localStorage.getItem('token'); // Get the token from local storage
  
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
  
  return (
    <div className='container'>
      <h2>Address Details</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default AddressPage;
