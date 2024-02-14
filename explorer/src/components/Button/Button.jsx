import styles from '../Button/Button.module.scss';
import PropTypes from 'prop-types';

/**
 * @description - This function returns a button
 * @param {*} btnText 
 */
function Button({ btnText }) {
    return (
        <button className={styles.btn}>{ btnText }</button>
    );
}

Button.propTypes = {
    btnText: PropTypes.string.isRequired
}

export default Button;