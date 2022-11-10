import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = ({_id}) => {
    // const {user}= useContext(AuthContext);

    const [review,setReview] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:4000/orders?service=${_id}`)
          .then((res) => res.json())
          .then((data) => setReview(data));

    },[])
    return (
      <div className='p-10 bg-slate-400 text-blue-800'>
        <h1 className="text-5xl"> Review Total: {review.length}</h1>
      
        {review.map((r) => (
          <ReviewDetails key={r._id} r={r}></ReviewDetails>
        ))}
      </div>
    );
};

export default Review;