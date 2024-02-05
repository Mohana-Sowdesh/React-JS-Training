import React from 'react';
import Tag from '../Tag/Tag';
import styles from '../Card/Card.module.scss';

function Card(props) {
    const interestsList = props.user.interests.map(interest => <Tag interest={interest}/>)
    return (
        <div className={styles['card-container']}>
            <div>
                <img src={props.user.imgUrl} alt="photo of user"/>
            </div>
            <div className={styles['user-details']}>
                <div>{props.user.name}</div>
                <div>{props.user.place}</div>
                <div className={styles['interests-container']}>{interestsList}</div>
            </div>
        </div>
    );
}

export default Card;