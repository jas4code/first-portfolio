import React from "react";

function ContactForm() {
  return (
    <div className='contact-bg w-full pb-10'>
      <div className='w-11/12 mx-auto flex flex-col'>
        <div className='text-center mt-10'>
          <p className='font-blue text-sm md:text-base xl:text-lg font-bold text'>
            Contact Me
          </p>
          <h1 className='contact-header'>Leave a message at the beep</h1>
          <p className='md:text-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className=' text-sm md:text-base xl:text-lg font-bold text'>
            <span className='font-blue'>(+63)912-345-6789</span> |{" "}
            <span className='font-blue'>test@test.com</span>
          </p>
        </div>

        <form className='form-bg w-full max-w-lg mx-auto my-10 p-5'>
          <div className='w-full mx-auto'>
            <div>
              <div className='mb-3'>
                <label className='form-text'>
                  First Name
                  <span className='text-indigo-500'>(Optional)</span>
                </label>
                <input type='text' className='w-full pl-3 py-1 rounded' />
              </div>
              <div className='mb-3'>
                <label className='form-text'>
                  Last Name
                  <span className='text-indigo-500'>(Optional)</span>
                </label>
                <input type='text' className='w-full pl-3 py-1 rounded' />
              </div>
            </div>

            <div className='mb-3'>
              <label className='form-text'>
                E-mail
                <span className='text-red-400 text-lg font-bold'>*</span>
              </label>
              <input
                type='text'
                className='w-full pl-3 py-1 rounded'
                required
              />
            </div>

            <div className='mb-3'>
              <textarea
                className='text-base pl-3 py-1 w-full h-20 rounded'
                placeholder='Message here...'
                required></textarea>
            </div>

            <button className='btn-primary text-lg text-center py-2 w-full'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
