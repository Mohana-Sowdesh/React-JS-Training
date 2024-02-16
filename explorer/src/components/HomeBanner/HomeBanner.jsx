import styles from "../HomeBanner/HomeBanner.module.scss";
import cover from '../../assets/explorer.webp';
import { AppConstants } from '../../constants/app-constants';
import Button from "../Button/Button";

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
                
                <select name="place" className={styles.dropdown}>
                    <option value="Choose" hidden selected disabled>Choose</option>
                    <option value="Chidambaram">Chidambaram</option>
                    <option value="Masinagudi">Masinagudi</option>
                    <option value="Pollachi">Pollachi</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="Kumbakkonam">Kumbakkonam</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                </select>

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