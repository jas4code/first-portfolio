import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header-container'>
      <h1 className='header-title'>LOREM</h1>
      <p className='breadcrumbs'>
        <Link to='/' className='b-inactive'>
          Home
        </Link>
        | <span className='b-active'>lorem</span>
      </p>
    </div>
  );
}

export default Header;
