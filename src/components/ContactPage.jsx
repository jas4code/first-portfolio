import React from "react";
import Header from "./Header";
import Quotes from "./Quotes";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <div id='contact'>
      <Header />
      <ContactForm />
      <Quotes />
    </div>
  );
}

export default ContactPage;
