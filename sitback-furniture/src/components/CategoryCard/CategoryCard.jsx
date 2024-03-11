import styles from '../CategoryCard/CategoryCard.module.scss';
import { AppConstants } from '../../constants/app-constants';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

/**
 * @description This function returns single furniture category card component
 * @param {*} category - object
 * @returns 
 */
function CategoryCard({ category }) {
  const navigate = useNavigate();
  const navigateToCategoryPage = () => {
    navigate(`/products/${ category.categoryName.toLowerCase() }`)
  }

  return (
    <div className={styles['category-card-container']}>
      <div className={styles['img-container']}>
        <img src={ category.imageUrl } alt='Category image' />
      </div>
      <div className={styles['category-name']}>{ category.categoryName }</div>
      <div className={styles['category-description']}>{ category.description }</div>
      <Button btnText={ AppConstants.HOME_PAGE.SHOP_NOW_BTN_TXT } onClick={ navigateToCategoryPage } />
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired
}

export default CategoryCard;
