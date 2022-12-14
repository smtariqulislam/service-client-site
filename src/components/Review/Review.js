import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = ({_id}) => {
    // const {user}= useContext(AuthContext);

    const [review,setReview] = useState([]);

    useEffect(()=>{
        fetch(`https://service-sever-site.vercel.app/orders?service=${_id}`)
          .then((res) => res.json())
          .then((data) => setReview(data));

    },[])
    return (
      <div className="p-10 bg-slate-400 text-blue-800">
        <h1 className="text-5xl"> Review Total: {review.length}</h1>

        {review.map((r) => (
          <ReviewDetails key={r._id} r={r}></ReviewDetails>
        ))}
        <Link to={`/services/${_id}/checkout`}>
          <button className="px-8 block mt-4 py-3 font-semibold rounded-full bg-gray-800 text-gray-200 hover:bg-violet-400">
            Add Review
          </button>
        </Link>
      </div>
    );
};

export default Review;