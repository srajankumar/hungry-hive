import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
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
  const [user, setUser] = useState(null); // Add this line to store the user object

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      setUser(response.data.user); // Store the user object
      Navigate("/");
    } catch (err) {
      console.error(err);
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
    <div className="bg-[#212121]">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
          <div className="w-full  rounded-lg shadow-md bg-[#272727] md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
