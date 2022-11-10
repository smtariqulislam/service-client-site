import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    // const serviceName =
    const { _id, price, services_name } = useLoaderData();
    const {user} = useContext(AuthContext);

    const  handlePlaceOrder= event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const phone = form.phone.value;

        const order ={
            service:_id,
            serviceName: services_name,
            price,
            customer: name,
            email,
            phone,
            message

        }

        fetch(`https://service-sever-site.vercel.app/orders`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
               

                alert('successfull')
                  form.reset();

            }
        })
        .catch(er=>console.error(er));


    }

    // console.log(serviceName);
    return (
      <form
        onSubmit={handlePlaceOrder}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid p-10"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 text-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Price: ${price}</p>
            <p className="text-xl">SErvice: {services_name}</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-sm">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Username"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-sm">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Username"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-sm">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                defaultValue={user?.email}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                readOnly
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-sm">
                Password
              </label>
              <input
                id="website"
                name="password"
                type="password"
                placeholder="password"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-sm">
                Phone
              </label>
              <input
                name="phone"
                type="text"
                placeholder="phone"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Review
              </label>
              <textarea
                name="message"
                placeholder="please write a review"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <div className="flex items-center space-x-2">
                {/* <Link> */}
                  <input
                    className="px-4 py-2 border rounded-md
                    hover:bg-cyan-900 
                    border-red-700"
                    type="submit"
                    value="Place Your Order"
                  />
                {/* </Link> */}
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    );
};

export default Checkout;