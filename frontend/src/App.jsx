import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Adjust path as needed
import Login from './pages/LoginPage'
import ClientRegistration from './pages/ClientRegistration';
import FreelancerRegistration from './pages/FreelancerRegistration';
import SignUpPage from './pages/SignUpPage';
import PostJob from './pages/PostAjob'; // Ensure you have this component
import ProfileCompletionPage from '../src/pages/ProfileCompletionPage';
import ClientWelcomePage from './pages/ClientWelcomePage';
import IllustratorWelcomePage from './pages/IllustratorWelcomePage';
import IllustratorQuestionForm from './pages/illustratorQuestionForm';
import CreateIllustratorProfile from './pages/createIllustratorProfile';
import Jobpage from './pages/JobsPages';
import './style/headings.css'

function App() {
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-job" element={<PostJob />} />
       
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/register-client" element={<ClientRegistration />} />
        <Route path="/register-freelancer" element={<FreelancerRegistration />} />
        <Route path="/profile-completion" element={<ProfileCompletionPage />} />
        <Route path="/client-welcome" element={<ClientWelcomePage />} />
        <Route path="/illustrator-welcome" element={<IllustratorWelcomePage />} />
        <Route path="/illustrator-question-form" element={<IllustratorQuestionForm />} />
        <Route path="/Create-illustrator-profile" element={<CreateIllustratorProfile />} />
        <Route path="/JobsPages" element={<Jobpage />} /> 
        
        {/* Add other routes as needed */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
