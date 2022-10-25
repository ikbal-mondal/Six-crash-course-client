import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCourseInfo = () => {
    const courseDetails = useLoaderData()
    return (
        <div>
            <h2>this category {courseDetails.length}</h2>
        </div>
    );
};

export default DetailsCourseInfo;