import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const Navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await axios.post("https://hungry-hive.onrender.com/auth/register", {
        email,
        username,
        password,
      });
      alert("Registration Completed! Login to continue");
      Navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      email={email}
      setEmail={setEmail}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword} // Pass confirm password state
      setConfirmPassword={setConfirmPassword} // Pass setConfirmPassword function
      label="Register"
      onSubmit={onSubmit}
    />
  );
};

const Form = ({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  confirmPassword, // Receive confirm password state
  setConfirmPassword, // Receive setConfirmPassword function
  label,
  onSubmit,
}) => {
  return (
    <div className="bg-[#212121]">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto h-screen lg:py-0">
          <div className="w-full  rounded-lg shadow-md bg-[#272727] md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                {label}
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={onSubmit}
              >
                <div>
                  <label for="email" className="block mb-2 text-sm text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="username"
                    className="text-white block mb-2 text-sm font-mediumtext-white"
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
                <div>
                  <label
                    htmlFor="confirmPassword" // Use htmlFor instead of "for"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    required
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-bold bg-[#ffc20d] hover:bg-[#c8990c] focus:ring-2 focus:outline-none focus:ring-black rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {label}
                </button>
                <div class="text-sm text-white mt-3">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#ffc20d] hover:underline hover:underline-offset-4"
                  >
                    Login
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
