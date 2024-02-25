import TouristCard from '../../components/TouristCard/TouristCard';
import styles from '../SimilarDestinations/SimilarDestinations.module.scss';
import { AppConstants } from '../../constants/app-constants';
import PropTypes from 'prop-types';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

/**
 * @description Container that holds similar destination cards 
 * @param {*} selectedDestination 
 * @param {*} relatedPlacesData
 * @returns 
 */
function SimilarDestinations({ selectedDestination, relatedPlacesData }) {
    let similarPlaces;

    if(relatedPlacesData.length > 0) {
        similarPlaces = relatedPlacesData?.map((place) => <TouristCard imageUrl={place.imgUrl} placeData={place.data} /> );
    }
    else {
        similarPlaces = <ErrorMsg />
    }

    return (
        <div className={styles['similar-destinations-container']}>
            <div className={styles['heading']}>{ AppConstants.SIMILAR_DESTINATIONS.SIMILAR_DESTINATIONS_TXT }</div>
            <div className={styles['heading-desc']}>{ AppConstants.SIMILAR_DESTINATIONS.SIMILAR_DESTINATIONS_DESC } <span> { selectedDestination } </span></div>
            <div className={styles['cards-container']}>
               { similarPlaces }
            </div>
        </div>
    );
}

SimilarDestinations.propTypes = {
    selectedDestination: PropTypes.string,
    relatedPlacesData: PropTypes.array
}

export default SimilarDestinations;