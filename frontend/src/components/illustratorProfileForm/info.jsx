import style from "../../style/illustretorProfilrForm/info.module.css";

function Info() {
  return (
    <>
      <h1>A few last details, then you can check and publish your profile.</h1>

      <div className={style.infoFormContaimer}>
        {/* Image Upload Section */}
        <div className={style.item} id={style.imageContainer}>
          <div className={style.showprofile}></div>

          <div className={style.imageUpload}>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className={style.inputFile}
            />
          </div>
        </div>

        {/* Form Section */}
        <div className={style.item} id={style.FormContainer}>
          <form>
            {/* Date of Birth */}
            <label htmlFor="dob" className={style.label}>
              Date of Birth *
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className={style.input}
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
              required
            >
              <option value="Pakistan" selected>
                Pakistan
              </option>
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
