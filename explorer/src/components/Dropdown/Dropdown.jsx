import styles from '../Dropdown/Dropdown.module.scss';

/**
 * @description - Function to render a dropdown component
 * @returns 
 */
function Dropdown() {
    return (
        <div className={styles["dropdown-wrapper"]}>
            <select name="place" className={styles.dropdown}>
                <option value="Choose" hidden selected disabled>Choose</option>
                <option value="Chidambaram">Chidambaram</option>
                <option value="Masinagudi">Masinagudi</option>
                <option value="Pollachi">Pollachi</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Kumbakkonam">Kumbakkonam</option>
                <option value="Tirunelveli">Tirunelveli</option>
            </select>
        </div>
    );
}

export default Dropdown;