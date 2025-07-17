import React from 'react';
import styles from './TrialBanner.module.css';

const TrialBanner = () => {
    return (
        <div className={styles.trialBanner}>
            You have 30 days left in your trial, which includes all features. <a className={styles.trialLink} href="#">Choose a plan to buy</a>
        </div>
    );
};

export default TrialBanner;
