import React from 'react';

const DisplayCourse = ({course}) => {

    const {title,image_url,Course_Fees  } = course

    return (
        <div>
            <img src={image_url} alt="" />
            <h1>title{title}</h1>
        </div>
    );
};

export default DisplayCourse;