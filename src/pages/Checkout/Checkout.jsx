import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import css from './Checkout.module.css';

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle payment processing
    alert('Payment processed successfully!');
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
        <h2>Payment Details</h2>
        
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

        <div className={css.paymentMethods}>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
        </div>

        {paymentMethod === 'card' && (
          <>
            <div className={css.formGroup}>
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                maxLength="16"
                required
              />
            </div>
            <div className={css.cardDetails}>
              <div className={css.formGroup}>
                <label>Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={css.formGroup}>
                <label>CVV</label>
                <input
                  type="password"
                  name="cvv"
                  maxLength="3"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </>
        )}

        {paymentMethod === 'upi' && (
          <div className={css.formGroup}>
            <label>UPI ID</label>
            <input
              type="text"
              name="upiId"
              placeholder="yourname@upi"
              required
            />
          </div>
        )}

        <button type="submit" className={css.payButton}>
          Pay ₹{getCartTotal()}
        </button>
      </form>
    </div>
  );
};

export default Checkout; 