import { useState, createContext } from "react";


const AuthContext = createContext();

export const ProfileForm = ({ children }) => {
  const [formData, setFormData] = useState({
    
    main_Title : "",
    skills: [], // Initialize as an array for proper handling
    search: "", // Added default value for search
    
    //******************************** */
    LanguagesSpeak:[],

    LangLavel:[],

    //************************** */
    school: "",
        degree: "",
        fieldOfStudy: "",
      startYear: "",
       endYear: "",
     description: "",

     //******************* */
     Wtitle: "",
    wcompany: "",
    wlocation: "",
    wcountry: "",
    wstartDateMonth: "February",
    wstartDateYear: "2021",
    wisCurrent: true,
    wdescription: "",
    bio:"", 
    selectedCategories:[],


    // Illustrator information form fields
    illustretor_info_dob: "",
    illustretor_info_country: "Pakistan",
    illustretor_info_street: "",
    illustretor_info_apt: "",
    illustretor_info_city: "",
    illustretor_info_state: "",
    illustretor_info_zip: "",
    illustretor_info_countryCode: "+92",
    illustretor_info_phone: "",
    illustretor_info_profileImage: null, // Illustrator profile image
    
  });

  return (
    <AuthContext.Provider value={{ formData, setFormData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
