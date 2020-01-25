import React, { useState, useEffect } from "react"
import "./App.css"

const App = () => {
  const APP_ID = "9af9f94c"
  const APP_KEY = "0c9148e2c218837a35f10b0bf4c902a5	"
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    console.log("useEffect in action")
  })

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  )
}

export default App
