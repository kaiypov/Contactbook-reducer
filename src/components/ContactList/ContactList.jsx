import React, { useContext, useEffect } from "react";
import { ContactContext } from "../../context/ContactContextProvider";
import "./ContactList.css";


const ContactList = () => {
  const { contactArr, getContact} =
    useContext(ContactContext);

  useEffect(() => {
    getContact();
  }, []);
  console.log(contactArr);
  return (
    <div className="container d-flex justify-content-evenly flex-wrap container-cards">
      {contactArr.map((item) => (
        <div key={item.id}>
          <div
          >
            <h5>{item.number}</h5>
            <div>
              <h6>{item.name}</h6>
              <h6>{item.surname}</h6>
            </div>
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default ContactList;
