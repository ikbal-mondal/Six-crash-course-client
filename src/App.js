import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./Course/Courses";
import Main from "./layout/Main";
import FAQ from "./Components/Header/HeaderTopic/FAQ"
import Blog from "./Components/Header/HeaderTopic/Blog";
import Register from "./Register_And_Login/Register/Register"
import Login from "./Register_And_Login/LogIn/Login"
function App() {

  const router = createBrowserRouter([

     {
      path:'/' , 
      element: <Main></Main> ,
       children:[
          {
            path:'/',
            element:<Courses></Courses>
          },
          {
            path:'/courses',
            element:<Courses></Courses>
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
