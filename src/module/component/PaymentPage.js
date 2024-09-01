// src/module/component/PaymentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., finalize payment and order)
    navigate('/order-confirmation');
  };

  return (
    <div className='container'>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" id="credit" value="credit" checked={paymentMethod === 'credit'} onChange={handlePaymentMethodChange} />
            <label className="form-check-label" htmlFor="credit">Credit Card</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" id="debit" value="debit" checked={paymentMethod === 'debit'} onChange={handlePaymentMethodChange} />
            <label className="form-check-label" htmlFor="debit">Debit Card</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" id="upi" value="upi" checked={paymentMethod === 'upi'} onChange={handlePaymentMethodChange} />
            <label className="form-check-label" htmlFor="upi">UPI</label>
          </div>
        </div>

        {paymentMethod === 'upi' && (
          <div className="mb-3">
            <label htmlFor="upi-id" className="form-label">UPI ID</label>
            <input type="text" className="form-control" id="upi-id" value={upiId} onChange={(e) => setUpiId(e.target.value)} required />
          </div>
        )}

        {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
          <>
            <div className="mb-3">
              <label htmlFor="card-name" className="form-label">Name on Card</label>
              <input type="text" className="form-control" id="card-name" value={cardName} onChange={(e) => setCardName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="card-number" className="form-label">Card Number</label>
              <input type="text" className="form-control" id="card-number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="expiration" className="form-label">Expiration Date</label>
              <input type="text" className="form-control" id="expiration" value={expiration} onChange={(e) => setExpiration(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
            </div>
          </>
        )}
        <button type="submit" className="btn btn-primary">Complete Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
