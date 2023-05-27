import React from 'react';
import styles from "@/app/styles/common.module.css";
import { HiCurrencyBangladeshi } from "react-icons/hi";
const Random = () => {
    return (
        <div>
            <span className={styles.superb}><HiCurrencyBangladeshi/>A RANDOM WALK DOWN WALL STREET [page 135]</span>
            <h1>David Leinweber, a financial economist, conducted a study in the late 1990s where he explored the concept of "spurious correlations" in financial data. In his research, he compared the S&P 500 index movements with various unrelated datasets to illustrate that statistically significant correlations can sometimes arise by chance.

                One of the examples he used was the correlation between the <span className={styles.snp}>S&P 500 index</span> and butter production in <span className={styles.bangladesh}>Bangladesh</span>. <p>The correlation appeared to be statistically significant during the period he analyzed, even though there is no logical or causal connection between the two variables.

                    The purpose of this example was to demonstrate that correlations can sometimes be coincidental and that caution should be exercised when interpreting statistical relationships without considering underlying causality.</p>

            </h1>

        </div>
    );
};

export default Random;