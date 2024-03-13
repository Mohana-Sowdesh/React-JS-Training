import styles from '../ProductCard/ProductCard.module.scss';
import { useState } from 'react';
import { BiSolidCheckShield } from "react-icons/bi";
import Button from '../Button/Button';
import { AppConstants } from '../../constants/app-constants';
import fallbackImg from '../../assets/Fallback image.jpeg';

/**
 * @description Returns a product card component
 * @returns 
 */
function ProductCard({ productData, onChange }) {
    const [imgSrc, setImgSrc] = useState(productData.photo);
    const price = +productData.price;

    const handleError = () => {
        setImgSrc(fallbackImg);
    }

    const addProductToCart = () => {
        onChange(productData.id);
    }  

    return (
        <div className={ styles['product-card-container'] }>
            <div className={ styles['product-img-container'] }>
                <img src={ imgSrc } alt='product image' onError={ handleError } />
            </div>
            <div className={ styles['product-details-container'] }>
                <div className={ styles['product-name-container'] }>{ productData.name }</div>
                <div>₹ { price.toLocaleString('en-US') }</div>
            </div>
            <div className={ styles['product-description-container'] }>
                { productData.description }
            </div>
            <div className={ styles['product-guarantee-detail-container'] }>
                <BiSolidCheckShield  className={ styles['checked-shield-icon'] }/>
                <div className={ styles['guarantee-text'] }>
                    { productData.guarantee } 
                    <span>{ productData.guarantee === 1 ? ' YEAR' : ' YEARS' } { AppConstants.PRODUCT_CARD.GUARANTEE_TXT } </span>
                </div>
            </div>
            <div className={ styles['horizontal-line'] }></div>
            <div className={ styles['buttons-container'] }>
                <div className={ styles['add-to-wishlist'] }>{ AppConstants.PRODUCT_CARD.ADD_TO_WISHLIST }</div>
                <Button btnText={AppConstants.PRODUCT_CARD.ADD_TO_CART} onClick={ addProductToCart }/>
            </div>
        </div>
    );
}

export default ProductCard;
