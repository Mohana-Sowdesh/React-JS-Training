import styles from '../TouristCard/TouristCard.module.scss';
import image from '../../assets/chidambaram.png';
import Button from '../Button/Button';
import { AppConstants } from '../../constants/app-constants';
import PropTypes from 'prop-types';

/**
 * @description - Function to render a tourist card component
 * @returns 
 */
function Card({imageUrl, placeData }) {
    return (
        <div className={styles["tourist-card-container"]}>
            <img src={ imageUrl } alt="Destination img" />
            <h2 className={styles["tourist-card-heading"]}>{ placeData.place }</h2>
            <h4 className={styles["tourist-card-subheading"]}>{ placeData.city }</h4>
            <p className={styles["tourist-card-content"]}>{ placeData.shortDescription }</p>
            <Button btnText={AppConstants.DESTINATIONS_SECTION.READ_MORE_BTN_TXT} />
        </div>
    );
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    placeData: PropTypes.object.isRequired
}

export default Card;