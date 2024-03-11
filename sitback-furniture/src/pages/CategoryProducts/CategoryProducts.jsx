import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

/**
 * @description Page to view all products present for the category
 * @returns 
 */
function CategoryProducts() {
    const { category } = useParams();

    return (
        <>
            <Header selectedCategory={ category } />
            <div>{ category }</div>
            <ProductCard />
        </>
    );
}

export default CategoryProducts;