import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className='hero-bg py-10 px-3 shadow-lg'>
      <div className='max-w-screen-xl text-center lg:w-11/12 xl:10/12 sm:text-left mx-auto flex flex-col sm:flex-row md:justify-between'>
        <div className='sm:w-2/3 mx-auto'>
          <p className='text-sm md:text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <h1 className='hero-quote mb-5 md:mb-7 xl:mb-10'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, id.
          </h1>
          <p className='self-intro'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            illum est. Nulla distinctio consectetur numquam vero ad, beatae hic
            aliquid.
          </p>
          <div className='md:my-5 xl:ml-5'>
            <Link to='/about'>
              <button className='btn-primary hero-btn m-3'>About Me</button>
            </Link>
            <Link to='/contact'>
              <button className='btn-secondary hero-btn mx-3'>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className='w-1/2 sm:w-1/5  mt-5 mx-auto sm:mt-0 flex sm:flex-col justify-around items-center'>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='hero-sites hover:text-blue-500 sm:hover:bg-blue-300'>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>
          </a>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='hero-sites  hover:text-gray-600 sm:hover:bg-gray-400'>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </div>
          </a>
          <a
            href='https://linkedin.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='hero-sites hover:text-blue-900 sm:hover:bg-blue-600'>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
