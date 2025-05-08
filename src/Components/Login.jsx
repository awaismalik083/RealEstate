// src/components/Login.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { asset } from "../assets/asset";

const Login = () => {
  const [eye, seteye] = useState(false);
  const eyehandle = () => seteye(!eye);

  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-[#EFEEEA] font-sans relative overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-white/20 rounded-full blur-lg opacity-30"></div>

        <div className="w-full max-w-md z-10 mt-10 bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/30 shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-2 text-[#273F4F]">Welcome back!</h2>
          <p className="mb-6 text-[#273F4F] text-sm">Enter your Credentials to access your account</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#000000]">Email address</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white/80 backdrop-blur focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                {eye ? (
                  <img
                    onClick={eyehandle}
                    className="w-4 cursor-pointer absolute right-0 mr-13 mt-16 z-20"
                    src={asset.eyeopen}
                    alt=""
                  />
                ) : (
                  <img
                    onClick={eyehandle}
                    className="w-4 cursor-pointer absolute right-0 mr-13 mt-16 z-20"
                    src={asset.eyeclose}
                    alt=""
                  />
                )}
                <label className="block text-sm font-medium text-[#000000]">Password</label>
                <a className="text-sm text-[#273F4F] hover:underline" href="#">
                  Forgot password
                </a>
              </div>
              <input
                type={eye ? "text" : "password"}
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm bg-white/80 backdrop-blur focus:outline-none focus:ring focus:ring-green-300"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-[#273F4F]">Remember me for 30 days</label>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-rose-600 text-white py-2 rounded-md hover:bg-rose-800"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-400" />
            <span className="px-2 text-sm text-[#273F4F]">or</span>
            <hr className="flex-grow border-gray-400" />
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 cursor-pointer flex items-center justify-center px-4 py-2 border rounded-md bg-white/80 hover:bg-white">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
            <button className="flex-1 flex cursor-pointer items-center justify-center px-3 py-2 border rounded-md bg-white/80 hover:bg-white">
              <img src={asset.apple} alt="Apple" className="w-5 h-5 mr-2" />
              Sign in with Apple
            </button>
          </div>

          <p className="text-sm text-center text-[#273F4F] mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-[#362f34] cursor-pointer hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
