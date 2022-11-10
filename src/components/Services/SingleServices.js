import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleServices = () => {
    const services = useLoaderData();

    const {  description, } = services;

    console.log(services);
    return (
      <div className="bg-gray-800 text-gray-50">
        <div className="container grid grid-cols-12 mx-auto bg-gray-900">
        
          <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4">
            <img src={services.img} alt="" />
          </div>

          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start">
              <span className="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-900">
                {services.services_name}
              </span>
            </div>
            <h1 className="text-3xl font-semibold">{services.services_name}</h1>

            <p className="flex-1 p-5">
            {description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xl">Price: ${services.price}</span>
              <span className="text-xl">Rating: {services.rating}</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <Link
                //  to={`/services/${_id}`}
                >
                  <button className="px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-violet-200 text-gray-800 hover:bg-cyan-400">
                    Cheackout
                  </button>
                </Link>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default SingleServices;