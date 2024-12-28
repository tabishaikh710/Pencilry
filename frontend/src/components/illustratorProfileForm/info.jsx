import style from "../../style/illustretorProfilrForm/info.module.css";
import React, { useContext } from "react";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";

function Info() {
  // State for form fields
  const [formData, setFormData] = useState({
    dob: "",
    country: "Pakistan",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    countryCode: "+92",
    phone: "",
  });

  // State for image upload
  const [profileImage, setProfileImage] = useState(null);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Example of form submission (if needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("Uploaded image:", profileImage);
  };

  return (
    <>
      <h1>A few last details, then you can check and publish your profile.</h1>

      <div className={style.infoFormContaimer}>
        {/* Image Upload Section */}
        <div className={style.item} id={style.imageContainer}>
          <div className={style.showprofile}>
            {profileImage && (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Profile Preview"
                className={style.previewImage}
              />
            )}
          </div>

          <div className={style.imageUpload}>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className={style.inputFile}
              onChange={handleImageUpload}
            />
          </div>
        </div>

        {/* Form Section */}
        <div className={style.item} id={style.FormContainer}>
          <form onSubmit={handleSubmit}>
            {/* Date of Birth */}
            <label htmlFor="dob" className={style.label}>
              Date of Birth *
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className={style.input}
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
            <span className={style.error}>Date is required</span>

            {/* Country */}
            <label htmlFor="country" className={style.label}>
              Country *
            </label>
            <select
              id="country"
              name="country"
              className={style.select}
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
            </select>

            {/* Street Address */}
            <label htmlFor="street" className={style.label}>
              Street address *
            </label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Enter street address"
              className={style.input}
              value={formData.street}
              onChange={handleInputChange}
              required
            />

            {/* Apartment/Suite */}
            <label htmlFor="apt" className={style.label}>
              Apt/Suite
            </label>
            <input
              type="text"
              id="apt"
              name="apt"
              placeholder="Apt/Suite (Optional)"
              className={style.input}
              value={formData.apt}
              onChange={handleInputChange}
            />

            {/* City, State, ZIP/Postal Code */}
            <div className={style.row}>
              <div className={style.column}>
                <label htmlFor="city" className={style.label}>
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter city"
                  className={style.input}
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={style.column}>
                <label htmlFor="state" className={style.label}>
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Enter state/province"
                  className={style.input}
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className={style.column}>
                <label htmlFor="zip" className={style.label}>
                  ZIP/Postal code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="Enter ZIP/Postal code"
                  className={style.input}
                  value={formData.zip}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Phone Number */}
            <label htmlFor="phone" className={style.label}>
              Phone *
            </label>
            <div className={style.phoneRow}>
              <select
                id="countryCode"
                name="countryCode"
                className={style.select}
                value={formData.countryCode}
                onChange={handleInputChange}
              >
                <option value="+92">+92</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter number"
                className={style.input}
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Info;
