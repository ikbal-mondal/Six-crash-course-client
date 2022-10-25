import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';
import { FaSignInAlt } from 'react-icons/fa';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
 
  const handleLogOut = () => {

    logOut()
    .then(result => {})
    .catch(error => {
     console.error(error)
    })

  }

    return (
        <div>
          <div className="navbar bg-gray-800 text-white ">
  <div className="navbar-start ">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-gray-900 text-white rounded-box w-52">
        <Link className='mb-2' to='/home'>Home</Link>
        <Link className='mb-2' to='/'>Courses</Link>
        <li tabIndex={0}>
         <Link className='mb-2' to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link className='mb-2' to='/Blog'>Blog</Link>
        </li>

        <label className="swap">
        <input type="checkbox"  />
        <div className="swap-on bg-black text-white px-5 py-1 font-semibold shadow-2xl rounded-2xl">Dark</div>
       <div className="swap-off bg-white text-black px-5 py-1 font-semibold shadow-2xl rounded-2xl">Light</div>
    </label>

    <li className=' my-8 shadow-2xls mx-0  bg-slate-900 rounded-3xl shadow-white text-white '>{user?.email ?  <p>Welcome: {user?.email}</p>
        :
        <>

        </>
        } </li>

      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Six Crash Course</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
  <div className="items-centers justify-center ">

    <ul className="menu menu-horizontal p-0">
      <li> <Link to='/home'>Home</Link></li>
      <li> <Link to='/'>Courses</Link></li>
      <li tabIndex={0}>
      <Link to='/faq'>FAQ</Link>
      </li>
      <li>  <Link to='/Blog'>Blog</Link></li>
      
      <label className="swap">
        <input type="checkbox"  />
        <div className="swap-on bg-black text-white px-5 py-1 font-semibold shadow-2xl rounded-2xl">Dark</div>
       <div className="swap-off bg-white text-black px-5 py-1 font-semibold shadow-2xl rounded-2xl">Light</div>
    </label>
        <li className='ml-3 bg-slate-800 rounded px-3 my-0 shadow-2xl shadow-green-400  text-white font-semibold'>{user?.email ?  <p>Welcome: {user?.email}</p>
        :
        <>
        </>
        } </li>
    </ul>
    </div>

  </div>
  <div className="navbar-end">
   {
   
   user?.uid ? 
   <Link onClick={handleLogOut} className='btn btn-outline btn-error mx-3'> <FaSignInAlt className='mr-2'></FaSignInAlt> Log Out  </Link>
   : 
   <Link to='/login' className='btn btn-outline btn-success mx-3'> <FaSignInAlt className='mr-2'></FaSignInAlt> Log In  </Link> 

    }
  </div>
</div>
        </div>
    );
};

export default Header;