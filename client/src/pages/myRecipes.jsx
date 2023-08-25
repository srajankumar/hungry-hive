import React from "react";
// import Tilt from "react-parallax-tilt";
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
    <div className="bg-[#212121] min-h-screen pt-20">
      <h1 className="font-bold md:px-10 pt-10 text-white text-2xl px-5">
        Saved Recipes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedRecipes.map((recipe) => (
          <section className="body-font text-gray-400" key={recipe._id}>
            <div className="container flex justify-center md:px-10 px-5 py-10 ">
              <div className="flex flex-wrap -m-4">
                <div className="p-4">
                  <div className="h-full bg-[#272727] bg-opacity-70 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 h-36 w-full object-cover object-center"
                      src={recipe.imageUrl}
                      alt={recipe.name}
                    />
                    <div className="p-6">
                      <h2 className="justify-between items-center mb-3 tracking-widest flex text-xs title-font font-medium text-gray-400">
                        <h1 className="title-font text-xl font-bold tracking-wider text-gray-100">
                          {recipe.name}
                        </h1>
                      </h2>
                      {/* <h1 className="title-font text-xl font-bold tracking-wider text-gray-100 mb-3">
                    {recipe.name}
                  </h1> */}
                      <p className="leading-relaxed mb-3">
                        {recipe.instructions}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <div className="inline-flex items-center md:mb-2 lg:mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            className="mr-2 text-[#ffc20d]"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95l-1.41 1.41L9 10.41z"
                            />
                          </svg>
                          {recipe.cookingTime} min
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
