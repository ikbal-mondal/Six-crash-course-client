import React, { useEffect, useState } from 'react';

import ShowleftSidebar from './ShowleftSidebar';

const LeftSidebar = () => {
    const [categories,setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
       <div className="">

        {

           categories.map(category => <ShowleftSidebar
           key={category.id}
           category={category}
           ></ShowleftSidebar>)

        }
 
       </div>


            
    );
};

export default LeftSidebar;