import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ContactContext } from "../../context/ContactContextProvider";
import "./ContactDetails.css";
const ContactDetails = () => {
  const { getContactDetails, ContactDetailsObj, deleteContact } =
    useContext(ContactContext);
  let { id } = useParams();
  useEffect(() => {
    getContactDetails(id);
  }, [id]);

  return (
    <>
    <div>
      <ul>
        <li>Name: </li>
        <li></li>
        <li></li>
      </ul>
    </div>
      {/* <div className="containerTopicDetails">
        <div className="containerTopicDetailsLeft">
          <img id="imgCards" src={topicDetailsObj.image} alt="img" />
        </div>
        <div className="containerTopicDetailsRight">
          <div className="contImg"></div>
          <h3 className="topicDetailsH3">{topicDetailsObj.title}</h3>
          <p className="topicDetailsPT1">Number:{topicDetailsObj.description}</p>
          <p className="topicDetailsPT">
            Подробная информация по ссылке ниже ↓
          </p>
          <a id="topicBtn" target="_blank" href={topicDetailsObj.lib}>
            Ссылка
          </a>
        </div>
      </div> */}
      <div className="topicDetailsButtons">
        <Link to={`/edit/${id}`}>
          <button className="btnCrud" id="edit">
            ✎
          </button>
        </Link>
        <Link to="/ContactList">
          <button className="btnCrud" id="del" onClick={() => deleteContact(id)}>
            🗑
          </button>
        </Link>
      </div>
    </>
  );
};

export default ContactDetails;
