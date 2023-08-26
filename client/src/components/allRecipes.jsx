import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import Searchbar from "./Searchbar";

import jsPDF from "jspdf";

const generatePDF = (recipe) => {
  const pdf = new jsPDF();
  const margin = 20;
  const fontSize = 12;
  let textY = 20;

  pdf.setFontSize(16);
  pdf.text(margin, textY, recipe.name);

  pdf.setFontSize(fontSize);
  const lines = pdf.splitTextToSize(
    recipe.instructions,
    pdf.internal.pageSize.width - 2 * margin
  );
  lines.forEach((line) => {
    pdf.text(margin, (textY += fontSize), line);
  });

  textY += 10; // Add some space between paragraphs

  pdf.text(margin, textY, `Cooking Time: ${recipe.cookingTime} min`);

  pdf.save(`${recipe.name}.pdf`);
};

const AllRecipes = () => {
  const userID = useGetUserID();
  const [recipe, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies] = useCookies(["access_token"]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/addRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipe();
    if (cookies.access_token) fetchSavedRecipe();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/recipes",
        { recipeID, userID },
        { headers: { authorization: cookies.access_token } }
      );
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.error(err);
    }
  };
  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      <div className="py-10 mb-10">
        <Searchbar />
      </div>
      <div>
        <h1 className="font-bold md:px-10 text-white text-2xl px-5">
          Meal Category
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipe.map((recipe) => (
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
                        <button
                          onClick={() => saveRecipe(recipe._id)}
                          disabled={isRecipeSaved(recipe._id)}
                        >
                          {isRecipeSaved(recipe._id) ? (
                            <div className="text-red-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M8.4 5.25c-2.78 0-5.15 2.08-5.15 4.78c0 1.863.872 3.431 2.028 4.73c1.153 1.295 2.64 2.382 3.983 3.292l2.319 1.57a.75.75 0 0 0 .84 0l2.319-1.57c1.344-.91 2.83-1.997 3.982-3.292c1.157-1.299 2.029-2.867 2.029-4.73c0-2.7-2.37-4.78-5.15-4.78c-1.434 0-2.695.672-3.6 1.542c-.905-.87-2.167-1.542-3.6-1.542Z"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="hover:text-red-500 transition duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M8.4 5.25c-2.78 0-5.15 2.08-5.15 4.78c0 1.863.872 3.431 2.028 4.73c1.153 1.295 2.64 2.382 3.983 3.292l2.319 1.57a.75.75 0 0 0 .84 0l2.319-1.57c1.344-.91 2.83-1.997 3.982-3.292c1.157-1.299 2.029-2.867 2.029-4.73c0-2.7-2.37-4.78-5.15-4.78c-1.434 0-2.695.672-3.6 1.542c-.905-.87-2.167-1.542-3.6-1.542Z"
                                />
                              </svg>
                            </div>
                          )}
                        </button>
                      </h2>
                      {/* <h1 className="title-font text-xl font-bold tracking-wider text-gray-100 mb-3">
                      {recipe.name}
                    </h1> */}
                      <p className="leading-relaxed mb-3">
                        {recipe.instructions}
                      </p>
                      <div className="flex items-center justify-between flex-wrap ">
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
                        <button
                          onClick={() => generatePDF(recipe)}
                          className="hover:text-white text-[#ffc20d] transition duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 16 16"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            >
                              <circle cx="4" cy="8" r="2.25" />
                              <circle cx="12" cy="12" r="2.25" />
                              <circle cx="12" cy="4" r="2.25" />
                              <path d="m6 9l4 2M6 7l4-2" />
                            </g>
                          </svg>
                        </button>
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

export default AllRecipes;
