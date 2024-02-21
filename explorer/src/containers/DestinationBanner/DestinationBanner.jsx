import styles from "../DestinationBanner/DestinationBanner.module.scss"
import { AppConstants } from '../../constants/app-constants';
import pollachiImg from '../../assets/masangudi.png';

function DestinationBanner() {
    return (
        <section className={styles.banner}>
            <div className={styles["site-desc"]}>
                <div className={styles["place-name"]}>Masinagudi</div>
                <div className={styles["short-desc"]}>Never ending paddy fields and narrow roads</div>
                <div className={styles["temperature"]}>32&#xB0;C</div>
            </div>
            <div className={styles["banner-img"]}>
                <img src={ pollachiImg } alt="cover image" />
            </div>
        </section>
    );
}

export default DestinationBanner;