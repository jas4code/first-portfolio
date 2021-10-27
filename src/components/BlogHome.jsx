import React from "react";
import Quotes from "./Quotes";
import Header from "./Header";
import BlogList from "./BlogList";

function BlogHome() {
  return (
    <div className='bg-indigo-200'>
      <Header />
      <div className='bloghome-container mx-auto'>
        <div className='md:pt-2 pb-6 md:pb-8 lg:pb-12'>
          <div className='max-w-screen-xl mx-auto'>
            <p className='page-title'>Lorem ipsum dolor sit amet.</p>
            <p className='page-paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              laborum commodi, blanditiis sapiente itaque fuga!
            </p>
          </div>
        </div>
        <BlogList />
        <BlogList />
      </div>
      <Quotes />
    </div>
  );
}

export default BlogHome;
