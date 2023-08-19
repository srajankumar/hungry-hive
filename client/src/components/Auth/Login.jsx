import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// hook used to navigate to any pages

const auth = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default auth;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      // save the token id in localstorage

      navigate("/home");
      // navigates to home page after logging in
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
    />
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <div className="h-screen bg-[#ffffffd3] md:px-0 px-5 flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <div class="sm:w-[30rem] backdrop-blur-md shadow-2xl bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10">
          <h2 class="text-gray-900 text-2xl mb-5 font-bold title-font">
            {label}
          </h2>
          <div class="relative mb-4">
            <label htmlFor="username" class="leading-7 text-sm text-gray-900">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            class="text-white my-5 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            {label}
          </button>
          <div class="text-sm text-gray-900 mt-3">
            Do not have an account?{" "}
            <Link to="/register" className="hover:text-red-600">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
