import CartProductCard from '../../components/CartProductCard/CartProductCard';
import { AppConstants } from '../../constants/app-constants';
import Button from '../../components/Button/Button';
import styles from '../Cart/Cart.module.scss';
import { useState } from 'react';

/**
 * @description Returns cart container
 * @param {cartData} param0 
 * @param {onChange}
 * @returns 
 */
function Cart({ cartData, onChange, wishlistData, wishlistToCartHandler }) {
    const [activeMenu, setActiveMenu] = useState('cart');
    let cartItems, wishlistItems;
    let cartTotalValue = 0;
    cartData.map(product => cartTotalValue = cartTotalValue + ((+product.quantity) * (+product.price)));

    if(cartData && cartData.length > 0) {
        cartItems = cartData.map(product => <CartProductCard productData={product} key={ product.id } updateCount={onChange}/>);
    }

    if(wishlistData && wishlistData.length > 0) {
        wishlistItems = wishlistData.map(product => <CartProductCard productData={product} key={ product.id } isCartProduct={ false } cartToWishlist={  wishlistToCartHandler }/>)
    }
    
    const updateActiveMenu = (changeTo) => {
        setActiveMenu(changeTo);
    }

    return (
        <div className={ styles['cart-container']}>
            <div className={ styles['cart-header-container']}>
                <div className={ `${styles['cart-menu-item']} ${activeMenu==='cart' && styles.active}` } onClick= { () => updateActiveMenu('cart') } >{ AppConstants.CART.MY_CART_TXT }</div>
                <div className={ `${styles['cart-menu-item']} ${activeMenu==='wishlist' && styles.active}` } onClick= { () => updateActiveMenu('wishlist') } >{ AppConstants.CART.MY_WISHLIST_TXT }</div>
            </div>
            <div className={ styles['cart-main-stage-container']}>
                {
                    activeMenu === 'cart' ?  cartItems : wishlistItems 
                }
            </div>
            {
                activeMenu === 'cart' ?
                <div className={ styles['cart-value-container']}>
                    <div>
                        <div className={ styles['total-amt-txt']}>{ AppConstants.CART.TOTAL_AMT_TXT }</div>
                        <div className={ styles['cart-value']}>₹ { cartTotalValue.toLocaleString('en-US') }</div>
                    </div>
                    <Button btnText={ AppConstants.CART.PLACE_ORDER_BTN_TXT } />
                </div>
                :
                null
            }
        </div>
    );
}

export default Cart;