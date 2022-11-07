import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping} />
        <div className="qty-display">0</div>
    </div>
  );
}
export default CartWidget;