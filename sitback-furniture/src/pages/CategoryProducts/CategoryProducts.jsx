import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsData } from "../../services/Data";
import Products from "../../containers/Products/Products";
/**
 * @description Page to view all products present for the category
 * @returns 
 */
function CategoryProducts() {
    const { category } = useParams();
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProductsData(category).then(data => setProductsData(data));
    }, [category]);

    return (
        <>
            <Header selectedCategory={ category } />
            <Products productsData ={ productsData }/>
        </>
    );
}

export default CategoryProducts;