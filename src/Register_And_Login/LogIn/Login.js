import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/Context';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
  const {loginWithGitHub,loginWithGoogle,loginUser} = useContext(AuthContext)
  const gitHubProvider = new GithubAuthProvider()
  const googleProvider = new GoogleAuthProvider()
  const handleGitHubSignIn = () => {
     loginWithGitHub(gitHubProvider)
     .then(result => {
       const user = result.user;
       console.log(user);
     })
     .catch(error => {
      console.error(error)
     })
  }

  const handleGoogleSignIn = () =>  {

    loginWithGoogle(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
     console.error(error)
    })

  }


  const handleLogInSubmit = (event) => {

    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
      
    loginUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset()
    })
    .catch(error => {
     console.error(error)
    })

  }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <Form onSubmit={handleLogInSubmit} className="hero-content flex-col lg:flex-row-reverse bg-slate-300 shadow-2xl rounded">
    <div className="text-center lg:text-left">
    <div className="">
     <button onClick={handleGoogleSignIn} className='btn bg-black text-white px-6 my-2'> <FaGoogle className='text-2xl mr-2'></FaGoogle> log in width google</button>
     <button onClick={handleGitHubSignIn} className='btn bg-black text-white px-6 my-2'> <FaGithub className='text-2xl mr-2'></FaGithub> log in width github</button>
    </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">No account yet? Registration</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
       
        </div>
      </div>
    </div>
  </Form>
</div>
        </div>
    );
};

export default Login;