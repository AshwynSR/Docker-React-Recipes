import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/recipes/${id}`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error("Error fetching recipe details:", error));
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={{ width: "300px" }} />
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetails;
