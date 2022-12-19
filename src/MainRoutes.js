import React from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/add" element={<AddContact />} />
      <Route path="/topicsList" element={<ContactList />} />
      <Route path="/topicsDetails/:id" element={<ContactDetails />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
