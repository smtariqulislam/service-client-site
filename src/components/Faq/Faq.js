import React from 'react';

const Faq = () => {
    return (
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the counseling explain?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Counselling is a form of 'talk therapy'. It is a process where
                  an individual, couple or family meet with a trained
                  professional counsellor to talk about issues and problems that
                  they are facing in their lives. Professional counselling is
                  confidential and non-judgmental.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What are the 3 types of counselling?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The three major techniques used in counselling process in
                  schools. The techniques are: (1) Directive Counselling, (2)
                  Non-Directive Counselling, and (3) Eclectic Counselling. 1.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is basic counselling skills?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Counselling skills are
                  interpersonal and technical traits that a counsellor uses to
                  better understand and listen to their clients. Using these
                  skills, a counsellor helps a client overcome obstacles that
                  are preventing them from leading a happy life.
                </p>
              
              </div>
            </details>
          </div>
        </div>
      </section>
    );
};

export default Faq;