import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>Products</h3>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
