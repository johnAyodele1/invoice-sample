import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.flexBetween}>
                    <div className={styles.flexStart}>
                        <div className={styles.logoContainer}>
                            <span className={styles.logo}>pet haven</span>
                            <span className="material-icons">expand_more</span>
                        </div>
                        <nav className={styles.nav}>
                            <a href="#">Dashboard</a>
                            <a href="#">Business</a>
                            <a href="#">Accounting</a>
                            <a href="#">Projects</a>
                            <a href="#">Contacts</a>
                        </nav>
                    </div>
                    <div className={styles.flexEnd}>
                        <button className={styles.iconButton}><span className="material-icons">add</span></button>
                        <button className={styles.iconButton}><span className="material-icons">search</span></button>
                        <button className={styles.iconButton}><span className="material-icons">notifications</span></button>
                        <div className={styles.avatar}>
                            JA
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
