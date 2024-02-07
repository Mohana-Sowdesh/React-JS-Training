import React from 'react';
import styles from '../Searchbox/Searchbox.module.scss';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Searchbox() {
    return (
        <div className={styles['search-box']}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']}/>
            <input type="text" placeholder='Search users' className={styles['search-input']}></input>
        </div>
    );
}

export default Searchbox;