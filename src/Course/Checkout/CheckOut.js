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
        </div>
    );
};

export default CheckOut;