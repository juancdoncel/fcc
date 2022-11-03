import ServiceProvider from "./context/serviceContext";
import React from "react";
import Routers from "./Routes/Routes";

function App() {
  return (
    <>
    <ServiceProvider>
     <Routers/>
    </ServiceProvider>
    </>
  );
}

export default App;
