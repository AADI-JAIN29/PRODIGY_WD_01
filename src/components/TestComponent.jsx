import React from 'react';
import { useCart } from '../context/CartContext';

const TestComponent = () => {
  const { cartItems, addToCart } = useCart();

  const testItem = {
    ttl: "Test Item",
    price: 100,
    quantity: 1
  };

  return (
    <div>
      <button onClick={() => addToCart(testItem)}>
        Add Test Item to Cart
      </button>
      <div>
        Cart Items: {cartItems.length}
      </div>
    </div>
  );
};

export default TestComponent; 