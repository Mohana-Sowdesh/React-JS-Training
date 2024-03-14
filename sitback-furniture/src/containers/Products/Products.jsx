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
    // const lsCartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        console.log('Re-render happened');
        localStorage.setItem('cart', JSON.stringify(cartData));
    }, [cartData]);

    const addProductToCart = (productId, cartItems) => {
        console.log('productId', productId);

        let i = productsData.findIndex(product => product.id === productId);
        let productData = productsData[i];
        let productDataForCart = { id: productData.id, photo: productData.photo, name: productData.name, price: productData.price, description: productData.description, quantity: 1 };
        // if(cartData.length === 0) {
        //     setCartData([productDataForCart]);
        //     console.log('cartData after insertion', cartData);
        //     // localStorage.setItem('cart', JSON.stringify([productDataForCart]));
        // }
        // else {
            let index = cartData.findIndex(product => product.id === productData.id);
            if(index === -1) {
                setCartData(prevState => {
                    
                    return [...cartItems, productDataForCart];
                });
                console.log('cartData after insertion 1111', cartData);
            }
            else {
                // cartData[index].quantity = cartData[index].quantity + 1;
                const products = [...cartItems];
                let modifiedproduct = products.find(product => product.id === productData.id);
                let remainingProducts = products.filter(product => product.id !== productData.id);
                // console.log(prevState[index]);
                // console.log("before",prevState[index].quantity);
                modifiedproduct.quantity = modifiedproduct.quantity+ 1;
                setCartData(prevState => {
                    console.log("called addproduct");
                    console.log("cartitems",cartItems);
                   
                    // console.log("after",prevState[index].quantity);                    
                    // console.log("prevState on update", prevState);
                    return [...remainingProducts, modifiedproduct];
                });
                console.log('cartData after insertion', cartData);
            }
            // localStorage.setItem('cart', JSON.stringify(cartData));
        // }
        console.log('cartData',cartData);
    }

    const updateCount = (productId, newQty) => {
        if(newQty === 0) {
            const updatedArray = cartData.filter(product => productId !== product.id);
            setCartData(updatedArray);
        }
        else {
            setCartData((prevCartData)=>{
                let i = prevCartData.findIndex(product => product.id === productId);
                prevCartData[i].quantity = newQty;
                return [...prevCartData]
            });
        }
    }
    console.log('cartData after insertion 1111', cartData);

    const productCards = productsData.map(product => <ProductCard key={ product.id } productData ={ product } onChange={ addProductToCart } cartItems={cartData}/>);

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