import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed z-50 w-full text-green-100 backdrop-blur-sm shadow-md">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              className="mr-3"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98z"
              />
              <path
                fill="currentColor"
                d="M8.5 10.99c-1.42 0-3.77.46-4.88 2.01h9.77c-1.12-1.55-3.47-2.01-4.89-2.01z"
                opacity=".3"
              />
              <path
                fill="currentColor"
                d="M8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01H3.62zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z"
              />
            </svg>
            <span className="self-center text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-orange-300 text-2xl font-bold whitespace-nowrap ">
              Hungry Hive
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  border-gray-700">
              <li>
                <Link
                  to="/my-recipes"
                  className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 pr-4 rounded hover:text-gray-300 md:hover:bg-transparent"
                >
                  My Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="add-recipes"
                  className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 pr-4 rounded hover:text-gray-300 md:hover:bg-transparent"
                >
                  Add Recipes
                </Link>
              </li>
              <li>
                <a
                  href="/cred"
                  className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 pr-4 rounded hover:text-gray-300 md:hover:bg-transparent"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 pr-4 rounded hover:text-gray-300 md:hover:bg-transparent"
                >
                  Log In
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full  pl-3 pr-4 rounded  md:border-0 md:p-0 my-2 md:w-auto hover:text-gray-300 focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"
                    />
                  </svg>
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-gray-900 divide-y  rounded-lg shadow w-44 divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="block px-4 py-2 hover:bg-black"
                      >
                        Source Code
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/srajankumar"
                        target="_blank"
                        className="block px-4 py-2 hover:bg-black"
                      >
                        @srajankumar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/TejasNayak42"
                        target="_blank"
                        className="block px-4 py-2 hover:bg-black"
                      >
                        @TejasNayak42
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
