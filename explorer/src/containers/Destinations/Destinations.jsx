import styles from '../Destinations/Destinations.module.scss';
import { AppConstants } from '../../constants/app-constants';
import Card from '../../components/TouristCard/TouristCard';

function Destinations() {
    return (
       <section className={styles["destinations-container"]}>
            <h1>{ AppConstants.DESTINATIONS_SECTION.DESTINATIONS }</h1>
            <h3>{ AppConstants.DESTINATIONS_SECTION.SLOGAN }</h3>

            <div className={styles["tourist-cards-container"]}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
       </section>
    );
}

export default Destinations;