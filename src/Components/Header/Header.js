import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';

const Header = () => {
  const {user} = useContext(AuthContext)
    return (
        <div>
          <div className="navbar bg-gray-800 text-white ">
  <div className="navbar-start ">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-gray-900 text-white rounded-box w-52">
        <Link to='/'>Courses</Link>
        <li tabIndex={0}>
         <Link to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link to='/Blog'>Blog</Link>
        </li>

        <label className="swap">
        <input type="checkbox"  />
        <div className="swap-on bg-black text-white px-5 py-1 font-semibold shadow-2xl rounded-2xl">Dark</div>
       <div className="swap-off bg-white text-black px-5 py-1 font-semibold shadow-2xl rounded-2xl">Light</div>
    </label>

    <li className='ml-3  my-6 bg-slate-500 px-3  shadow-2xl shadow-green-400 rounded-xl text-white font-semibold'>{user?.displayName ?  <p>Welcome: {user?.displayName}</p>
        :
        <>
        </>
        } </li>

      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
  <div className="items-centers justify-center ">

    <ul className="menu menu-horizontal p-0">
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
        <li className='ml-3 bg-slate-800 rounded px-3 my-0 shadow-2xl shadow-green-400  text-white font-semibold'>{user?.displayName ?  <p>Welcome: {user?.displayName}</p>
        :
        <>
        </>
        } </li>
    </ul>
    </div>

  </div>
  <div className="navbar-end">
   <Link to='/login' className='btn bg-slate-700 text-yellow-600 shadow-xl mx-3'>log in </Link>
  </div>
</div>
        </div>
    );
};

export default Header;