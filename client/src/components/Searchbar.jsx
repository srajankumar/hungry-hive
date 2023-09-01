import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";

const Searchbar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchResult([]);
          return;
        }
        const res = await axios.get("http://localhost:3001/recipes", {
          params: { key: key, limit: 5 },
        });

        // Filter search results based on first letters of recipe names
        const filteredResults = res.data.filter((recipe) =>
          recipe.name.toLowerCase().startsWith(key.toLowerCase())
        );

        setSearchResult(filteredResults);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    search();
  }, [key]);

  // Clear search results when backspace is pressed and input is empty
  const handleKeyUp = (e) => {
    if (e.key === "Backspace" && !key.trim()) {
      setSearchResult([]);
    }
  };

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

    textY += 15; // Add space before the Ingredients section

    pdf.setFontSize(14); // Set font size for Ingredients section
    pdf.text(margin, textY, "Ingredients:");
    pdf.setFontSize(fontSize);
    // Loop through the ingredients and add them to the PDF
    recipe.ingredients.forEach((ingredient) => {
      pdf.text(margin, (textY += fontSize), `- ${ingredient}`);
    });

    pdf.save(`${recipe.name}.pdf`);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className="flex justify-center">
            <input
              type="text"
              className="form-control mb-10 sm:text-sm rounded-lg focus:ring-[#ffc20d] text-white border-0 focus:border-primary-600 block md:w-1/2 w-full mx-5 px-5 py-3 bg-[#1c1c1c]"
              placeholder="Search for your favourite recipes"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              onKeyUp={handleKeyUp}
            />
          </div>
          {searchResult && searchResult.length > 0 && (
            <div className="search-result">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResult.map((recipe) => (
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
                              <div className="my-5">
                                <h3 className="text-gray-100 mb-2">
                                  Ingredients
                                </h3>
                                <ul className="list-disc list-inside">
                                  {recipe.ingredients.map(
                                    (ingredient, index) => (
                                      <li key={index} className="text-gray-400">
                                        {ingredient}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
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
                    </div>{" "}
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
