import styles from '../Button/Button.module.scss';
import PropTypes from 'prop-types';

/**
 * @description This function returns a reusable button component
 * @param {*} btnText - string
 * @returns 
 */
function Button({ btnText, onClick, isCartBtn }) {
    return (
        <button className={ `${styles.btn} ${ isCartBtn && styles['cart-btn']}` } onClick={ onClick }>{ btnText }</button>
    );
}

Button.defaultProps = {
    isCartBtn: false
}

Button.propTypes = {
    btnText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isCartBtn: PropTypes.bool
}

export default Button;
