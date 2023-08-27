import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const Navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    Navigate("/");
  };
  return (
    <div>
      <nav className="fixed z-50 w-full md:px-10 px-5 text-white backdrop-blur-md shadow-md">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-[#ffc20d] text-2xl font-bold whitespace-nowrap ">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex font-bold tracking-wider p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  border-gray-700">
              <li></li>
              <li>
                {!cookies.access_token ? (
                  <Link
                    to="/auth"
                    className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 pr-4 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                  >
                    Register
                  </Link>
                ) : (
                  <>
                    {" "}
                    <Link
                      to="add-recipes"
                      className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                    >
                      Add Recipes
                    </Link>
                  </>
                )}
              </li>
              <li>
                {!cookies.access_token ? (
                  <Link
                    to="/login"
                    className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 pr-4 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <ul className="flex">
                      <li>
                        <Link
                          to="/my-recipes"
                          className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pr-4 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                        >
                          My Recipes
                        </Link>
                      </li>
                      <li>
                        <button
                          className="hover:underline hover:text-red-400 hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 pr-4 rounded md:hover:bg-transparent"
                          onClick={logout}
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </>
                )}
               </li>
              
              <li>
                <Link
                  to="/about-us"
                  className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 pl-3 pr-4 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};


              {/* <li>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                        href="/"
                        target="_#"
                        className="block px-4 py-2 hover:bg-black"
                      >
                        Source Code
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/srajankumar"
                        target="#"
                        className="block px-4 py-2 hover:bg-black"
                      >
                        @srajankumar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/TejasNayak42"
                        target="#"
                        className="block px-4 py-2 hover:bg-black"
                      >
                        @TejasNayak42
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
            

export default Navbar;
