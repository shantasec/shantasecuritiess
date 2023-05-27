import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import Link from "next/link";



const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>

                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/"> Shanta Securities.</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;