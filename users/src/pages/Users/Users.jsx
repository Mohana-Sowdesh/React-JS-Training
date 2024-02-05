import React from 'react';
import styles from '../Users/Users.module.scss';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import mockUsersData from '../../data/users_data.json';

function Users() {
    const users = mockUsersData.map(user => <Card user={user} />)
    return (
        <div className={styles['page-container']}>
            <Header />
            <div className={styles['user-cards-container']}>
                {users}
            </div>
        </div>
    );
}

export default Users;