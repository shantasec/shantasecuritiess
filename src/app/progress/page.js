
import React from 'react';
import styles from "../styles/common.module.css";
import { MdAdsClick } from "react-icons/md";
const Progress = () => {

    return (
        <div>
            <span className={styles.snp}><MdAdsClick /> My Progress </span>
            <h1>I have been learning React over the past couple of days. However, I encountered some challenges because features like render(), hydrate(), and many others are now considered obsolete.<br/>Currently, I am enrolled in the very first batch of OSTAD on NEXTJS. I am thoroughly enjoying coding with Next.js.</h1> </div>
    );
};

export default Progress;
