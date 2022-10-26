import React from 'react';
import { Link } from 'react-router-dom';

const ShowleftSidebar = ({category}) => {
    
    return (
        <div className="...">
        <div className="flex flex-col px-4 sm:w-full  bg-gray-100 border-r dark:bg-gray-900 dark:border-gray-700">
          <div className="flex flex-col justify-between flex-1 mt-6">
         

            <nav>
        
              <Link to={`detailsCourseInfo/${category.id}`} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" > <span className="mx-4 font-medium">
                   {category.name}
                    </span> </Link> 
              
            </nav>
          </div>
        </div>
        </div>
     
    );
};

export default ShowleftSidebar;