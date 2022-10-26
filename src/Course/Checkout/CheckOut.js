import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const CourseCheckOut = useLoaderData();
    const {title,image_url,days,Course_Fees} = CourseCheckOut;
    
    return (
        <div >

<div className="grid md:grid-cols-2 sm:grid-cols-1 items-center  lg:grid-cols-2 gap-4 container mx-auto">
  <div className="...">
  <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex space-x-4">
		<img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<p>Yur Name:  {user?.displayName}</p>
			<p>Your Email : {user?.email}</p>
		</div>
	</div>
	<div>
		<img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-2xl font-semibold">Name:{title}</h2>
		<h3 className="text-xl dark:text-gray-400">Course Fees : $ {Course_Fees}</h3>
	</div>
	<div className="flex flex-wrap justify-between">
		<div className="space-x-2">
			<h2>{days} Days</h2>	
		</div>
		
	</div>
</div>
  </div>
  <div >
    <div className="">
    <Link to='/courses'>  <button className="btn btn-outline btn-primary">Back to Courses</button></Link>
    </div>
   <div className="">
   <img src="https://cdn-icons-png.flaticon.com/512/2038/2038792.png" alt="" />
   </div>
  </div>
 
</div>




   
        </div>
    );
};

export default CheckOut;