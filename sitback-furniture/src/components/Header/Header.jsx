import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles  from '../Header/Header.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AppConstants } from '../../constants/app-constants';
import MenuItem from '../MenuItem/MenuItem';

/**
 * @description This function returns Header component
 * @returns 
 */
function Header() {
    const menuList = AppConstants.HEADER.MENU_LIST.map((menu, index) => <MenuItem key={index} menuItem={menu} />);

    return (
        <header className={styles['header-container']}>
            <div className={styles.logo}>{ AppConstants.HEADER.LOGO }</div>
            <ul className={styles['menu-container']}>
                { menuList }
            </ul>
            <div className={styles['profile-container']}>
                <div className={styles['user-name']}>{ AppConstants.HEADER.USERNAME }</div>
                <FontAwesomeIcon icon={faCaretDown} className={styles['dropdown-icon']} />
            </div>
        </header>
    );
}

export default Header;