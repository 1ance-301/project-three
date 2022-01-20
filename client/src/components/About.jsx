import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mr-5"
              src="\assets\images\about.jpg"
              alt="about us"
            />
          </div>
          <div class="col-lg ml-5">
            <h1>About Us:</h1><br/>
            <p>
              <h5>Andrew Banks:</h5>
              Email: <a href="mailto: {Banksandrew16@gmail.com}">Banksandrew16@gmail.com</a><br/>
              GitHub: <a href="https://github.com/Banksandrew16">https://github.com/Banksandrew16</a><br/>
              <br/>
              <h5>Lance Bontrager:</h5>
              Email: <a href="mailto: {lancyb281@gmail.com}">lancyb281@gmail.com</a><br/>
              GitHub: <a href="https://github.com/1ance-301">https://github.com/1ance-301</a><br/>
              <br/>
              <h5>William Wettering:</h5>
              Email: <a href="mailto: {wettering1337@gmail.com}">wettering1337@gmail.com</a><br/>
              GitHub: <a href="https://github.com/sirwettering">https://github.com/1ance-301</a><br/>
              <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;