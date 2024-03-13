import ProductCard from '../../components/ProductCard/ProductCard';
import Cart from '../Cart/Cart';
import styles from '../Products/Products.module.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @description Returns products container with all category product cards
 * @returns 
 */
function Products({ productsData }) {
    const productCards = productsData.map(product => <ProductCard key={ product.id } productData ={ product } onChange={ (id) => addProductToCart(id) }/>);
    const lsCartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    console.log('lsCartData', lsCartData);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        console.log('Re-render happened');
        localStorage.setItem('cart', JSON.stringify(cartData));
    }, [cartData]);

    const addProductToCart = (productId) => {
        console.log('productId', productId);
        let i = productsData.findIndex(product => product.id === productId);
        let productData = productsData[i];
        let productDataForCart = { id: productData.id, photo: productData.photo, name: productData.name, price: productData.price, description: productData.description, quantity: 1 };
        if(!cartData) {
            setCartData([...productDataForCart]);
            // localStorage.setItem('cart', JSON.stringify([productDataForCart]));
        }
        else {
            let index = cartData.findIndex(product => product.id === productData.id);
            if(index === -1) {
                cartData.push(productDataForCart);
                setCartData(cartData);
            }
            else {
                cartData[index].quantity = cartData[index].quantity + 1;
                setCartData(cartData);
            }
            // localStorage.setItem('cart', JSON.stringify(cartData));
        }
        console.log('cartData',cartData);
    }

    const updateCount = (productId, newQty) => {
        console.log('productId', productId);
        console.log('newQty', newQty);
        let i = productsData.findIndex(product => product.id === productId);
        cartData[i].quantity = newQty;
        setCartData(cartData);
    }

    return (
        <div className={ styles['products-with-cart-container']}>
            <div className={ styles['products-container'] }>
                { productCards }
            </div>
            <Cart onChange={ updateCount } cartData={ cartData }/>
        </div>
    );
}

export default Products;