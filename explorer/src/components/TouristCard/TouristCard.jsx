import styles from '../TouristCard/TouristCard.module.scss';
import image from '../../assets/chidambaram.png';
import Button from '../Button/Button';
import { AppConstants } from '../../constants/app-constants';

/**
 * @description - Function to render a tourist card component
 * @returns 
 */
function Card() {
    return (
        <div className={styles["tourist-card-container"]}>
            <img src={image} alt="Destination img" />
            <h2 className={styles["tourist-card-heading"]}>Never Ending Paddy Fields and Narrow Roads</h2>
            <h4 className={styles["tourist-card-subheading"]}>Pollachi</h4>
            <p className={styles["tourist-card-content"]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into alectronic typesetting, remaining essentially unchange</p>
            <Button btnText={AppConstants.DESTINATIONS_SECTION.READ_MORE_BTN_TXT} />
        </div>
    );
}

export default Card;