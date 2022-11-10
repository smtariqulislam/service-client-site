import React from 'react';

const ReviewDetails = ({r}) => {
   const {customer,message,price,email} = r;
    return (
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Review</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Customer Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Review</th>
               
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="p-3">
                  <p>{customer}</p>
                </td>
                <td className="p-3">
                  <p>{email}</p>
                </td>
                <td className="p-3">
                  <p>{message}</p>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ReviewDetails;