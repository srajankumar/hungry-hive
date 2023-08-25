import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <LogIn />
    </div>
  );
};

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookies] = useCookies(["access_token"]);
  const Navigate = useNavigate();
  const [userNotFound, setUserNotFound] = useState(false); // State to track user not found

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      // if (response.data.user) {
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      // setUserNotFound(false); // Reset user not found state
      Navigate("/");
      // } else {
      //   setUserNotFound(true); // Set user not found state to true
      // }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    setUserNotFound(false); // Reset user not found state
  };

  return (
    <div>
      {userNotFound && (
        <div className="absolute flex bottom-0 items-center text-sm bg-red-500 bg-opacity-50 md:mx-10 m-5 text-white px-5 py-2 rounded-lg">
          User not found! Please check your credentials
          <button
            onClick={handleClose}
            className="text-white p-2 font-bold ml-3 rounded-lg hover:bg-black transition duration-300 hover:bg-opacity-30 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z"
              />
            </svg>
          </button>
        </div>
      )}
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
      />
    </div>
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
    <div className="bg-[#212121]">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
          <div className="w-full  rounded-lg shadow-md bg-[#272727] md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                {label}
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={onSubmit}
              >
                <div>
                  <label
                    for="username"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-bold bg-[#ffc20d] hover:bg-[#c8990c] focus:ring-2 focus:outline-none focus:ring-black rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {label}
                </button>
                <div class="text-sm text-white mt-3">
                  Do not have an account?{" "}
                  <Link
                    to="/auth"
                    className="text-[#ffc20d] hover:underline hover:underline-offset-4"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
