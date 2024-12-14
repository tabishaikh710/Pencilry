import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from "./components/IllustratoSurveyContext/IllustratoSurvey.context.jsx";
import { ProfileForm } from "./components/illustratorProfileForm/CreatProfileContextorm/profileform.context.jsx"; // Renamed to start with uppercase

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProfileForm>
        <App />
      </ProfileForm>
    </AuthProvider>
  </StrictMode>
);
