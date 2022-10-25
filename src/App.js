import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./Course/Courses";
import Main from "./layout/Main";
import FAQ from "./Components/Header/HeaderTopic/FAQ"
import Blog from "./Components/Header/HeaderTopic/Blog";
import Register from "./Register_And_Login/Register/Register"
import Login from "./Register_And_Login/LogIn/Login"
import Error404page from "./Error404Page/Error404page";
import DetailsCourseInfo from "./Course/DetailsCourseInfo";

import CheckOut from "./Course/Checkout/CheckOut";
import Home from "./Components/Home/Home";
function App() {

  const router = createBrowserRouter([

     {
      path:'/' , 
      element: <Main></Main> ,
       children:[
        { 
          path:'*',
          element:<Error404page></Error404page>

        },
          {
            path:'/home',
            element:<Home></Home>
          },
          {
            path:'/',
            loader: ()  => {

              return fetch('http://localhost:5000/allCourse')
           },
            element:<Courses></Courses>
          },
          {
            path:'/courses',
            loader: ()  => {

               return fetch('http://localhost:5000/allCourse')
            },
            element:<Courses></Courses>
          },
          {
            path:'/detailsCourseInfo/:_id',
            loader: ({params})  => {

               return fetch(`http://localhost:5000/category/${params._id}`)
            },
            element:<DetailsCourseInfo></DetailsCourseInfo>
          },
          
          {
            path:'/checkOut/:checkOutId',
            loader: ({params})  => {

               return fetch(`http://localhost:5000/category/${params.checkOutId}`)
            },
            element:<CheckOut></CheckOut>
          },

          
          {
            path:'/faq',
            element: <FAQ></FAQ>
          },
          {
            path:'/blog',
            element: <Blog></Blog>
          },
          {
            path:'/register',
            element: <Register></Register>
          },
          {
            path:'/login',
            element: <Login></Login>
          }

       ]
     }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
