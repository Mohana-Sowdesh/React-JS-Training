import styles from "../HomeBanner/HomeBanner.module.scss";
import cover from '../../assets/explorer.webp';
import { AppConstants } from '../../constants/app-constants';
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @description This function returns Banner component
 * @returns 
 */
function HomeBanner() {
    const [selectedDestination, setSelectedDestination] = useState('');
    const navigate = useNavigate();
    const navigateToDestinationPage = () => {
        if(selectedDestination!=='')
            navigate(`/place/${selectedDestination.toLowerCase()}`);
    }

    const handleInputChange = (event) => {
        setSelectedDestination(event.target.value);
    }

    return (
        <section className={styles.banner}>
            <div className={styles["site-desc"]}>
                <div className={styles.welcome}>{ AppConstants.BANNER.WELCOME_MSG }</div>
                <div className={styles.slogan}>
                    { AppConstants.BANNER.PROMO_MSG }
                    <span className={styles.south}>{ AppConstants.BANNER.SOUTH }</span>
                </div>
                <Dropdown dropDownValues={ AppConstants.PLACES_DROPDOWN_VALUES } onChange={ handleInputChange }/>
                <div className={styles["btn-container"]}>
                    <Button btnText={AppConstants.BANNER.EXPLORE_BTN_TXT} onClick={ navigateToDestinationPage} />
                </div>
                
            </div>
            <div className={styles["banner-img-container"]}>
                <img src={cover} alt="cover image" className={styles["banner-img"]} />
            </div>
        </section>
    );
}

export default HomeBanner;