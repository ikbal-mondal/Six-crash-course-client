import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from 'react-icons/fa';
const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse bg-slate-300 shadow-2xl rounded">
    <div className="text-center lg:text-left">
    <div className="">
     <button className='btn bg-black text-white px-6 my-2'> <FaGoogle className='text-2xl mr-2'></FaGoogle> log in width google</button>
     <button className='btn bg-black text-white px-6 my-2'> <FaGithub className='text-2xl mr-2'></FaGithub> log in width github</button>
    </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">No account yet? Registration</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
       
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;