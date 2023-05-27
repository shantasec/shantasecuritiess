'use client'
import React, { useState } from 'react';
import styles from '../styles/common.module.css'
import { HiOutlineCalculator } from 'react-icons/hi'

const Calculator = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const calculateBirthYear = () => {
        const birthYear = 100 - age;
        return birthYear;
    };

    return (
        <div>
            <h1><span className={styles.age}><HiOutlineCalculator/>A SOLEMN LIE !</span> <br/> Calculate how much you should invest according to Graham (from the worst book 'The Intelligent Investor')</h1>
            <h2>According to Graham, individuals should consider subtracting their age from 100 (or a more conservative variation, such as 120) to determine the percentage of their investment portfolio that should be allocated to stocks. The remaining percentage would be allocated to more conservative investments such as bonds or fixed-income securities. This approach aims to adjust the investment allocation based on an individual's risk tolerance and time horizon.
            </h2>
            <input className={styles.input} type="text" placeholder="type your age?" value={age} onChange={handleChange} />
            {age && <h2>So according to your AGE , you should invest : <span className={styles.age}> {calculateBirthYear()}% </span> of your money in the investments</h2>}
        </div>
    );
};

export default Calculator;
