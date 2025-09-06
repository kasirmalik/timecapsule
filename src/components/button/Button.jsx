import React from 'react'
import styles from "./button.module.css";

const Button = () => {
  return (
    <div>
      <button className={styles.myButton}>
       
        <span>Sign Up</span>
      </button>
    </div>
  );
}

export default Button
