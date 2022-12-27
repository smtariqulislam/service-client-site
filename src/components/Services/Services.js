import React, { useEffect, useState } from 'react';
import ServicesDetails from './ServicesDetails';

const Services = () => {
    const [services,setServices]= useState([]);
    useEffect(()=>{
        fetch("https://service-sever-site.vercel.app/services")
        .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className="text-5xl font-bold text-center pb-5">Services</h1>
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {
            services.map((service) => (
              <ServicesDetails
                key={service._id}
                service={service}
              ></ServicesDetails>
            ))
            // services.length
          }
        </div>
      </div>
    );
};

export default Services;