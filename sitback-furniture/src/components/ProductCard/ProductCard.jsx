import styles from '../ProductCard/ProductCard.module.scss';
import chair from '../../assets/chairs.png';
import { BiSolidCheckShield } from "react-icons/bi";
import Button from '../Button/Button';
import { AppConstants } from '../../constants/app-constants';

/**
 * @description Returns a product card component
 * @returns 
 */
function ProductCard() {
    let value = 36990;

    return (
        <div className={ styles['product-card-container'] }>
            <div className={ styles['product-img-container'] }>
                <img src={ chair } alt='product image' />
            </div>
            <div className={ styles['product-details-container'] }>
                <div>3 + 2 Couch and Sofa Set Orange</div>
                <div>₹ { value.toLocaleString('en-US') }</div>
            </div>
            <div className={ styles['product-description-container'] }>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
            <div className={ styles['product-guarantee-detail-container'] }>
                <BiSolidCheckShield  className={ styles['checked-shield-icon'] }/>
                <div className={ styles['guarantee-text'] }>
                    1 YEAR GUARANTEE
                </div>
            </div>
            <div className={ styles['horizontal-line'] }></div>
            <div className={ styles['buttons-container'] }>
                <div className={ styles['add-to-wishlist'] }>{ AppConstants.PRODUCT_CARD.ADD_TO_WISHLIST }</div>
                <Button btnText={AppConstants.PRODUCT_CARD.ADD_TO_CART} />
            </div>
        </div>
    );
}

export default ProductCard;