import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../component/Cartcontext'; // Adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Mycart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (product, action) => {
    updateQuantity(product._id, action);
  };

  const checkout = () => {
    navigate("/cart/AddressPage", { state: { cart } }); // Pass cart data including product quantities
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Your cart is empty.
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <div className="list-group">
              {cart.map(product => (
                <div key={product._id} className="list-group-item d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img src={product.image} alt={product.title} className="img-thumbnail me-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <div>
                      <h5 className="mb-1">{product.title}</h5>
                      <p className="mb-1 text-muted">{product.description && product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}</p>

                      <div className="d-flex align-items-center">
                        <span className="me-2 text-primary">₹{product.price}</span>
                        <span className="border rounded p-2" style={{width:"max-content"}}>
                          <button className="btn btn-sm btn-secondary me-1" type='button' onClick={() => handleQuantityChange(product, 'increment')}>+</button>
                          {product.quantity || 1} {/* Display quantity */}
                          <button className="btn btn-sm btn-secondary ms-1" type='button' onClick={() => handleQuantityChange(product, 'decrement')}>-</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(product._id)} 
                    className="btn btn-danger btn-sm">
                    Remove
                  </button>
                </div>
              ))}
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <h5>Total</h5>
                <strong>₹{cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)}</strong> {/* Calculate total including quantities */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <button 
              className="btn btn-primary btn-lg w-100" 
              onClick={checkout} 
              type="button" 
              disabled={cart.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mycart;
