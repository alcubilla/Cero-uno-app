import React from "react";
import ContactCard from "./components/ContactCard";
import contactsData from "./contactsData";

const App = () => {
  const cards = contactsData.map((contact, idx) => (
    <ContactCard info={contact} key={idx} />
  ));

  return <div>{cards}</div>;
};

export default App;
