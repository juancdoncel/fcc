import React, {createContext, useState } from "react";

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
const [service, setService] = useState("fachada")

  return (
    <>
      <ServiceContext.Provider value={{ service, setService }}>
        {children}
      </ServiceContext.Provider>
    </>
  );
};

export default ServiceProvider
