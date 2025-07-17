import React from 'react';
import styles from './InvoiceForm.module.css';

const InvoiceForm = () => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.grid}>
                <div>
                    <label className={styles.label} htmlFor="contact">Contact</label>
                    <div className={styles.inputWrapper}>
                        <span className={`material-icons ${styles.icon}`}>person_outline</span>
                        <input className={styles.input} id="contact" type="text" />
                    </div>
                </div>
                <div>
                    <label className={styles.label} htmlFor="issue-date">Issue date</label>
                    <div className={styles.inputWrapper}>
                        <span className={`material-icons ${styles.icon}`}>calendar_today</span>
                        <input className={styles.input} id="issue-date" type="text" value="17 Jul 2025" />
                    </div>
                </div>
                <div>
                    <label className={styles.label} htmlFor="due-date">Due date</label>
                    <div className={styles.inputWrapper}>
                        <span className={`material-icons ${styles.icon}`}>event_note</span>
                        <input className={styles.input} id="due-date" type="text" />
                    </div>
                </div>
                <div>
                    <label className={styles.label} htmlFor="invoice-number">Invoice number</label>
                    <input className={styles.input} id="invoice-number" type="text" value="INV-0001" />
                </div>
                <div>
                    <label className={styles.label} htmlFor="reference">Reference</label>
                    <div className={styles.inputWrapper}>
                        <span className={`material-icons ${styles.icon}`}>bookmark_border</span>
                        <input className={styles.input} id="reference" type="text" />
                    </div>
                </div>
                <div>
                    <label className={styles.label} htmlFor="currency">Currency</label>
                    <select className={styles.select} id="currency">
                        <option>Nigerian Naira</option>
                    </select>
                </div>
                <div>
                    <label className={styles.label} htmlFor="amounts-are">Amounts are</label>
                    <select className={styles.select} id="amounts-are">
                        <option>Tax exclusive</option>
                    </select>
                </div>
                <div className={styles.onlinePayments}>
                    <label className={styles.label}>Online payments</label>
                    <div className={styles.paymentLogos}>
                        <a className={styles.setupLink} href="#">Set up online payments</a>
                        <img alt="Visa logo" className={styles.logo} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvR7JDLvRpaBk7fJoghEw1Zc4sziYrkA_rf0XMhBSU7F0JG-3FWSBU6T-pMlDJzOtvHdyNHYzKJoBJh6UnXUhtMhbkPARiXqtDC0LCV0v1t8_e9V79y9NtXWMT4H_nSSYb_89viV5GnEyqL3eBywol7yTKC0ogI5mvQnuPm09TQ7X1wgzrVFTjoOP7Q5g6I7C8-Bfb-q4fHwNTqHRm2Y8FBtXhnK-mme-F1ttT489Tn88CLRtnBpB1kMELAl1zz3LZU4PhLYolieI" />
                        <img alt="Mastercard logo" className={styles.logo} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDbvkaz518JathFx6NWCf5vvpsf2x1DIooLGu7McB370mq1PKgfBxiLMKF1GUQ5bz8ICH9Nq-09Ov2326JYE4j8kIyUq6PzkBZafmIsFWO-kIG9tAoBpuFJopeyxFpgAPbRAm3SO06oEPk1DwjqOyB0ewcaB8kg8VvM5RSIx7Gaagme9mVvnuzSPzzM1OmppaB8fhJFkwIZErmCQqfwQqSZX1HdwxGxkmXlFlwJ8XUOk3rKJ0SvQm5owVQn02fZa7YkR-aDDlnhzo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceForm;
