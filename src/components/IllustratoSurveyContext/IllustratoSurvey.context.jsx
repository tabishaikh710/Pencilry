import { useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // first, have you freelanced before?
  const [hasFreelancedBefore, setHasFreelancedBefore] = useState("");
  // What’s your biggest goal for freelancing?
  const [biggestGoal, setBiggestGoal] = useState("");

  return (
    <AuthContext.Provider
      value={{ hasFreelancedBefore, setHasFreelancedBefore }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };