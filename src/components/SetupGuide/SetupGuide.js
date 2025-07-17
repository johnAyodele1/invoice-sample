import React from 'react';
import styles from './SetupGuide.module.css';

const SetupGuide = () => {
    return (
        <div className={styles.setupGuide}>
            <button className={styles.button}>
                <span className="material-icons">help_outline</span>
                <span>Setup Guide</span>
            </button>
        </div>
    );
};

export default SetupGuide;
