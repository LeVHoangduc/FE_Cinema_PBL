import { createContext, useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { getCity } from "../api/lichchieu.api";
import { useQuery } from "@tanstack/react-query";

export const AppContext = createContext();

// const initialCity =

export const AppProvider = ({ children }) => {
  // const [city, setCity] = useState(initialCity);
  const [isActive, setIsActive] = useState(true);
  return (
    <AppContext.Provider
      value={{
        isActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
