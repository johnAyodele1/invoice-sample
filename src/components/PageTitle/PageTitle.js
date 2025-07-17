import React from 'react';
import styles from './PageTitle.module.css';

const PageTitle = () => {
    return (
        <div className={styles.pageTitleContainer}>
            <div>
                <span className={styles.breadcrumbs}>Sales overview &gt; Invoices</span>
                <h1 className={styles.title}>New invoice <span className={styles.draftBadge}>Draft</span></h1>
            </div>
            <div className={styles.actions}>
                <button className={styles.button}>
                    <span className="material-icons">visibility</span>
                    <span>Preview</span>
                </button>
                <button className={styles.button}>Save & close</button>
                <button className={`${styles.button} ${styles.approveButton}`}>Approve & email</button>
                <button className={styles.iconButton}><span className="material-icons">more_vert</span></button>
            </div>
        </div>
    );
};

export default PageTitle;
