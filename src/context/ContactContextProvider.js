import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const ContactContext = createContext();

const API = "http://localhost:8000/users";

const INIT_STATE = {
  contact: [],
  contactDetails: {},
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return { ...prevState, contact: action.payload };
    case "GET_CONTACT_DETAILS":
      return { ...prevState, contactDetails: action.payload };
    default:
      return prevState;
  }
};


const ContactContextProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState("");

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContact = (contact) => {
    axios.post(API, contact);
  };

  const getContact = async () => {
    const { data } = await axios.get(
      `${API}`
    );
    let action = {
      type: "GET_CONTACT",
      payload: data,
    };
    dispatch(action);
  };

  const getContactDetails = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    let action = {
      type: "GET_CONTACT_DETAILS",
      payload: data,
    };
    dispatch(action);
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
  };

  const editContactPatch = async (id, editedTopic) => {
    await axios.patch(`${API}/${id}`, editedTopic);
  };

  

  let obj = {
    addContact,
    getContact,
    getContactDetails,
    deleteContact,
    editContactPatch,
    setSearchVal,
    contactArr: state.contact,
    ContactDetailsObj: state.contactDetails,
  };

  return (
    <ContactContext.Provider value={obj}>{children}</ContactContext.Provider>
  );
};

export default ContactContextProvider;
