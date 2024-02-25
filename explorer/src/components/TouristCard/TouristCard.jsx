import styles from '../TouristCard/TouristCard.module.scss';
import Button from '../Button/Button';
import { AppConstants } from '../../constants/app-constants';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/**
 * @description Function to render a tourist card component
 * @param {*} imageUrl
 * @param {*} placeData
 * @returns 
 */
function TouristCard({imageUrl, placeData }) {
    const navigate = useNavigate();
    const navigateToDestinationPage = () => {
        navigate(`/place/${placeData.city.toLowerCase()}`);
    }

    return (
        <div className={styles["tourist-card-container"]}>
            <img src={ imageUrl } alt="Destination img" />
            <h2 className={styles["tourist-card-heading"]}>{ placeData.place }</h2>
            <h4 className={styles["tourist-card-subheading"]}>{ placeData.city }</h4>
            <p className={styles["tourist-card-content"]}>{ placeData.shortDescription }</p>
            <Button btnText={AppConstants.DESTINATIONS_SECTION.READ_MORE_BTN_TXT} onClick={ navigateToDestinationPage}/>
        </div>
    );
}

TouristCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    placeData: PropTypes.object.isRequired
}

export default TouristCard;