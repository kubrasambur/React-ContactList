import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import  "./styles.css"

function Contacts() {
  
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: 123123,
    },
    {
        fullname: "Ahmet",
        phone_number: 456123,
      },
      {
        fullname: "Ayşe",
        phone_number: 965245,
      },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
        <h1>Contacts</h1>
      <List contacts={contacts}></List>
      <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  );
}

export default Contacts;
