import React, { useState } from "react";

const AddRecipes = () => {
  const [recipe,setRecipe]= useState({
    name:"",
    Ingredients:[],
    Instructions:"",
    ImageUrl:"",
    CookingTime:0,
    userOwner:0,
  })
  const handleChange=(event)=>{
    const {name,value}=event.target
    setRecipe({...recipe,[name]:value})
  }

  const handleIngredientChange=(event,idx)=>{
    const {value}=event.target
    const Ingredients=recipe.Ingredients
    Ingredients[idx]=value
    setRecipe({...recipe,Ingredients})
  }
  const addIngredients=()=>{

    setRecipe({...recipe,Ingredients:[...recipe.Ingredients,""]})
  }
  console.log("recipe")
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add Recipes
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Steak"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="Description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="Ingredients"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ingredients
                </label>
                {recipe.Ingredients.map((Ingredients,idx)=>(
                  <input
                  key={idx}
                  type="text"
                  name="Ingredients"
                  id="Ingredients"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={Ingredients}
                  onChange={(event)=>handleIngredientChange(event,idx)}
                />
                ))}
                <button  onClick={addIngredients}>Add Ingredient</button>
                
              </div>
              <div>
                <label
                  htmlFor="Instruction"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Instruction
                </label>
                <input
                  type="text"
                  name="Instruction"
                  id="Instruction"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="ImageUrl"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image Url
                </label>
                <input
                  type="text"
                  name="Image Url"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="Cooking Time"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cooking Time
                </label>
                <input
                  type="number"
                  name="Cooking Time"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
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
  )
  
};

export default AddRecipes;
