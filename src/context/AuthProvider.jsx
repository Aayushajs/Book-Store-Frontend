import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("token");
  const [authUser, setAuthUser] = useState(initialAuthUser || undefined);
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}> 
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
