import React from 'react';
import styles from '../styles/navbar.module.css'
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/nav";

const Header = () => {
    return (
        <div>
            <header className={styles.main_header}>
                <div className={styles.navbar_brand}>
                    <Link href={"/"}>
                   <Image src="/logo.png" alt={"Shanta next gen logo"} width={180} height={60} />
                    </Link>

                </div>
                <Nav />
            </header>
        </div>


    );
};

export default Header;