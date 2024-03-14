import styles from '../CartProductCard/CartProductCard.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { AppConstants } from '../../constants/app-constants';

/**
 * @description Returns product-card component displayed in cart
 * @param {productData} object
 * @param {isCartProduct} bool
 * @param {updateCount} function
 * @returns 
 */
function CartProductCard({ productData, isCartProduct, updateCount, cartToWishlist }) {
    const price = +productData.price;

    const decrementCount = () => {
        productData.quantity = productData.quantity - 1;
        updateCount(productData.id, productData.quantity);
    }

    const incrementCount = () => {
        productData.quantity = productData.quantity + 1;
        updateCount(productData.id, productData.quantity);
    }

    const cartToWishlistHandler = () => {
        cartToWishlist(productData.id);
    }

    return (
        <div className={ styles['cart-product-container'] }>
            <div className={ styles['img-container'] }>
                <img src={ productData.photo } alt='product image' />
            </div>
            <div className={ styles['product-details-container'] }>
                <div className={ styles['product-name'] }>{ productData.name }</div>
                <div className={ styles['product-price'] }>₹ { price.toLocaleString('en-US') }</div>
            </div>
            {
                isCartProduct ?
                <div className={ styles['count-updator-container'] }>
                    <div className={ styles['incrementer-decrementer'] } onClick={ decrementCount }>-</div>
                    <div className={ styles['count-txt'] }>{ productData.quantity }</div>
                    <div className={ styles['incrementer-decrementer'] } onClick={ incrementCount }>+</div>
                </div>
                :
                <div className={ styles['btn-wrapper']}> 
                    <Button btnText={ AppConstants.PRODUCT_CARD.ADD_TO_CART } isCartBtn={true} onClick={ cartToWishlistHandler } />
                </div>
            }
        </div>
    );
}
/***** Ti be deleted **** */
CartProductCard.defaultProps = {
    isCartProduct: true
}

CartProductCard.propTypes = {
    productData: PropTypes.object.isRequired,
    isCartProduct: PropTypes.bool.isRequired,
    updateCount: PropTypes.func
}

export default CartProductCard;