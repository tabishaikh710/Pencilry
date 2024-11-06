// ProfileCompletionPage.jsx
import React, { useState } from 'react';
import ProfileStep from '../components/ProfileCompletion/ProfileStep';
import ProgressBar from '../components/ProfileCompletion/ProgressBar'; // Import the ProgressBar

import '../style/ProfileCompletion/ProfileCompletionPage.css';

const ProfileCompletionPage = () => {
  const [steps, setSteps] = useState([
    { title: 'Add a Billing Method', description: 'Start hiring once you add a payment method', completed: false },
    { title: 'Verify Your Email', description: 'Verify your email to start using your account', completed: false },
    { title: 'Verify Your Phone Number', description: 'Verify your phone number for security', completed: false },
  ]);

  const completedSteps = steps.filter(step => step.completed).length;
  const totalSteps = steps.length;
  const completionPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="profile-completion-page">
      <h2>Complete these steps to stand out and hire fast</h2>
      <ProgressBar percentage={completionPercentage} /> {/* Use the ProgressBar */}

      <div className="completion-steps">
        {steps.map((step, index) => (
          <ProfileStep 
            key={index} 
            title={step.title} 
            description={step.description} 
            completed={step.completed} 
          />
        ))}
      </div>

      
    </div>
  );
};

export default ProfileCompletionPage;
