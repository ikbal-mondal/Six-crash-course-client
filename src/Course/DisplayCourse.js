import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const DisplayCourse = ({course}) => {

    const {title,image_url,Course_Fees  } = course

    return (
       
          <div className="">
           <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {title}</h2>
    <p>Course Fees : ${Course_Fees}</p>
    <div className="card-actions">
      <button className="btn btn-primary"> More details  <FaArrowRight className='ml-2'></FaArrowRight> </button>
    </div>
  </div>
</div>
          </div>
        
    );
};

export default DisplayCourse;