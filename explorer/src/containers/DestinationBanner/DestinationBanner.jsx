import styles from "../DestinationBanner/DestinationBanner.module.scss"
import PropTypes from 'prop-types';

function DestinationBanner({ placeData, imgUrl }) {
    return (
        <section className={styles.banner}>
            <div className={styles["site-desc"]}>
                <div className={styles["place-name"]}>{ placeData.city }</div>
                <div className={styles["short-desc"]}>{ placeData.place }</div>
                <div className={styles["temperature"]}>32&#xB0;C</div>
            </div>
            <div className={styles["banner-img-container"]}>
                <img src={ imgUrl } alt="cover image" className={styles["banner-img"]} />
            </div>
        </section>
    );
}

DestinationBanner.propTypes = {
    placeData: PropTypes.object.isRequired,
    imgUrl: PropTypes.string.isRequired
}

export default DestinationBanner;