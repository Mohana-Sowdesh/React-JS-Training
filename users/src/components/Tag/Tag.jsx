import React from 'react';
import styles from '../Tag/Tag.module.scss';

function Tag({interest}) {
    return (
        <div className={styles.tag}>{interest}</div>
    );
}

export default Tag;