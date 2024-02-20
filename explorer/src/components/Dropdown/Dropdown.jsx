import styles from '../Dropdown/Dropdown.module.scss';
import PropTypes from 'prop-types';

/**
 * @description - Function to render a dropdown component
 * @returns 
 */
function Dropdown({ labelName, dropDownValues }) {
    if(labelName) {
        return ( 
            <div className={ styles["dropdown-wrapper-with-label"] }>
                <label for={labelName}>{ labelName }</label>
                <select name={labelName} className={styles.dropdown}>
                    <option value="Choose" hidden selected disabled>Choose</option>
                    { dropDownValues.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
    return (
        <div className={ styles["dropdown-wrapper-without-label"] }>
            <select name="place" className={styles.dropdown}>
                <option value="Choose" hidden selected disabled>Choose</option>
                { dropDownValues.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                ))}
            </select>
        </div>
    );
}

Dropdown.propTypes = {
    labelName: PropTypes.string,
    dropDownValues: PropTypes.array.isRequired
}

export default Dropdown;