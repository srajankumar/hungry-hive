import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios or your preferred HTTP library

const RecipeDetail = () => {
  const { recipeName } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null); // State to hold recipe details

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes?name=${encodeURIComponent(recipeName)}`
        );
        if (response.data.length > 0) {
          setRecipeDetails(response.data[0]); // Assuming response.data contains an array of recipes
        } else {
          console.log("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [recipeName]);

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Recipe Detail Page</h1>
      <p>Recipe Name: {recipeDetails.name}</p>
      <p>Instructions: {recipeDetails.instructions}</p>
      {/* Display other recipe details from recipeDetails */}
    </div>
  );
};

export default RecipeDetail;
