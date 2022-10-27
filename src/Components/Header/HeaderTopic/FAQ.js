import React from 'react';

const FAQ = () => {
    return (
        <div>
           <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl text-center mb-5">Frequently Asked Questions</h2>
		<progress className="progress progress-accent via-blue-700 w-96 mx-auto mb-5"></progress>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4  text-lg py-6 focus:outline-none focus-visible:ring-violet-400">What courses are there?</summary>
				<p className="px-4 py-6 pt-0 ml-4 text-xl -mt-4 dark:text-gray-400">There are six courses.  Each course is structured differently.  Name of the courses are Web Development, Graphics Design, Computer Engineering, Digital Marketing Photography and Blog Writing. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 text-lg focus:outline-none focus-visible:ring-violet-400">Do you need to login to access the courses?</summary>
				<p className="px-4 py-6 pt-0 ml-4 text-xl -mt-4 dark:text-gray-400">You must login before registration and then login, otherwise you will not be able to access this course.  Login you can do in three ways login with google login with git hub and you can do it with your name photo url and email and password. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 text-lg focus:outline-none focus-visible:ring-violet-400">How can I access this course?</summary>
				<p className="px-4 py-6 pt-0 ml-4 text-xl -mt-4 dark:text-gray-400">First select the course you want to access and then go to the details page of that course.  There is a button called Get Premium Access.  Click on that button then you will get access.  You can download the PDF by clicking on Generate PDF. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default FAQ;