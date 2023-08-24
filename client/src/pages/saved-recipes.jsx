import React from "react";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
const MyRecipes = () => {
  const userID = useGetUserID();
  const [savedRecipes, setSavedRecipes] = useState([]);
  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/myRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSavedRecipe();
  }, [userID]);

  return (
    <div>
      {savedRecipes.map((recipe) => (
        <section className="body-font text-gray-400" key={recipe._id}>
          <div className="container md:px-10 px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <Tilt>
                  <div className="h-full hover:shadow-2xl bg-black bg-opacity-70 hover:shadow-zinc-700 shadow-white transition duration-300 shadow-sm border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={recipe.imageUrl}
                      alt={recipe.name}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {recipe.cookingTime} (minutes)
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-100 mb-3">
                        {recipe.name}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {recipe.instructions}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="/"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          View Recipe
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MyRecipes;
