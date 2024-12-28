import { useState, createContext } from "react";


const AuthContext = createContext();

export const ProfileForm = ({ children }) => {
  const [formData, setFormData] = useState({
    skills: [], // Initialize as an array for proper handling
    search: "", // Added default value for search
    LanguagesSpeak:[],
    LangLavel:[],
    school: "",
        degree: "",
        fieldOfStudy: "",
      startYear: "",
       endYear: "",
     description: "",
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
    
  });

  return (
    <AuthContext.Provider value={{ formData, setFormData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
