import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddressPage() {

  const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const[mobile,setMobile] =useState('')
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can handle form submission here (e.g., save to global state or server)
      navigate('/cart/AddressPage/payment');
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
          <input type="text" className="form-control" id="address" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
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
        <button type="submit" className="btn btn-primary">Proceed to Payment</button>
      </form>
    </div>
  )
}

export default AddressPage