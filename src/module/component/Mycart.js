import React from 'react';
import { useCart } from '../component/Cartcontext'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

function Mycart() {
  const navigate = useNavigate(); // Renamed from usenavi to navigate for clarity
  const { cart, removeFromCart } = useCart();

  const checkout = () => {
    navigate("/cart/AddressPage"); // Navigate to checkout page
  };

  return (
    <div className='container mt-4'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <ul className="list-group mb-3">
              {cart.map(product => (
                <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="my-0">{product.title}</h6>
                    <small className="text-muted">{product.description || 'Brief description'}</small>
                  </div>
                  <span className="text-muted">₹{product.price}</span>
                  <button 
                    onClick={() => removeFromCart(product._id)} 
                    className="btn btn-danger btn-sm">
                    Remove
                  </button>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>₹{cart.reduce((total, item) => total + item.price, 0)}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <button className="w-100 btn btn-primary btn-lg" onClick={checkout} type="button" disabled={cart.length === 0}   >Proceed to Checkout</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default Mycart;
