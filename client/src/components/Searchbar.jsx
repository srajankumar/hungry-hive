import React, { useState, useEffect } from "react";
import axios from "axios";

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
        const res = await axios.get(
          "https://hungry-hive-server.vercel.app/recipes",
          {
            params: { key: key, limit: 5 },
          }
        );

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
