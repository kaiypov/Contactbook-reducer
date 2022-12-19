import React, { useContext, useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { ContactContext } from "../../context/ContactContextProvider";
import { useParams, Link } from "react-router-dom";
const EditContact = () => {
  const { editContactPatch, getContactDetails, ContactDetailsObj } =
    useContext(ContactContext);

  const [editName, setEditName] = useState(ContactDetailsObj.name);
  const [editSurname, setEditSurname] = useState(
    ContactDetailsObj.surname);
  const [editNumber, setEditNumber] = useState(ContactDetailsObj.number);

  let { id } = useParams();

  useEffect(() => {
    getContactDetails(id);
  }, [id]);

  function handleClick() {
    let editedContact = {
      name: editName,
      surname: editSurname,
      number: editNumber,
    
    };
    editContactPatch(id, editedContact);
  }

  return (
    <>
      <div>
        <input
            value={editName}
            placeholder="Name"
            onChange={(e) => setEditName(e.target.value)}
          />
        <input
            value={editSurname}
            placeholder="Surname"
            onChange={(e) => setEditSurname(e.target.value)}
          />
        
        <input
            value={editNumber}
            placeholder="Number"
            onChange={(e) => setEditNumber(e.target.value)}
          />
        
        
        <Link to="/topicsList">
          <Button onClick={handleClick} className="addTopic-btn">
            Сохранить
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EditContact;
