import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import getRandomFact from '../pages/api/FactsHandler';

export default function Container() {

    const [fact, setFact] = useState("");

    function newRandomFact() {
        getRandomFact().then((data) => {
            setFact(data);
        });
    }

    useEffect(() => {
        newRandomFact();
    }, []);


    return (
        <div className={styles.grid}>
            <a onClick={() => { newRandomFact() }} className={styles.card}>
                <p>{JSON.stringify(fact.text)}</p>
            </a>
        </div>
    )
}
