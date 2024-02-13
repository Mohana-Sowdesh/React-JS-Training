import React from 'react';
import styles from '../MenuItem/MenuItem.module.scss';

/**
 * @description this function returns Header component
 * @param - menuItem text
 */

function MenuItem({menuItem}) {
    return (
        <div className={styles.menuItem}>{menuItem}</div>
    );
}

export default MenuItem;