import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.qty} 
          <button onClick={() => removeFromCart(item.id)}>-</button>
        </div>
      ))}
      <h4>Total: ${total}</h4>
    </div>
  );
};

export default Cart;
