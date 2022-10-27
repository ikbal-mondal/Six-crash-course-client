import React, { useContext } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const CourseCheckOut = useLoaderData();
    const {title,image_url,days,Course_Fees} = CourseCheckOut;


const handlePay = (event) => {
  event.preventDefault()
 

}


    return (
        <div >

<div className="grid md:grid-cols-2 sm:grid-cols-1 items-center  lg:grid-cols-2 gap-4 container mx-auto shadow-2xl shadow-slate-400 my-10">
  <div className="...">
  <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-2xl ">
  <div className="flex space-x-4">
		<img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<p> Welcome , {user?.displayName}</p>
			<p>Your Email : {user?.email}</p>
		<h2 className="mb-1 text-2xl font-semibold">Your course name , {title}</h2>
		</div>
	</div>
	<div>
		<img src={image_url} style={{width:'200px' , height: '100px' }} alt="" className="object-cover mx-auto w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h3 className="text-xl text-center dark:text-gray-400">Course Fees : $ {Course_Fees}</h3>
	</div>
			<h2 className='text-center text-xl'>{days} Days</h2>	

</div>
  </div>
  <div >
 
   <div className="">
   <img style={{width:'100px' , height: '100px' }} className='mx-auto ' src="https://cdn-icons-png.flaticon.com/512/2038/2038792.png" alt="" />
   <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<Form onClick={handlePay}  novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-slate-900 py-4 rounded-xl ">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
		
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname"  className="text-sm  text-white ">First name</label>
					<input id="firstname" name='name1' type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:border-gray-700 p-2 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname"  className="text-sm text-white ">Last name</label>
					<input id="lastname" name='name2' type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 p-2 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm text-white ">Email</label>
					<input id="email" name='email'  type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 p-2 dark:text-gray-900" />
				</div>
			
				<div className="col-span-full sm:col-span-2">
					<label for="city"  className="text-sm text-white ">Amount</label>
					<input id="city" name='amount' type="text" placeholder="Amount" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="text-sm text-white ">Card Number</label>
					<input id="state" name='card' type="text" placeholder="1235-1453-58473-012" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="zip" className="text-sm text-white ">Pin Code</label>
					<input id="zip" name='pin' type="text" placeholder="* * * *" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
			</div>
      
		</fieldset>
    <button type='submit' className="btn btn-outline btn-info w-9/12 mx-auto rounded ">Pay Now
     
    </button>
	</Form>
 
  
  <div className="text-center mt-5">
    <Link to='/courses'>  <button className="btn btn-outline btn-primary">Back to Courses</button></Link>
 
  </div>
</section>
   </div>
  </div>


</div>




   
        </div>
    );
};

export default CheckOut;