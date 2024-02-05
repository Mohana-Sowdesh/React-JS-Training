import React from 'react';
import styles from '../Searchbox/Searchbox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Searchbox() {
    return (
        <div className={styles['search-box']}>
            <FontAwesomeIcon icon="fa-light fa-magnifying-glass" className={styles['search-icon']} />
            <input type="text" placeholder='Search users' className={styles['search-input']}></input>
        </div>
    );
}

export default Searchbox;