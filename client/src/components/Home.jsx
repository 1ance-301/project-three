import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src=".\assets\images\home.jpg"
              alt="I Chews You! Homepage Image."
            />
          </div>
          <div class="col-lg-5">
            <h1>Upcoming Dinner Party? Big Date? Can't Decide What to Cook?</h1>
            <h2 class="font-weight-light">
            'I Chews You!' is your answer. Allow us to generate a random recipe that will impress your guests.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;