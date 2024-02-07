import React from 'react';
import styles from '../Users/Users.module.scss';
import Header from '../../components/Header/Header';
import UserCards from '../../containers/UserCards/UserCards';

function Users() {
    return (
        <div className={styles['page-container']}>
            <Header />
            <UserCards />
        </div>
    );
}

export default Users;