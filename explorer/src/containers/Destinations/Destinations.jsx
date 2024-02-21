import styles from '../Destinations/Destinations.module.scss';
import { AppConstants } from '../../constants/app-constants';
import Card from '../../components/TouristCard/TouristCard';
import PropTypes from 'prop-types';

function Destinations({placesData}) {
    let destinationCards;

    if(placesData.length > 0) {
        destinationCards = placesData.map((place,index) => {
            console.log("i", AppConstants.DESTINATION_IMG_URL[index]);
            return <Card imageUrl={AppConstants.DESTINATION_IMG_URL[index]} placeData={place}/>
        });
    }

    return (
       <section className={styles["destinations-container"]}>
            <h1>{ AppConstants.DESTINATIONS_SECTION.DESTINATIONS }</h1>
            <h3>{ AppConstants.DESTINATIONS_SECTION.SLOGAN }</h3>

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