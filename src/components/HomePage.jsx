import React from "react";
import HeroHome from "./HeroHome";
import ContactForm from "./ContactForm";
import Quotes from "./Quotes";

function HomePage() {
  return (
    <div id='home'>
      <HeroHome />
      <ContactForm />
      <Quotes />
    </div>
  );
}

export default HomePage;
