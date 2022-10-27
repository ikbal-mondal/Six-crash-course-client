import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
		<section className="dark:bg-gray-800 dark:text-gray-100 container mx-auto">
		<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
			<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="https://kaleidolanguages.com/wp-content/uploads/2021/03/slider-element.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
			</div>
			<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
				<h1 className="text-5xl font-bold leading-none sm:text-4xl">Welcome 
					<span className="dark:text-violet-400 px-2">to </span> Our Courses
				</h1>
				<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
					<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
				</p>
				<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to='/courses'> <button className="btn btn-outline btn-primary">Go to Courses</button></Link>
                  <Link to='/register'><button className="btn btn-outline btn-secondary">Registration Now</button></Link>
				</div>
			</div>
		</div>

         {/* carousel start */}
		 <h2 className='text-5xl font-bold leading-none sm:text-4xl text-center'>Our Gallery</h2>
		<div className="text-center">
		<progress className="progress w-56  progress-primary "></progress>
		</div>
		 <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://images.shiksha.com/mediadata/images/articles/1568193656phpmWI2xq.jpeg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/141855587/original/ea5d41ee7ec15685bcf7e6cb015d3b918e58a2b7/do-responsive-front-end-web-development-in-react-nodejs-html-css-bootstrap.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://epicful.com/wp-content/uploads/2020/05/shutterstock_607080881.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://digitaltribe.ae/wp-content/uploads/2021/05/Graphic-designing.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/two%20computer%20science%20professionals%20using%20equipment.jpg?itok=MrpsVcwO" />
		
		
	</div>
</section>
         {/* carousel end */}

	</section>
    );
};

export default Home;