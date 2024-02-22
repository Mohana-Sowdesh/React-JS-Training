import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import MenuItem from '../MenuItem/MenuItem';
import { AppConstants } from '../../constants/app-constants';
import { useNavigate } from 'react-router-dom';

/**
 * @description - This function returns Header component
 */

function Header() {
    const menuList = AppConstants.MENU_LIST.map(menu => <MenuItem key={menu} menuItem={menu}/>)
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/');
    }
    
    return (
        <>
            <header>
                <div className={styles.logo} onClick={ navigateToHomePage }>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles.menu}>
                    { menuList }
                </div>
            </header>
        </>
    );
}

export default Header;