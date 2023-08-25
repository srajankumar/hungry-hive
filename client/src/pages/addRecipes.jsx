import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID.js";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AddRecipes = () => {
  const userID = useGetUserID();
  const navigate = useNavigate();
  const [cookies] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredients = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", recipe, {
        headers: { authorization: cookies.access_token },
      });
      alert("Recipe Added!");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="bg-[#212121] min-h-screen pt-20 md:pt-10">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
          <div className="w-full  rounded-lg shadow-md bg-[#272727] md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add Recipes
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={onSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Recipe Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    // placeholder="Oden"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="ingredients"
                    className="block text-sm mb-2 font-medium dark:text-white"
                  >
                    Ingredients
                  </label>
                  {recipe.ingredients.map((ingredient, idx) => (
                    <input
                      key={idx}
                      type="text"
                      name="ingredients"
                      className="sm:text-sm my-2 rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                      value={ingredient}
                      onChange={(event) => handleIngredientChange(event, idx)}
                    />
                  ))}
                  <button
                    onClick={addIngredients}
                    className="text-[#ffc20d]"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <label
                    htmlFor="Instructions"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instructions
                  </label>
                  <input
                    type="text"
                    name="instructions"
                    // placeholder="Oden Wouldn't Be Oden If It Wasn't Boiled"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="imageUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    // placeholder="Paste image URL"
                    name="imageUrl"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cookingTime"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Cooking Time
                  </label>
                  <input
                    type="number"
                    // placeholder="Cooking Time"
                    name="cookingTime"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-bold bg-[#ffc20d] hover:bg-[#c8990c] focus:ring-2 focus:outline-none focus:ring-black rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Add it!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddRecipes;
