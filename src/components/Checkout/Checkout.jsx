import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import css from './Checkout.module.css';

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <div className={css.checkoutContainer}>
      <div className={css.orderSummary}>
        <h2>Order Summary</h2>
        {cartItems.map(item => (
          <div key={item.ttl} className={css.summaryItem}>
            <span>{item.ttl} x {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className={css.total}>
          <h3>Total Amount: ₹{getCartTotal()}</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={css.paymentForm}>
        <h2>Delivery Details</h2>
        
        <div className={css.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label>Delivery Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className={css.submitButton}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout; 