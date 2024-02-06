import styles from './UserCards.module.scss';
import mockUsersData from '../../data/users_data.json';
import Card from '../../components/Card/Card';

function UserCards() {
    const users = mockUsersData.map(user => <Card key={user.id} user={user} />);

    return (
        <div className={styles['user-cards-container']}>
            {users}
        </div>
    );
}

export default UserCards;