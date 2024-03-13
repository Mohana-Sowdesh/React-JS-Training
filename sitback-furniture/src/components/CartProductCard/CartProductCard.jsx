import styles from '../CartProductCard/CartProductCard.module.scss';
import { useState } from 'react';
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
function CartProductCard({ productData, isCartProduct, updateCount }) {
    const [productCount, setProductCount] = useState(productData.quantity);
    const price = +productData.price;

    const decrementCount = () => {
        setProductCount(prevCount => prevCount-1);
        console.log(productCount);
        updateCount(productData.id, productCount);
        if(productCount === 0)
            console.log('kbdc');
    }

    const incrementCount = () => {
        setProductCount(prevCount => prevCount+1);
        updateCount(productData.id, productCount);
        console.log(productCount);
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
                    <div className={ styles['count-txt'] }>{ productCount }</div>
                    <div className={ styles['incrementer-decrementer'] } onClick={ incrementCount }>+</div>
                </div>
                :
                <div className={ styles['btn-wrapper']}> 
                    <Button btnText={ AppConstants.PRODUCT_CARD.ADD_TO_CART } isCartBtn={true} />
                </div>
            }
        </div>
    );
}
/***** Ti be deleted **** */
CartProductCard.defaultProps = {
    isCartProduct: false
}

CartProductCard.propTypes = {
    productData: PropTypes.object.isRequired,
    isCartProduct: PropTypes.bool.isRequired,
    updateCount: PropTypes.func
}

export default CartProductCard;