import ProductCard from "../../components/ProductCard/ProductCard";
import { AppConstants } from "../../constants/app-constants";
import styles from '../OrderCards/OrderCards.module.scss';
import PropTypes from 'prop-types';

/**
 * @description Returns a container containing all order card components
 * @param {*} cartProducts - array
 * @returns 
 */
function OrderCards({ cartProducts }) {
    let orderCards;

    if(cartProducts.length > 0) {
        orderCards = cartProducts.map(product => <ProductCard key={product.id} productData={product} isOrderCard={true}/>);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    return (
        <div className={styles['order-container']}>
            <div className={styles['order-confirmation-txt']}>{ AppConstants.ORDER_PAGE.ORDER_CONFIRMATION_TXT }</div>
            <div className={styles['thankyou-msg']}>{ AppConstants.ORDER_PAGE.THANKYOU_MSG }</div>
            <div className={styles['order-cards-container']}>
                { orderCards }
            </div>
        </div>
    );
}

OrderCards.propTypes = {
    cartProducts: PropTypes.array.isRequired
}

export default OrderCards;