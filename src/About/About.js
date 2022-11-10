import React from 'react';

import pic from '../assets/picture3.jpg'

const About = () => {
    return (
      <div className='p-10'>
        <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
          <img
            src={pic}
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
          />
          <div>
            <h2 className="text-xl font-semibold">S M Tariqul Islam</h2>
            <span className="block pb-2 text-sm dark:text-gray-400">
              The great Advisor.
            </span>
            <p>
              I’m A Professional Advisor. Starting a fund at a community
              foundation is significantly less expensive and easier than
              starting and operating a private foundation.
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;