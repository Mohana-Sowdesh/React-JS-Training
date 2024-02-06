import React from 'react';
import Tag from '../Tag/Tag';
import styles from '../Card/Card.module.scss'; 

function Card(props) {
    const interestsList = props.user.interests.map(interest => <Tag interest={interest}/>)
    return (
        <div className={styles['card-container']}>
            <div className={styles['user-photo']}>
                <img src="/images/user.jpg" alt="photo of user"/>
            </div>
            <div className={styles['user-details']}>
                <div className={styles['user-name']}>{props.user.name}</div>
                <div className={styles['place']}>{props.user.place}</div>
                <div className={styles['interests-container']}>{interestsList}</div>
            </div>
        </div>
    );
}

export default Card;