import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import css from './FloatingCart.module.css';

const FloatingCart = () => {
  const { cartItems, getCartTotal } = useCart();

  if (cartItems.length === 0) return null;

  return (
    <div className={css.floatingCart}>
      <div className={css.cartSummary}>
        <span>{cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}</span>
        <span className={css.divider}>|</span>
        <span>₹{getCartTotal()}</span>
      </div>
      <Link to="/cart" className={css.viewCartButton}>
        View Cart →
      </Link>
    </div>
  );
};

export default FloatingCart; 