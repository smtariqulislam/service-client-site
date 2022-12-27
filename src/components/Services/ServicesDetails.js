import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDetails = ({service}) => {
    const { _id,services_name,rating,img,price,description} = service;
    return (
      <div>
        <div className="bg-gray-100 p-6 rounded shadow-lg">
          <img
            className="object-cover w-full h-80 mb-6 rounded shadow-lg "
            src={img}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            {services_name}
          </p>
          <h1 className=" font-bold text-blue-600 ">Rating: {rating}</h1>
          <h1 className=" font-bold text-blue-600 ">Price: ${price}</h1>
          <h1 className=" font-bold text-blue-600 ">
            <span className="text-black">Description:</span>
            {description.length > 100 ? (
              <p>
                {description.slice(0, 100) + "..."}{" "}
                <Link to={`/services/${_id}`} className="text-black">
                  Read More
                </Link>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </h1>
          <p>
            <Link to={`/services/${_id}`}>
              <button className="px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-green-900 text-gray-100 hover:bg-green-700">
                Details
              </button>
            </Link>
          </p>
        </div>
      </div>
    );
};

export default ServicesDetails;