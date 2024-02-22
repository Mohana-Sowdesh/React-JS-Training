import styles from '../Destinations/Destinations.module.scss';
import { AppConstants } from '../../constants/app-constants';
import TouristCard from '../../components/TouristCard/TouristCard';
import PropTypes from 'prop-types';

function Destinations({placesData}) {
    let destinationCards;

    if(placesData.length > 0) {
        destinationCards = placesData.map((place,index) => {
            return <TouristCard imageUrl={AppConstants.DESTINATION_IMG_URL[index]} placeData={place}/>
        });
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