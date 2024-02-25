import styles from '../Destinations/Destinations.module.scss';
import { AppConstants } from '../../constants/app-constants';
import TouristCard from '../../components/TouristCard/TouristCard';
import PropTypes from 'prop-types';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

/**
 * @description Container that holds all the destination cards
 * @param {*} placesData 
 * @returns 
 */
function Destinations({placesData}) {
    let destinationCards;

    if(placesData.length > 0) {
        destinationCards = placesData.map((place,index) => {
            return <TouristCard imageUrl={AppConstants.DESTINATION_IMG_URL[index]} placeData={place}/>
        });
    }
    else {
        destinationCards = <ErrorMsg />
    }

    return (
       <section className={styles["destinations-container"]}>
            <div className={styles['heading']}>{ AppConstants.DESTINATIONS_SECTION.DESTINATIONS }</div>
            <div className={styles['heading-desc']}>{ AppConstants.DESTINATIONS_SECTION.SLOGAN }</div>

            <div className={styles["tourist-cards-container"]}>
                { destinationCards }
            </div>
       </section>
    );
}

Destinations.propTypes = {
    placesData: PropTypes.array
}

export default Destinations;