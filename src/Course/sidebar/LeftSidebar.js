import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const LeftSidebar = () => {
    const [categories,setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>

            <div className="...">
        <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <Link
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-400"
                
              >
                <span className="mx-4 font-medium">Total Course {categories.length}</span>
              </Link>
   
             {

               categories.map(category => <>
                   <Link  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" > <span className="mx-4 font-medium" key={category.id}>
                    {category.name}
                    </span> </Link> 
               </>)
             }
              
            </nav>
          </div>
        </div>
        </div>
        </div>
    );
};

export default LeftSidebar;