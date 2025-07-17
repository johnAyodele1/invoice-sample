import React from 'react';
import styles from './PaymentOptionsBanner.module.css';

const PaymentOptionsBanner = () => {
    return (
        <div className={styles.banner}>
            <div>
                <p className={styles.title}>Hey John, set up new payment options</p>
                <p className={styles.subtitle}>Credit cards, debit cards, Apple Pay, Google Pay, PayPal, automatic payments and more.</p>
            </div>
            <div className={styles.actions}>
                <div className={styles.cardLogos}>
                    <img alt="Visa logo" className={styles.logo} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS_nxaV0cmNxmGuvELE6tK6uh4aM1Afuirm3P254HyZgCKC2cZz5xYEMRVOu9bFu078w1XLy3XUr1yTqO0qYZQi9lCdmShHPBzdHnlQ8_eqV50LsY9QDn8dKwKA-peMekC9KRkQQQdcSrELS0INoD3WvQ2cPr_J4pWnK9WZSV8TcHRUSKLKnoRiU8QVXXuCDeAWxKmwMF8PgvbsDfCzI9S-3_G19chfR5frEvTYaVnA7Z47RpkYJBKsI0_h4S2oZ87uUVDhOHoS8M" />
                    <img alt="Mastercard logo" className={styles.logo} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh8sFGr3Zvv7Hf-74nuD-sQzENcjf1aNrODysVP-l3JaEx_H9rWEU5FYaMF9Y3jFIRLqt3jez-667QxfyZHVk9PAdtSMAOtVI_ReyN5UjVB2UFFCds5HQEhW5Mi4KQ7oGaTDPMUUEEDRHPKcLX_w4N1OwRmpsYAOtdMwWcq3UZGlH6qa73xyViETjukjVZIaKE2GdrciuRPlKFySiTpaFyOQSumaIoX532XDqE8Y0_nbfF-93BmEHLIgNjHxdy4xF-XRKZvI4stl0" />
                    <img alt="American Express logo" className={styles.logo} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrZqgRn4bs6hWFXZudG3cxdin78GWMxaQpptqsVX19yBOE40WnYtu34anB4M242trPrt52ZtJOZPGFAt0LW6AEAUfr5nrPnRpBexyJUesr3EH0ZrKSyOdxDqvEfi0Q-Cnx0cuDS_5ooIZknYDqPfgqsAnpHBqsuQLY-4ErxoFrOTtGApP8bWe112mCcCeyGp5ET23msUrz-LTw5jjM4TCsxJxskKLlPfS0-vIEuPB9O9YgKrAC6kALgltIX0GfsqwvglSn64oa6ok" />
                </div>
                <button className={styles.button}>Add online payments</button>
                <button><span className="material-icons">more_vert</span></button>
            </div>
        </div>
    );
};

export default PaymentOptionsBanner;
