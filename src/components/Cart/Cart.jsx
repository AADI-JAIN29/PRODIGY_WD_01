import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import css from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className={css.emptyCartContainer}>
        <div className={css.emptyCart}>
          <div className={css.emptyCartIcon}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add items from a restaurant to start a new order</p>
          <button onClick={() => navigate(-1)} className={css.backButton}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={css.cartContainer}>
      <div className={css.cartContent}>
        <div className={css.cartHeader}>
          <h2>Your Cart ({cartItems.length} items)</h2>
          <button onClick={() => navigate(-1)} className={css.continueButton}>
            Add More Items
          </button>
        </div>

        <div className={css.cartItems}>
          {cartItems.map((item) => (
            <div key={item.ttl} className={css.cartItem}>
              <div className={css.itemInfo}>
                <img src={item.imgSrc} alt={item.ttl} className={css.itemImage} />
                <div className={css.itemDetails}>
                  <h3>{item.ttl}</h3>
                  <p className={css.itemPrice}>₹{item.price}</p>
                  <p className={css.itemDesc}>{item.desc?.slice(0, 100)}</p>
                </div>
              </div>
              
              <div className={css.itemActions}>
                <div className={css.quantityControls}>
                  <button 
                    onClick={() => updateQuantity(item.ttl, item.quantity - 1)}
                    className={css.quantityBtn}
                  >
                    -
                  </button>
                  <span className={css.quantity}>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.ttl, item.quantity + 1)}
                    className={css.quantityBtn}
                  >
                    +
                  </button>
                </div>
                <div className={css.itemTotal}>
                  ₹{item.price * item.quantity}
                </div>
                <button 
                  className={css.removeBtn}
                  onClick={() => removeFromCart(item.ttl)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={css.cartSummary}>
          <div className={css.summaryDetails}>
            <div className={css.summaryItem}>
              <span>Item Total</span>
              <span>₹{getCartTotal()}</span>
            </div>
            <div className={css.summaryItem}>
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>
            <div className={css.summaryItem}>
              <span>GST and Restaurant Charges</span>
              <span>₹{Math.round(getCartTotal() * 0.05)}</span>
            </div>
            <div className={css.totalAmount}>
              <span>To Pay</span>
              <span>₹{getCartTotal() + 40 + Math.round(getCartTotal() * 0.05)}</span>
            </div>
          </div>
          
          <Link to="/checkout" className={css.checkoutButton}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart; 