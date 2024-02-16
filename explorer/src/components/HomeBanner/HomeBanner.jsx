import styles from "../HomeBanner/HomeBanner.module.scss";
import cover from '../../assets/explorer.webp';
import { AppConstants } from '../../constants/app-constants';
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

/**
 * @description - This function returns Banner component
 */
function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles["site-desc"]}>
                <div className={styles.welcome}>{ AppConstants.BANNER.WELCOME_MSG }</div>
                <div className={styles.slogan}>
                    { AppConstants.BANNER.PROMO_MSG }
                    <span className={styles.south}>{ AppConstants.BANNER.SOUTH }</span>
                </div>
                <Dropdown />
                <div className={styles["btn-container"]}>
                    <Button btnText={AppConstants.BANNER.EXPLORE_BTN_TXT} />
                </div>
                
            </div>
            <div className={styles["banner-img"]}>
                <img src={cover} alt="cover image" />
            </div>
        </section>
    );
}

export default Banner;