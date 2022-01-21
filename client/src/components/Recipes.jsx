import { QUERY_RECIPES } from '../utils/queries';
import React from "react";
import {  useQuery } from '@apollo/client'

function Recipes() {
  const { data } = useQuery(QUERY_RECIPES);

  return (
    <div className="recipes">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Recipes</h1>
            <div>
              {data}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;