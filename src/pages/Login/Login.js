import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <>
      <div class="p-20 md:h-[95vh] h-auto bg-gray-200">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-center">
          <div class="content text-3xl text-center md:text-left">
            <h1 class="text-5xl text-blue-500 font-bold">facebook</h1>
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div class="container mx-auto flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              class="shadow-lg min-w-[360px] p-4 flex flex-col bg-white rounded-lg"
            >
              <input
                type="text"
                placeholder="Your name"
                name="name"
                onChange={handleChange}
                class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email "
                name="email"
                onChange={handleChange}
                class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-blue-500"
              />
              <button class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
                Login
              </button>
              <a class="text-blue-400 text-center my-2">Forgot Pasword?</a>
              <hr />
              <button
                class="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg"
                disabled
              >
                Create New Account
              </button>
            </form>
            <p class="text-center text-sm my-4">
              <span class="font-semibold text-center w-full">
                Create a Page
              </span>{" "}
              for a celebrity, band or business
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
