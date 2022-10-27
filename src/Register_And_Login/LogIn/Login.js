import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Contexts/Context";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { loginWithGitHub, loginWithGoogle, loginUser } =
    useContext(AuthContext);
  const gitHubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const handleGitHubSignIn = () => {
    loginWithGitHub(gitHubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogInSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("You  Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <Form
          onSubmit={handleLogInSubmit}
          className="hero-content flex-col lg:flex-row-reverse  shadow-2xl rounded"
        >
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-900">
          <div className="text-center mx-auto my-3">
            <div className="">
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-black text-white px-6 my-2"
              >
                <FaGoogle className="text-2xl mr-2"></FaGoogle> log in width
                google
              </button>
              <button
                onClick={handleGitHubSignIn}
                className="btn bg-black text-white px-6 my-2"
              >
                <FaGithub className="text-2xl mr-2"></FaGithub> log in width
                github
              </button>
            </div>
          </div>
          <div className="flex items-center w-8/12 mx-auto mb-0 my-4">
		     <hr className="w-full dark:text-gray-400"/>
		    <p className="px-3 text-white">OR</p>
		    <hr className="w-full dark:text-gray-400"/>
	     </div>        
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover text-white"
                  >
                    No account yet? Registration
                  </Link>
                </label>
              </div>
              <p className="text-red-600">{error}</p>
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
