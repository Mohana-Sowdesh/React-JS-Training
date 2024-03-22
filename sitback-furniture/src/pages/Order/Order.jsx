import Header from "../../components/Header/Header";
import Categories from "../../containers/Categories/Categories";
import OrderCards from "../../containers/OrderCards/OrderCards";

/**
 * @description Order confirmation page
 * @returns 
 */
function Order() {
    const cartProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    return(
        <>
            <Header />
            <OrderCards cartProducts={cartProducts}/>
            <Categories />
        </>
    );
}

export default Order;
