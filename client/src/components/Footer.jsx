import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-1 purple-1 fixed-bottom">
        <div class="container">
        <div class="footimg">
        <img
              class="img-fluid"
              src=".\assets\images\logo-3.png"
              alt="I Chews You! Logo Small."
            /> 
        </div>
        <div>
          <p class="text-center green-1">
            Copyright &copy; I Chews You! 2022
          </p>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;