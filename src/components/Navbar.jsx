import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Menu List
  const menuList = [
    { title: "Home", path: "/", id: 1 },
    { title: "About", path: "/about", id: 2 },
    { title: "Contact Me", path: "/contact", id: 3 },
  ];

  const [menu, setMenu] = useState("hidden");

  const hideMenu = () => {
    if (menu === "block") {
      setMenu("hidden");
    } else {
      setMenu("block");
    }
  };

  return (
    <nav className='nav-bg'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex justify-between items-center'>
          <Link to='/' className='site-logo ml-2'>
            Site Logo
          </Link>

          <div className='flex items-center'>
            <div className='lg:flex hidden'>
              <div className='menu-items text-indigo-50'>
                <Link to='/'>Home</Link>
              </div>
              <div className='menu-items text-indigo-300'>
                <Link to='/about'>About</Link>
              </div>
              <div className='menu-items text-indigo-300'>
                <Link to='/contact'>Contact Me</Link>
              </div>
            </div>

            {/* My Blogs Button */}
            <Link to='/blogs' className='blog-btn'>
              My Blogs
            </Link>

            {/* Burger Icon */}
            <div className='burger-icon p-2 my-2 mr-2' onClick={hideMenu}>
              <svg
                className='w-4 sm:w-5 h-4 sm:h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Menu List for Larger Screens */}
        <div
          onClick={hideMenu}
          className={`${menu} absolute right-0 left-0 bg-gray-100  shadow-inner font-bold lg:hidden`}>
          <Link to='/blogs'>
            <div className='sm:hidden w-full text-indigo-600 text-lg bg-indigo-200 hover:bg-gray-200 pl-4 py-1'>
              My Blogs
            </div>{" "}
          </Link>
          {menuList.map((item) => (
            <Link to={item.path} onClick={hideMenu} key={item.id}>
              <div className='w-full py-1 pl-3 text-gray-500 hover:bg-gray-200 hover:text-indigo-600 hover:font-bold'>
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
