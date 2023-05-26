import React, { useContext, useEffect, useState } from "react";
import { Authcontect } from "../providers/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.pathname || "/";
  // console.log(from);
  const [errorMgs, setErrorMgs] = useState("");
  const { signIn, signGoogle, signGithub, user } = useContext(Authcontect);
  // console.log(user);

  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMgs("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        form.reset();
        // navigate(from);
        // console.log(from);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
        let errrormessage = error.code.split("auth/")[1];
        setErrorMgs(errrormessage);
      });
  };

  const handleGoogleLogin = () => {
    signGoogle()
      .then((result) => {
        const loggeduser = result.user;
        // console.log(loggeduser);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitLogin = () => {
    signGithub()
      .then((result) => {
        const loggeduser = result.user;
        // console.log(loggeduser);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/2YHpXtD/slider-2.jpg')] bg-cover bg-fixed">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-amber-500">
              Please <span className="font-akaya text-5xl">Login</span>
            </h1>
            <p className="text-stone-300">
              to get access our special features.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <div className="errorMessage">
                  <p className="text-red-500">{errorMgs}</p>
                </div>
                <label className="label">
                  <p>
                    Dont have account?{" "}
                    <Link
                      to="/register"
                      className=" text-lg font-semibold text-blue-700"
                    >
                      Register
                    </Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-3">
                <div className="socialLogin mb-2 flex flex-col md:flex-row justify-between ">
                  <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black hover:text-white hover:bg-sky-600 rounded-md shadow-md w-auto border-sky-600 hover:border-sky-600 mb-2 md:mb-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p className="ms-1">Google login</p>
                  </button>
                  <button
                    onClick={handleGitLogin}
                    className="btn bg-white text-black hover:text-white hover:bg-lime-950 rounded-md shadow-md w-auto border-green-600 hover:border-green-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                    <p className="ms-1">GitHub Login</p>
                  </button>
                </div>
                <button className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-l from-amber-600 to-amber-500 hover:bg-gradient-to-r">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
