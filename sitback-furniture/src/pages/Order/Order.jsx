import Header from "../../components/Header/Header";
import Categories from "../../containers/Categories/Categories";
import OrderCards from "../../containers/OrderCards/OrderCards";

/**
 * @description Order confirmation page
 * @returns 
 */
function Order() {
    return(
        <>
            <Header />
            <OrderCards />
            <Categories />
        </>
    );
}

export default Order;
