import styles from "../DestinationBanner/DestinationBanner.module.scss"
import PropTypes from 'prop-types';

/**
 * @description Function that renders the banner of a specific destination
 * @param {*} placeData 
 * @param {*} imgUrl
 * @param {*} temperature
 * @returns 
 */
function DestinationBanner({ placeData, imgUrl, temperature }) {
    return (
        <section className={styles.banner}>
            <div className={styles["site-desc"]}>
                <div className={styles["place-name"]}>{ placeData?.city }</div>
                <div className={styles["short-desc"]}>{ placeData?.place }</div>
                <div className={styles["temperature"]}>{ temperature }&#xB0;C</div>
            </div>
            <div className={styles["banner-img-container"]}>
                <img src={ imgUrl } alt="cover image" className={styles["banner-img"]} />
            </div>
        </section>
    );
}

DestinationBanner.propTypes = {
    placeData: PropTypes.object.isRequired,
    imgUrl: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
}

export default DestinationBanner;