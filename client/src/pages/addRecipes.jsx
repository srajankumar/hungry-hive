import React, { useState } from "react";
import axios from "axios"
import { useGetUserID } from "../hooks/useGetUserID.js";
import {useNavigate} from "react-router-dom"
import {useCookies} from "react-cookie"

const AddRecipes = () => {
  const userID= useGetUserID()
  const navigate= useNavigate()
  const [cookies,]= useCookies(["access_token"])
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
  const onSubmit = async(event)=>{
    event.preventDefault()
    try{
      await axios.post("http://localhost:3001/recipes", recipe,{headers:{authorization:cookies.access_token}})
      alert("Recipe Added!")
      navigate("/")
    }catch(err){
      console.error(err)
    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add Recipes
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Steak"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="ingredients"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ingredients
                </label>
                {recipe.ingredients.map((ingredient, idx) => (
                  <input
                    key={idx}
                    type="text"
                    name="ingredients"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={ingredient}
                    onChange={(event) => handleIngredientChange(event, idx)}
                  />
                ))}
                <button onClick={addIngredients} type="button">Add Ingredient</button>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="imageUrl"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image Url
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  name="cookingTime"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add it !
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddRecipes;
