import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.ttl === item.ttl);
      if (existingItem) {
        return prev.map(i => 
          i.ttl === item.ttl 
            ? {...i, quantity: i.quantity + 1}
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemTitle) => {
    setCartItems(prev => prev.filter(item => item.ttl !== itemTitle));
  };

  const updateQuantity = (itemTitle, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemTitle);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.ttl === itemTitle 
          ? {...item, quantity: newQuantity}
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      getCartTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 