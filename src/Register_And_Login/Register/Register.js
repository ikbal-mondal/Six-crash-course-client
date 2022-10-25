import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';

const Register = () => {
  const {createUser} = useContext(AuthContext)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photoUrl,email,password);
    createUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
     console.error(error)
    })


  }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <Form onSubmit={handleSubmit} className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">full name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your full name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='photoUrl' placeholder="Enter your Photo Url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">You have a already account ? Please Log in now  </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register Now</button>
        </div>
      </div>
    </div>
  </Form>
</div>
        </div>
    );
};

export default Register;