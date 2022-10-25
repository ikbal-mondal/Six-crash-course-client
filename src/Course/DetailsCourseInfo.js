import React from 'react';
import {  Link, useLoaderData } from 'react-router-dom';


const DetailsCourseInfo = () => {
    const course = useLoaderData()
     const {title, image_url,details, days, Course_Fees, category_id } = course;
    return (
        <div className='container mx-auto'>
         <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{title}</h1>

        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={image_url} alt=""/>

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase">{days} days</p>

                <p href="#" class="block mt-4 text-2xl font-semibold text-gray-800  dark:text-white md:text-3xl">
                Course Fees : $ {Course_Fees}
                </p>

                <h2 class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {details}
                </h2>

                <div class="flex items-center mt-6">  

                    <div class="mx-4">
                        <Link to={`checkOut/${category_id}`}>
                    <button className="btn btn-outline btn-primary mx-3">Check Out</button></Link>
                    <button className="btn btn-outline btn-success mx-3">Get Premium Access</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default DetailsCourseInfo;