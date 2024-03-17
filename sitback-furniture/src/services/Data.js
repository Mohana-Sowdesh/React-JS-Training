import axios from 'axios';
import { AppConstants } from '../constants/app-constants';

const errorHandler = () => {
    return { data: [] }
}

export const getCategoriesData = async() => {
    const categoriesData = await axios.get(AppConstants.API_URLS.CATEGORIES_URL).catch(errorHandler);
    return categoriesData.data;
}

export const getProductsData = async(category) => {
    const productsData = await axios.get(AppConstants.API_URLS.PRODUCTS_URL + category).catch(errorHandler);
    return productsData.data;
}