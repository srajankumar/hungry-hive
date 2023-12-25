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
    Navigate("/home");
  };

  const closeMenu = () => {
    document
      .getElementById("menuToggle")
      .querySelector("input").checked = false;
  };

  return (
    <div>
      <nav className="fixed hidden md:flex z-30 w-full md:px-10 px-5 text-white backdrop-blur-md shadow-md">
        <Link to="/home" className="flex items-center">
          <span className="self-center text-[#ffc20d] text-2xl font-bold whitespace-nowrap ">
            <img src="/assets/logo.png" alt="logo" className="w-10" />
          </span>
        </Link>
        <div className="flex flex-wrap items-center justify-between ml-auto py-4">
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex font-bold tracking-wider p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:mt-0 md:border-0  border-gray-700">
              <li>
                <Link
                  to="/search"
                  className="block focus:text-[#ffc20d] border-2 p-1.5 border-transparent hover:border-white rounded-full hover:text-[#ffc20d] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="md:pl-10 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                >
                  About Us
                </Link>
              </li>
              <li>
                {!cookies.access_token ? (
                  <Link
                    to="/register"
                    className="md:pl-10 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                  >
                    Register
                  </Link>
                ) : (
                  <>
                    {" "}
                    <Link
                      to="add-recipes"
                      className="md:pl-10 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
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
                    className="md:pl-10 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <ul className="flex">
                      <li>
                        <Link
                          to="/my-recipes"
                          className="md:pl-10 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                        >
                          My Recipes
                        </Link>
                      </li>
                      <li>
                        <button
                          className="md:pl-10 hover:underline hover:text-red-400 hover:underline-offset-4 focus:underline focus:underline-offset-8 block py-2 rounded md:hover:bg-transparent"
                          onClick={logout}
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="fixed z-50 backdrop-blur-sm md:hidden grid">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <li>
                <Link
                  to="/home"
                  onClick={closeMenu}
                  className="text-2xl my-3 text-white focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={closeMenu}
                  className="text-2xl my-3 text-white focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  onClick={closeMenu}
                  className="text-2xl my-3 text-white focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                >
                  Search
                </Link>
              </li>

              <li>
                {!cookies.access_token ? (
                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="text-2xl my-3 text-white focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                  >
                    Register
                  </Link>
                ) : (
                  <>
                    {" "}
                    <Link
                      to="add-recipes"
                      onClick={closeMenu}
                      className="text-2xl my-3 text-white focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
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
                    onClick={closeMenu}
                    className="text-2xl my-3 text-white focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <ul className="flex flex-col">
                      <li>
                        <Link
                          to="/my-recipes"
                          onClick={closeMenu}
                          className="text-2xl my-3 text-white focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                        >
                          My Recipes
                        </Link>
                      </li>
                      <li>
                        <button
                          className="text-2xl my-3 text-white focus:underline focus:underline-offset-8 block py-2 rounded focus:text-[#ffc20d] md:hover:bg-transparent"
                          onClick={logout}
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </>
                )}
              </li>
              <img
                src="/assets/logo.png"
                alt="logo"
                className="w-20 absolute right-10 bottom-10"
              />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
