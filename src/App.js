import React, { useState, useEffect } from "react"
import Recipe from "./Recipe"
import "./App.css"

const App = () => {
  const APP_ID = "9af9f94c"
  const APP_KEY = "0c9148e2c218837a35f10b0bf4c902a5	"

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map((recipe, i) => {
        return (
          <Recipe
            key={i}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        )
      })}
    </div>
  )
}

export default App
