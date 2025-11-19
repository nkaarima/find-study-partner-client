import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const purposes= 
[
    {
        "id": 1,
        "message": "A common ground where students can get study related help"
    },

    {
        "id":2,
        "message": "Students can share their learning"
    },
    
    {
       "id":3,
       "message": "Both online and offline mode of study are ensured"
    }
    
     
]

const Slider = () => {
    return (
        <div className="">

            <Swiper modules={[Pagination,Autoplay]}
                     
                     pagination={{clickable: true}}
                     autoplay={{
                        delay:2800
                     }}                
                    >
                  
                     {purposes.map(purpose=> (
                    
                      <SwiperSlide key={purpose.id}>
                       
                        
                          <div className="flex flex-col justify-center items-center h-[180px]">
                               
                                <h1 className="text-2xl font-bold">{purpose.message}</h1>
                             
                          </div>
                            
            
            
            
                      </SwiperSlide>
            
                    
                     )  )}
               
               
                    </Swiper>
        </div>
    );
};

export default Slider;