import React from 'react';
import styles from '../Header/Header.module.scss';
import Searchbox from '../Searchbox/Searchbox';

function Header() {
    const menuList = ['Reputation', 'New users', 'Voters', 'Editors', 'Moderators'];
    const listItems = menuList.map(menu => <li key={menu}>{menu}</li>);

    return (
        <React.Fragment>
            <div className={styles.heading}>Users</div>
            <div className={styles['navbar-container']}>
                <Searchbox />  
                <ul className={styles['nav-list']}>
                    {listItems}
                </ul> 
            </div>
        </React.Fragment>
    );
}

export default Header;