import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import Modal from "react-modal";

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

const MyRecipes = () => {
  const userID = useGetUserID();
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies] = useCookies(["access_token"]);

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

  // For modal

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  // Function to open the modal and set the selected recipe
  function openModal(recipe) {
    setSelectedRecipe(recipe);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedRecipe(null);
    setIsOpen(false);
  }

  return (
    <div className="bg-[#212121] min-h-screen pt-20">
      <h1 className="font-bold md:px-10 pt-10 text-white text-2xl px-5">
        Saved Recipes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-5">
        {savedRecipes.map((recipe) => (
          <div key={recipe._id}>
            <button onClick={() => openModal(recipe)}>
              <section className="body-font text-gray-400">
                <div className="container flex justify-center md:px-5 pb-5">
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
                          <p className="leading-relaxed text-left mb-5">
                            {recipe.description.substring(0, 135)}. . .
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Recipe Modal"
        className="ReactModal__Content relative h-[90vh] w-[90vw] bg-[#272727] flex flex-col"
        overlayClassName="ReactModal__Overlay bg-[#00000080] backdrop-blur-sm"
      >
        {selectedRecipe && (
          <section
            className="body-font flex-grow text-gray-400 overflow-y-auto"
            key={selectedRecipe._id}
          >
            <div className="container flex justify-center">
              <div className="flex flex-wrap">
                <div>
                  <div className="h-full bg-[#272727] bg-opacity-70 rounded-lg overflow-hidden">
                    <button
                      onClick={closeModal}
                      className="absolute bg-[#272727] md:p-3 p-2 text-[#ffc20d] hover:text-[#e8b416] rounded-md m-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
                        />
                      </svg>
                    </button>
                    <div className="absolute right-0 bg-[#272727] md:p-3 p-2 text-[#ffc20d] hover:text-[#e8b416] rounded-md m-5">
                      {selectedRecipe.diet === "veg" ? (
                        <div className="flex justify-center items-center flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            className="text-green-500"
                          >
                            <path
                              fill="currentColor"
                              d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex justify-center items-center flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            className="text-red-500"
                          >
                            <path
                              fill="currentColor"
                              d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <img
                      className="lg:h-96 h-60 w-full object-cover object-center"
                      src={selectedRecipe.imageUrl}
                      alt={selectedRecipe.name}
                    />
                    <div className="p-6  bg-[#272727]">
                      <div className="justify-between items-center py-5 tracking-widest flex">
                        <h1 className="title-font text-3xl text-center w-full font-bold tracking-wider text-gray-100">
                          {selectedRecipe.name}
                        </h1>
                      </div>
                      <div className="grid grid-cols-3 gap-5 py-5 md:pb-10 items-center justify-between flex-wrap ">
                        <div className="flex justify-center items-center flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            className="text-red-500"
                          >
                            <path
                              fill="currentColor"
                              d="M8.4 5.25c-2.78 0-5.15 2.08-5.15 4.78c0 1.863.872 3.431 2.028 4.73c1.153 1.295 2.64 2.382 3.983 3.292l2.319 1.57a.75.75 0 0 0 .84 0l2.319-1.57c1.344-.91 2.83-1.997 3.982-3.292c1.157-1.299 2.029-2.867 2.029-4.73c0-2.7-2.37-4.78-5.15-4.78c-1.434 0-2.695.672-3.6 1.542c-.905-.87-2.167-1.542-3.6-1.542Z"
                            />
                          </svg>
                          Saved
                        </div>

                        <div className="flex justify-center items-center flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="27"
                            className="my-1.5 text-[#ffc20d]"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95l-1.41 1.41L9 10.41z"
                            />
                          </svg>
                          {selectedRecipe.cookingTime} min
                        </div>
                        <button
                          onClick={() => generatePDF(selectedRecipe)}
                          className="flex justify-center items-center flex-col"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 16 16"
                            className="hover:text-white my-1.5 text-[#ffc20d] transition duration-300"
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
                          Share
                        </button>
                      </div>

                      <div className="leading-relaxed mb-5">
                        <h3 className="text-gray-100 mb-2">Description</h3>
                        {selectedRecipe.description}
                      </div>

                      <div className="leading-relaxed">
                        <h3 className="text-gray-100 mb-2">Instructions</h3>
                        {selectedRecipe.instructions.map(
                          (instruction, index) => (
                            <div className="pb-5">
                              <span key={index}>
                                {instruction}
                                <br />
                              </span>
                            </div>
                          )
                        )}
                      </div>

                      <div className="mb-5">
                        <h3 className="text-gray-100 mb-2">Ingredients</h3>
                        <ul className="list-disc list-inside">
                          {selectedRecipe.ingredients.map(
                            (ingredient, index) => (
                              <li key={index} className="text-gray-400">
                                {ingredient}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Modal>
    </div>
  );
};

export default MyRecipes;
