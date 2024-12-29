import React, { useContext } from "react";
import style from "../../style/illustretorProfilrForm/info.module.css";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";

function Info() {
  // Access context
  const { formData, setFormData } = useContext(AuthContext);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      illustretor_info_profileImage: e.target.files[0],
    }));
  };

  return (
    <div>
      <h1>A few last details, then you can check and publish your profile.</h1>

      <div className={style.infoFormContaimer}>
        {/* Image Upload Section */}
        <div className={style.item} id={style.imageContainer}>
          <div className={style.showprofile}>
            {formData.illustretor_info_profileImage && (
              <img
                src={URL.createObjectURL(formData.illustretor_info_profileImage)}
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
          <form>
            {/* Date of Birth */}
            <label htmlFor="illustretor_info_dob" className={style.label}>
              Date of Birth *
            </label>
            <input
              type="date"
              id="dob"
              name="illustretor_info_dob"
              className={style.input}
              value={formData.illustretor_info_dob}
              onChange={handleInputChange}
              required
            />

            {/* Country */}
            <label htmlFor="illustretor_info_country" className={style.label}>
              Country *
            </label>
            <select
              id="country"
              name="illustretor_info_country"
              className={style.select}
              value={formData.illustretor_info_country}
              onChange={handleInputChange}
              required
            >
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
            </select>

            {/* Street Address */}
            <label htmlFor="illustretor_info_street" className={style.label}>
              Street address *
            </label>
            <input
              type="text"
              id="street"
              name="illustretor_info_street"
              placeholder="Enter street address"
              className={style.input}
              value={formData.illustretor_info_street}
              onChange={handleInputChange}
              required
            />

            {/* Apartment/Suite */}
            <label htmlFor="illustretor_info_apt" className={style.label}>
              Apt/Suite
            </label>
            <input
              type="text"
              id="apt"
              name="illustretor_info_apt"
              placeholder="Apt/Suite (Optional)"
              className={style.input}
              value={formData.illustretor_info_apt}
              onChange={handleInputChange}
            />

            {/* City, State, ZIP/Postal Code */}
            <div className={style.row}>
              <div className={style.column}>
                <label htmlFor="illustretor_info_city" className={style.label}>
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="illustretor_info_city"
                  placeholder="Enter city"
                  className={style.input}
                  value={formData.illustretor_info_city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={style.column}>
                <label htmlFor="illustretor_info_state" className={style.label}>
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  name="illustretor_info_state"
                  placeholder="Enter state/province"
                  className={style.input}
                  value={formData.illustretor_info_state}
                  onChange={handleInputChange}
                />
              </div>
              <div className={style.column}>
                <label htmlFor="illustretor_info_zip" className={style.label}>
                  ZIP/Postal code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="illustretor_info_zip"
                  placeholder="Enter ZIP/Postal code"
                  className={style.input}
                  value={formData.illustretor_info_zip}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Phone Number */}
            <label htmlFor="illustretor_info_phone" className={style.label}>
              Phone *
            </label>
            <div className={style.phoneRow}>
              <select
                id="illustretor_info_countryCode"
                name="illustretor_info_countryCode"
                className={style.select}
                value={formData.illustretor_info_countryCode}
                onChange={handleInputChange}
              >
                <option value="+92">+92</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="illustretor_info_phone"
                placeholder="Enter number"
                className={style.input}
                value={formData.illustretor_info_phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Info;
