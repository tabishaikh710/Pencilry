import { useState } from "react";
import styles from "../../style/modle.module.css";

function FormModel({ ShowForm }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true); // Open the modal
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Close the modal
  };

  return (
    <>
      {/* Trigger button to open modal */}
      <button type="button" onClick={openPopup}>
        Open Form
      </button>

      {/* Modal */}
      {isPopupVisible && (
        <div className={styles.container}>
          <div className={styles.modalContent}>
            {/* Render the form passed as a prop */}
            {ShowForm}

            {/* Close button */}
            <button type="button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FormModel;
