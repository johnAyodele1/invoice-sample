import React from 'react';
import styles from './InvoiceTable.module.css';

const InvoiceTable = () => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerRow}>
                        <th className={styles.th}><span className="material-icons">drag_indicator</span></th>
                        <th className={styles.th}>Item</th>
                        <th className={styles.th}>Description</th>
                        <th className={styles.th}>Qty</th>
                        <th className={styles.th}>Price</th>
                        <th className={styles.th}>Disc.</th>
                        <th className={styles.th}>Amount</th>
                        <th className={styles.th}>Tax rate</th>
                        <th className={styles.th}>Tax amount</th>
                        <th className={styles.th}>Project</th>
                        <th className={`${styles.th} ${styles.textRight}`}>Amount NGN</th>
                        <th className={styles.th}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.bodyRow}>
                        <td className={styles.td}><span className="material-icons">drag_indicator</span></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={styles.td}><input className={styles.input} type="text" /></td>
                        <td className={`${styles.td} ${styles.textRight}`}></td>
                        <td className={`${styles.td} ${styles.textRight}`}><button className={styles.deleteButton}><span className="material-icons">delete_outline</span></button></td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.actions}>
                <button className={`${styles.button} ${styles.addRowButton}`}>
                    <span className="material-icons">add</span>
                    <span>Add row</span>
                </button>
                <button className={styles.button}>
                    <span>Columns (0 hidden)</span>
                    <span className="material-icons">expand_more</span>
                </button>
                <button className={styles.button}>
                    <span>Files</span>
                    <span className="material-icons">expand_more</span>
                </button>
            </div>
        </div>
    );
};

export default InvoiceTable;
