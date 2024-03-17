import ProductCard from '../../components/ProductCard/ProductCard';
import Cart from '../Cart/Cart';
import styles from '../Products/Products.module.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppConstants } from '../../constants/app-constants';

/**
 * @description Returns products container with all category product cards
 * @returns 
 */
function Products({ productsData }) {
    const lsCartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const lsWishlistData = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
    const [cartData, setCartData] = useState(lsCartData);
    const [wishlistData, setWishlistData] = useState(lsWishlistData);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartData));
    }, [cartData]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistData));
    }, [wishlistData]);

    const addProductToCart = (productId) => {
        const i = productsData.findIndex(product => product.id === productId);
        const productData = productsData[i];
        const productDataForCart = { id: productData.id, photo: productData.photo, name: productData.name, price: productData.price, description: productData.description, quantity: 1 };
        const index = cartData.findIndex(product => product.id === productData.id);
        if(index === -1) {
            setCartData([...cartData, productDataForCart]);
        }
        else {
            const products = [...cartData];
            let modifiedproduct = products.find(product => product.id === productData.id);
            const remainingProducts = products.filter(product => product.id !== productData.id);
            modifiedproduct.quantity = modifiedproduct.quantity + 1;
            setCartData([...remainingProducts, modifiedproduct]);
        }
    }

    const updateCount = (productId, newQty) => {
        if(newQty === 0) {
            const updatedArray = cartData.filter(product => productId !== product.id);
            setCartData(updatedArray);
        }
        else {
            setCartData((prevCartData)=>{
                const i = prevCartData.findIndex(product => product.id === productId);
                prevCartData[i].quantity = newQty;
                return [...prevCartData]
            });
        }
    }

    const addToWishlist = (productId) => {
        const i = productsData.findIndex(product => product.id === productId);
        const productData = productsData[i];
        const productDataForWishlist = { id: productData.id, photo: productData.photo, name: productData.name, price: productData.price, description: productData.description };
        const index = wishlistData.findIndex(product => product.id === productData.id);
        if(index === -1) {
            setWishlistData( [...wishlistData, productDataForWishlist] );
        }
    }

    const addProductFromWishlistToCart = (productId) => {
        const i = wishlistData.findIndex(product => product.id === productId);
        let productDataForCart = wishlistData[i];
        const updatedArray = wishlistData.filter(product => productId !== product.id);
        setWishlistData(updatedArray);
        
        const index = cartData.findIndex(product => product.id === productDataForCart.id);
        if(index === -1) {
            productDataForCart.quantity = 1;
            setCartData([...cartData, productDataForCart]);
        }
        else {
            const products = [...cartData];
            let modifiedproduct = products.find(product => product.id === productDataForCart.id);
            const remainingProducts = products.filter(product => product.id !== productDataForCart.id);
            modifiedproduct.quantity = modifiedproduct.quantity + 1;
            setCartData([...remainingProducts, modifiedproduct]);
        }
    }

    const productCards = productsData.map(product => <ProductCard key={ product.id } productData ={ product } cartUpdateHandler={ addProductToCart } wishlistUpdateHandler={ addToWishlist } isOrderCard={false}/>);
    
    return (
        <div className={ styles['products-with-cart-container']}>
            {
                productCards.length > 0 ?
                <div className={ styles['products-container'] }>
                    { productCards }
                </div> :
                <div className={ styles['loading-txt']}>{ AppConstants.LOADING_TXT }</div>
            }
            {
                (cartData.length > 0 || wishlistData.length > 0) &&
                <Cart onChange={ updateCount } cartData={ cartData } wishlistData={ wishlistData } wishlistToCartHandler={ addProductFromWishlistToCart }/>
            }
        </div>
    );
}

Products.propTypes = {
    productsData: PropTypes.array
}

export default Products;