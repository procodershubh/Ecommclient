// import React from 'react';
// import { useCart } from '../component/Cartcontext'; // Adjust path as needed

// function Mycart() {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div className='container'>
//       <h2>Your Cart</h2>
//       <ul className="list-group mb-3">
//         {cart.map(product => (
//           <li key={product.id} className="list-group-item d-flex justify-content-between lh-sm">
//             <div>
//               <h6 className="my-0">{product.title}</h6>
//               <small className="text-body-secondary">Brief description</small>
//             </div>
//             <span className="text-body-secondary">₹{product.price}</span>
//             <button onClick={() => removeFromCart(product.id)} className="btn btn-danger btn-sm">Remove</button>
//           </li>
//         ))}
//         <li className="list-group-item d-flex justify-content-between">
//           <span>Total</span>
//           <strong>₹{cart.reduce((total, item) => total + item.price, 0)}</strong>
//         </li>
//       </ul>
//       {/* Add form for checkout */}
//       <button className="w-100 btn btn-primary btn-lg" type="button">Proceed to Checkout</button>
//     </div>
//   );
// }

// export default Mycart;
