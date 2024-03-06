import React from 'react';
import PropTypes from 'prop-types';
import styles from '../MenuItem/MenuItem.module.scss';

/**
 * @description This function returns single item in menu
 * @param {*} menuItem
 * @returns 
 */
function MenuItem({ menuItem }) {
    return (
        <li className={styles['menu-item']}>{ menuItem }</li>
    );
}

MenuItem.propTypes = {
    menuItem: PropTypes.string.isRequired
}


export default MenuItem;