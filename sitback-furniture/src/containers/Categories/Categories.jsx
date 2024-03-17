import styles from '../Categories/Categories.module.scss';
import { AppConstants } from '../../constants/app-constants';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { useState, useEffect } from 'react';
import { getCategoriesData } from '../../services/Data';

/**
 * @description This function returns categories container with all furniture categories cards
 * @returns 
 */
function Categories() {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        getCategoriesData().then(data => setCategoriesData(data));
    }, []);

    const categoryCards = categoriesData.map((category, index) => <CategoryCard key={index} category={ category } />);
    return (
        <>
            <div className={styles['categories-container']}>
                <div className={styles['headline']}>{ AppConstants.HOME_PAGE.TAGLINE }</div>
                <div className={styles['sub-headline']}>{ AppConstants.HOME_PAGE.CATCH_PHRASE }</div>
                {
                    categoryCards.length > 0 ?
                    <div className={styles['category-cards-container']}>
                        { categoryCards }
                    </div> :
                    <div className={ styles['loading-txt']}>{ AppConstants.LOADING_TXT }</div>
                }
            </div>
            <footer className={styles.footer}>{ AppConstants.HOME_PAGE.COPYRIGHTS_TXT } { new Date().getFullYear() }</footer>
        </>
    );
}

export default Categories;