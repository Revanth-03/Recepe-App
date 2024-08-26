function Card({ recipes }) {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div className="main-container" key={index}>
          <div className="left-container">
            <img src={recipe.recipe.image} />
          </div>
          <div className="right-container">
            <p>{recipe.recipe.label}</p>
            <button>See More...</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
