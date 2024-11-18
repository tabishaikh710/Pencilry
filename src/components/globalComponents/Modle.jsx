import { useState } from "react";
import styles from "../../style/modle.module.css";

function Modle({ mess, closePopup }) {
  const handleClose = () => {
    closePopup(); // Close the modal by calling the parent function
  };

  return (
    <div className={styles.container}>
      <div className={styles.modalContent}>
        <h1>{mess}</h1>
        <button onClick={handleClose}>Sure</button>
      </div>
    </div>
  );
}

export default Modle;
