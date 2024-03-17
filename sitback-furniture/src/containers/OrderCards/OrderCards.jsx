import ProductCard from "../../components/ProductCard/ProductCard";
import { AppConstants } from "../../constants/app-constants";
import styles from '../OrderCards/OrderCards.module.scss';

/**
 * @description Returns a container containing all order card components
 * @returns 
 */
function OrderCards() {
    const cartProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let orderCards;

    if(cartProducts.length > 0) {
        orderCards = cartProducts.map(product => <ProductCard key={product.id} productData={product} isOrderCard={true}/>);
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

export default OrderCards;