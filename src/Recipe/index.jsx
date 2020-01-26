import React from "react"

const Recipe = ({ title, image, calories }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{calories}</p>
      <img alt="food" src={image} />
    </div>
  )
}
export default Recipe
