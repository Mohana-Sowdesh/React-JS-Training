import React from 'react';
import PropTypes from 'prop-types';
import styles from '../MenuItem/MenuItem.module.scss';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

/**
 * @description This function returns single item in menu
 * @param {menuItem} string
 * @returns 
 */
function MenuItem({ menuItem, path }) {
    const { category } = useParams();

    return (
        <li className={styles['menu-item']}>
            <Link to={ path } className={ `${(category && category === menuItem.toLowerCase()) && styles.active}` }>
                { menuItem }
            </Link>
        </li>
    );
}

MenuItem.propTypes = {
    menuItem: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}


export default MenuItem;