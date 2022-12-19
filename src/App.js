import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ContactContextProvider from "./context/ContactContextProvider";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
    <ContactContextProvider>
    <BrowserRouter>
        <Navbar />
        <MainRoutes />
      </BrowserRouter>
       </ContactContextProvider>
    </>
  );
};

export default App;
