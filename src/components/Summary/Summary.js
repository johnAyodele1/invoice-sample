import React from 'react';
import styles from './Summary.module.css';

const Summary = () => {
    return (
        <div className={styles.summaryContainer}>
            <div className={styles.summary}>
                <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <span>0.00</span>
                </div>
                <div className={styles.summaryRow}>
                    <span>Total tax</span>
                    <span>0.00</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.total}`}>
                    <span>Total</span>
                    <span>0.00</span>
                </div>
            </div>
        </div>
    );
};

export default Summary;
