import React from 'react';
import styles from '../styles/navbar.module.css'
import Link from "next/link";
const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <div>


                <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><Link href="/calculator">Calculator</Link></li>
                <li className={styles.navbarItem}><Link href="/random">Random Walk</Link></li>
                <li className={styles.navbarItem}><Link href="/progress">Progress</Link></li>


                </ul>
            </div>




        </nav>
    );
};

export default Nav;