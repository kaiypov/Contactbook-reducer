import React, { useContext, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { ContactContext } from "../../context/ContactContextProvider";
import "./AddContact.css";
const AddContact = () => {
  const { AddContact } = useContext(ContactContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  

  function handleClick() {
    let newContact = {
      name,
      surname,
      number,
      
    };
    AddContact(newContact);
    setName("");
    setSurname("");
    setNumber("");
  
  }
  return (
    <>


      <div className="containerAddTopic">
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Имя</InputGroup.Text>
          <FormControl
            value={name}
            placeholder="Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Фамилия</InputGroup.Text>
          <FormControl
            value={surname}
            placeholder="Surname"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setSurname(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="addTopic-inputs mb-3">
          <InputGroup.Text id="basic-addon1">Фото</InputGroup.Text>
          <FormControl
            value={number}
            placeholder="Number"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setNumber(e.target.value)}
          />
        </InputGroup>
       
        <Button onClick={handleClick} className="addTopic-btn">
          Добавить
        </Button>
      </div>
    </>
  );
};

export default AddContact;
