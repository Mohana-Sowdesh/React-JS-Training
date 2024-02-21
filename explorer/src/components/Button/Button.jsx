import styles from '../Button/Button.module.scss';
import PropTypes from 'prop-types';

/**
 * @description - This function returns a button
 * @param {*} btnText 
 */
function Button({ btnText, onClick }) {
    return (
        <button className={styles.btn} onClick={ onClick }>{ btnText }</button>
    );
}

Button.propTypes = {
    btnText: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;