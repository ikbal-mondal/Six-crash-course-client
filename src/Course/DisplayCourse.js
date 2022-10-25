import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayCourse = ({course}) => {
     
    const {title,image_url,Course_Fees , category_id } = course
    
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
     <Link to={`detailsCourseInfo/${category_id}`}> <button className="btn btn-primary"> More details  <FaArrowRight className='ml-2'></FaArrowRight> </button></Link>
    </div>
  </div>
</div>
          </div>
        
    );
};

export default DisplayCourse;