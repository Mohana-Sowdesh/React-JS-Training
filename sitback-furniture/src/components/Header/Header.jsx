import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles  from '../Header/Header.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AppConstants } from '../../constants/app-constants';
import MenuItem from '../MenuItem/MenuItem';
import { useNavigate } from 'react-router-dom';

/**
 * @description This function returns Header component
 * @returns 
 */
function Header() {
    const navigate = useNavigate();
    const menuList = AppConstants.HEADER.MENU_LIST.map((menu, index) => <MenuItem key={index} menuItem={ menu.name } path={ menu.path } />);

    const navigateToHomePage = () => {
        navigate('/');
    }

    return (
        <header className={styles['header-container']}>
            <div className={styles.logo} onClick={ navigateToHomePage }>{ AppConstants.HEADER.LOGO }</div>
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