import React from 'react';
import styles from './InvoiceTemplateBanner.module.css';

const InvoiceTemplateBanner = () => {
    return (
        <div className={styles.banner}>
            <p className={styles.text}>Set up invoice template</p>
            <div className={styles.actions}>
                <button className={styles.skipButton}>Skip for now</button>
                <button className={styles.addButton}>Add details</button>
                <button className={styles.closeButton}><span className="material-icons">close</span></button>
            </div>
        </div>
    );
};

export default InvoiceTemplateBanner;
