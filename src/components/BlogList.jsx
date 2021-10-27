import React, { useState } from "react";
import { Link } from "react-router-dom";

function BlogList() {
  const blogTopics = [
    { title: "Item-1", id: 1 },
    { title: "Item-2", id: 2 },
    { title: "Item-3", id: 3 },
  ];

  const [topics, setTopics] = useState("hidden");
  const [arrow, setArrow] = useState(
    <svg
      className='w-4 md:w-5 h-4 md:h-5'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M19 9l-7 7-7-7'></path>
    </svg>
  );

  const hideTopics = () => {
    if (topics === "block") {
      setTopics("hidden");
      setArrow(
        <svg
          className='w-4 md:w-5 h-4 md:h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M19 9l-7 7-7-7'></path>
        </svg>
      );
    } else {
      setTopics("block");
      setArrow(
        <svg
          className='w-4 md:w-5 h-4 md:h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M5 15l7-7 7 7'></path>
        </svg>
      );
    }
  };

  return (
    <div>
      <div className='max-w-screen-lg mx-auto pb-4'>
        <div className='flex flex-col w-full overflow-hidden rounded-md'>
          <div className='flex'>
            <div className='hidden bg-purple-400 md:block px-5'>hello</div>
            <div className='bloglist-header'>
              <p className='bloglist-title'>Lorem ipsum dolor sit amet.</p>
              <p className='bloglist-sub'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat eius ut culpa.
              </p>
            </div>
          </div>
          <div className={`${topics}`}>
            {blogTopics.map((item) => (
              <Link onClick={hideTopics} key={item.id}>
                <div className='page-paragraph blog-topics'>{item.title}</div>
              </Link>
            ))}
          </div>
          <button onClick={hideTopics} className='bloglist-show-btn'>
            {arrow}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
