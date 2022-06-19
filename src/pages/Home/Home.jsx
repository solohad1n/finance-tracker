import React from "react";
import styles from './Home.module.css'
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}><TransactionList /></div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  )
}