import styles from '../CartProductCard/CartProductCard.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { AppConstants } from '../../constants/app-constants';
import { numberToPriceConverter } from '../../helpers/numberToPriceConverter';
import { useState } from 'react';
import fallbackImg from '../../assets/Fallback image.jpeg';

/**
 * @description Returns product-card component displayed in cart
 * @param {productData} object
 * @param {isCartProduct} bool
 * @param {updateCount} function
 * @param {cartToWishlist} function
 * @returns 
 */
function CartProductCard({ productData, isCartProduct, updateCount, cartToWishlist }) {
    const [imgSrc, setImgSrc] = useState(productData.photo);

    const handleError = () => {
        setImgSrc(fallbackImg);
    }

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
                <img src={ imgSrc } alt='product image' onError={ handleError } />
            </div>
            <div className={ styles['product-details-container'] }>
                <div className={ styles['product-name'] }>{ productData.name }</div>
                <div className={ styles['product-price'] }>₹ { numberToPriceConverter(productData.price) }</div>
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

CartProductCard.defaultProps = {
    isCartProduct: true
}

CartProductCard.propTypes = {
    productData: PropTypes.object.isRequired,
    isCartProduct: PropTypes.bool.isRequired,
    updateCount: PropTypes.func,
    cartToWishlist: PropTypes.func
}

export default CartProductCard;