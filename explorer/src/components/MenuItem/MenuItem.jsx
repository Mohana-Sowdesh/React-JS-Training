import React from 'react';
import styles from '../MenuItem/MenuItem.module.scss';
import PropTypes from 'prop-types';

/**
 * @description - This function returns single item in menu
 * @param - menuItem text
 */

function MenuItem({ menuItem }) {
    return (
        <div className={styles.menuItem}>{menuItem}</div>
    );
}

MenuItem.propTypes = {
    menuItem: PropTypes.string.isRequired
}

export default MenuItem;