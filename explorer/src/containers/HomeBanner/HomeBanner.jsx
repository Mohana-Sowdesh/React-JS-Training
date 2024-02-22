import styles from "../HomeBanner/HomeBanner.module.scss";
import cover from '../../assets/explorer.webp';
import { AppConstants } from '../../constants/app-constants';
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";

/**
 * @description - This function returns Banner component
 */
function HomeBanner() {
    return (
        <section className={styles.banner}>
            <div className={styles["site-desc"]}>
                <div className={styles.welcome}>{ AppConstants.BANNER.WELCOME_MSG }</div>
                <div className={styles.slogan}>
                    { AppConstants.BANNER.PROMO_MSG }
                    <span className={styles.south}>{ AppConstants.BANNER.SOUTH }</span>
                </div>
                <Dropdown dropDownValues={ AppConstants.PLACES_DROPDOWN_VALUES }/>
                <div className={styles["btn-container"]}>
                    <Button btnText={AppConstants.BANNER.EXPLORE_BTN_TXT} />
                </div>
                
            </div>
            <div className={styles["banner-img-container"]}>
                <img src={cover} alt="cover image" className={styles["banner-img"]} />
            </div>
        </section>
    );
}

export default HomeBanner;