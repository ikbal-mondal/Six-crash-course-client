import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const CourseCheckOut = useLoaderData();
    const {title,image_url,days,Course_Fees} = CourseCheckOut;
    console.log(title);
    return (
        <div>
            <img src={image_url} alt="" />
         <h1>  title{title}</h1>
         <p>{days}</p>
         <h3>{Course_Fees}</h3>

        </div>
    );
};

export default CheckOut;