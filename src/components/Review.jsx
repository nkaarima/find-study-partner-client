import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {


    const reviews=
    [
      {
        "id":1,
        "testimonial":` It really encourages collaboration and accountability.Highly recommend it to any student looking to stay motivated and focused.`
      },

      {
         
        "id":2,
        "testimonial":`The interface is clean, and finding study partners nearby is seamless.`
      
      },

      {
        "id":3,
        "testimonial": "This platform is amazing for connecting with like-minded peers."
      }


    ]

    return (
        <div >
            <h1 className="font-bold text-3xl text-center mb-3.5">Testimonials</h1>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between items-center">
                
            {
                reviews.map(review => <ReviewCard review={review}></ReviewCard>)
            }
             </div>

        </div>
    );
};

export default Review;