import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Button from '../components/Registration/ClientRegistration/Button';
import InputField from '../components/Registration/ClientRegistration/InputField';
import Checkbox from '../components/Registration/ClientRegistration/Checkbox';
import SelectField from '../components/Registration/ClientRegistration/SelectField';
import Separator from '../components/Registration/ClientRegistration/Separator';
import '../style/clientReistration/ClientRegistration.css';

const ClientRegistration = () => {
  const navigate = useNavigate(); // Initialize navigation

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: 'Pakistan',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // After successful signup, navigate to the profile completion page
    navigate('/profile-completion');
  };

  const countryOptions = [
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
  ];

  return (
    <div className="client-registration">
      <h2>Sign up to hire talent</h2>

      <Button label="Continue with Apple" className="continue-with-apple" />
      <Button label="Continue with Google" className="continue-with-google" />

      <Separator />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <InputField
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <InputField
            type="email"
            name="email"
            placeholder="Work email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <InputField
            type="password"
            name="password"
            placeholder="Password (8 or more characters)"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <SelectField
            name="country"
            value={formData.country}
            options={countryOptions}
            onChange={handleChange}
            required
          />
        </div>

        <Checkbox
          label="Send me emails with tips on how to find talent that fits my needs."
          name="subscribeTips"
          checked={formData.subscribeTips}
          onChange={handleChange}
        />

        <Checkbox
          label="Yes, I understand and agree to the Terms of Service, including the User Agreement and Privacy Policy."
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
        />

        <Button
          label="Create my account"
          className="create-account-button"
          disabled={!formData.agreeToTerms}
        />
      </form>

      <div className="login-link">
        Already have an account? <a href="/login">Log In</a>
      </div>
    </div>
  );
};

export default ClientRegistration;
