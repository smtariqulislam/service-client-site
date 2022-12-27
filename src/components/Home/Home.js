import React from 'react';
import Services from '../Services/Services';
import Faq from '../Faq/Faq'

import picture from '../../assets/picture3.jpg'

const Home = () => {
    return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  We cordially invite you to Person Advisor. 
                  <br />
                  <br />
                  <h1 className="text-violet-700">
                    {" "}
                    Meet Advisor S M Tariqul Islam.
                  </h1>
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                    <span className="relative inline-block text-deep-purple-accent-400"></span>
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  The best help you can get is someone who genuinely cares and
                  knows how to help you get what you don't even know you want
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">Counseling</h6>
                    <p className="text-sm text-gray-900">
                      Advising and counseling is available to assist students
                      with course selection, education and career planning as
                      well as supporting students as they strengthen their
                      college success and life skills.
                    </p>
                  </div>
                </div>
                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Academic Advising
                    </h6>
                    <p className="text-sm text-gray-900">
                      Advisors are available to meet with students to provide
                      support on topics like career and academic planning,
                      transitioning to a university, and how to enhance college
                      success skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={picture}
                alt=""
              />
            </div>
          </div>
        </div>

        <Services></Services>

        <Faq></Faq>
      </div>
    );
};

export default Home;