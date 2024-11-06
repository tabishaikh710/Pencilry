import React from 'react';
import { motion } from 'framer-motion'; // for animations
import '../../style/ProfileCompletion/ProfileStep.css';

const ProfileStep = ({ title, description, completed }) => {
  return (
    <motion.div
      className={`profile-step ${completed ? 'completed' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {completed ? <span className="completed-icon">✔</span> : <button>Complete Step</button>}
    </motion.div>
  );
};

export default ProfileStep;
