
import React from "react";

function Recipes() {
  return (
    <div className="recipes">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src=".\assets\images\recipes.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1>Recipes</h1>
            <form action="/" method="get">
              <label htmlFor="header-search">
              <span className="visually-hidden">Search Recipes</span>
              </label>
            <input
            type="text"
            id="header-search"
            placeholder="Ingredients"
            name="Search" 
            />
        <button type="submit">Chews!</button>
          </form>
          <p class="box navbar navbar-expand">
	        This box will contain the searched recipe.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;