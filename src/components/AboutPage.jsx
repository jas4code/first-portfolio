import React from "react";
import Header from "./Header";
import Quotes from "./Quotes";

function AboutPage() {
  return (
    <div id='about'>
      <Header />
      <div className='bg-indigo-100 p-5 lg:py-8'>
        <div className='max-w-screen-lg mx-auto pb-10'>
          <div className='md:flex md:flex-row-reverse md:items-stretch'>
            <div className='bg-indigo-400 h-100 p-5 md:w-2/5 md:ml-5 xl:ml-8 xl:w-1/2 flex justify-center items-center rounded-full md:rounded-none'>
              -- Image --
            </div>
            <div className='w-full md:w-3/5 xl:w-1/2 pt-6 pl-2 md:pt-0'>
              <h2 className='page-title'>About, ipsum dolor.</h2>
              <p className='page-paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia totam sint molestias dolorem laborum, exercitationem
                sunt, illum at eum quo nisi eius! Recusandae, neque corporis
                laborum eveniet velit amet incidunt?
              </p>
              <p className='page-paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                labore.
              </p>
              <p className='page-paragraph'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, laborum? Molestiae non animi doloremque illum.
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto sm:mt-7 lg:mt-10'>
          <div className='text-center mb-4 sm:mb-7 lg:mb-10'>
            <h2 className='page-title'>Soft Skills</h2>
            <p className='md:text-lg'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-icon'>
                <svg
                  className='w-10 h-10'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
              </div>
              <h3 className='card-title'>Attributes</h3>
              <p className='card-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                totam quasi neque.
              </p>
            </div>
            <div className='card'>
              <div className='card-icon'>
                <svg
                  className='w-10 h-10'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
              </div>
              <h3 className='card-title'>Attributes</h3>
              <p className='card-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                totam quasi neque.
              </p>
            </div>
            <div className='md:-mr-0 card'>
              <div className='card-icon'>
                <svg
                  className='w-10 h-10'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
              </div>
              <h3 className='card-title'>Attributes</h3>
              <p className='card-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                totam quasi neque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Quotes />
    </div>
  );
}

export default AboutPage;
