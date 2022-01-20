
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
            <h1 class="font-weight-light">Recipes</h1>
            <p>
              Page to search and save recipes. Also Randomize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;