import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <CartProvider>
      <h1>Simple Shopping Cart</h1>
      <ProductList />
      <Cart />
    </CartProvider>
  );
}

export default App;
