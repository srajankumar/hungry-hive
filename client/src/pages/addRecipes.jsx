import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID.js";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const server = process.env.REACT_APP_SERVER_URL;

const AddRecipes = () => {
  const userID = useGetUserID();
  const navigate = useNavigate();
  const [cookies] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: [],
    imageUrl: "",
    diet: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleInstructionChange = (event, idx) => {
    const { value } = event.target;
    const instructions = [...recipe.instructions];
    instructions[idx] = value;
    setRecipe({ ...recipe, instructions });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const removeIngredient = (idx) => {
    const ingredients = [...recipe.ingredients];
    ingredients.splice(idx, 1);
    setRecipe({ ...recipe, ingredients });
  };

  const addInstruction = () => {
    setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] });
  };

  const removeInstruction = (idx) => {
    const instructions = [...recipe.instructions];
    instructions.splice(idx, 1);
    setRecipe({ ...recipe, instructions });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${server}/recipes`, recipe, {
        headers: { authorization: cookies.access_token },
      });
      alert("Recipe Added!");
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#212121] min-h-screen pt-20 md:pt-10">
      <section>
        <div className="flex flex-col items-center pt-14 px-6 py-6 mx-auto md:min-h-screen">
          <div className="w-full rounded-lg shadow-md bg-[#272727] md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
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
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Recipe Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="diet"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Diet (Veg/Non-Veg)
                  </label>
                  <select
                    name="diet"
                    id="diet"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    onChange={handleChange}
                    value={recipe.diet}
                  >
                    <option value="">Select Diet</option>
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="ingredients"
                    className="block text-sm mb-2 font-medium text-white"
                  >
                    Ingredients
                  </label>
                  {recipe.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="flex space-x-2 my-2">
                      <input
                        type="text"
                        name="ingredients"
                        className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                        value={ingredient}
                        onChange={(event) => handleIngredientChange(event, idx)}
                      />
                      {idx > 0 && (
                        <button
                          type="button"
                          onClick={() => removeIngredient(idx)}
                          className="text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A.997.997 0 0 1 7 18Z"
                            />
                            <path
                              fill="currentColor"
                              d="M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18Z"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addIngredient}
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
                    htmlFor="instructions"
                    className="block text-sm mb-2 font-medium text-white"
                  >
                    Instructions
                  </label>
                  {recipe.instructions.map((instruction, idx) => (
                    <div key={idx} className="flex space-x-2 my-2">
                      <textarea
                        rows="4"
                        name="instructions"
                        className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                        value={instruction}
                        onChange={(event) =>
                          handleInstructionChange(event, idx)
                        }
                      />
                      {idx > 0 && (
                        <button
                          type="button"
                          onClick={() => removeInstruction(idx)}
                          className="text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A.997.997 0 0 1 7 18Z"
                            />
                            <path
                              fill="currentColor"
                              d="M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18Z"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addInstruction}
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
                    htmlFor="imageUrl"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    className="sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block w-full p-2.5 bg-[#1c1c1c]"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cookingTime"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Cooking Time
                  </label>
                  <input
                    type="number"
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
