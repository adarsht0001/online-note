"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const getUser = () => {
    return user;
  };
  const updateUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.clear();
    router.push("/login");
    setUser({});
  };

  return (
    <UserContext.Provider value={{ getUser, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};