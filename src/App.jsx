import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import RecipeDetails from "./RecipeDetails.jsx";

const App = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/recipes")
            .then(response => setRecipes(response.data.recipes))
            .catch(error => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<RecipeList recipes={recipes} />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
        </Router>
    );
};

const RecipeList = ({ recipes }) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recipes.map(recipe => (
            <div key={recipe.id} style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
                <img src={recipe.image} alt={recipe.name} style={{ width: "150px" }} />
                <h3><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></h3>
            </div>
        ))}
    </div>
);

export default App;
