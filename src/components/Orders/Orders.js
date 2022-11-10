import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderDetails from './OrderDetails';

const Orders = () => {
    const {user} =useContext(AuthContext);

    const [orders,setOrders]= useState([]);

    useEffect(()=>{
        fetch(`https://service-sever-site.vercel.app/orders?email=${user?.email}`)
        .then(res =>res.json())
        .then(data=>setOrders(data))

    },[user?.email])

     const handleDelete = (id) => {
       const proceed = window.confirm(
         "Are you sure, you want to cancel this order"
       );
       if (proceed) {
         fetch(`https://service-sever-site.vercel.app/orders/${id}`, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             if (data.deletedCount > 0) {
               alert("deleted successfully");
               const remaining = orders.filter((odr) => odr._id !== id);
               setOrders(remaining);
             }
           });
       }
     };


      const handleStatusUpdate = (id) => {
        fetch(`https://service-sever-site.vercel.app/orders/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "Approved" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = orders.filter((odr) => odr._id !== id);
              const approving = orders.find((odr) => odr._id === id);
              approving.status = "Approved";

              const newOrders = [approving, ...remaining];
              setOrders(newOrders);
            }
          });
      };

    
    return (
      
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold text-center">Your Order{orders.length}</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
        {orders.map((order) => (
               <OrderDetails
                  key={order._id}
                  order={order}
                   handleDelete={handleDelete}
                   handleStatusUpdate={handleStatusUpdate}
              ></OrderDetails>
            ))}
        
        </ul>
       
      </div>
    );
};

export default Orders;