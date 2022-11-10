import React from 'react';

import pic from '../assets/picture3.jpg'

const About = () => {
    return (
      <div>
        <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
          <img
            src={pic}
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
          />
          <div>
            <h2 className="text-xl font-semibold">Leroy Jenkins</h2>
            <span className="block pb-2 text-sm dark:text-gray-400">
              CTO of Company Inc.
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;