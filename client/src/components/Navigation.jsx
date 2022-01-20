import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
          <nav className="navbar navbar-expand navbar-dark purple-1">
            <div className="container">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src=".\assets\images\logo-2.png"
              alt="I Chews You! Logo Small."
            />        
              <NavLink className="navbar-brand" to="/">
               <h1> Chews You!</h1>
              </NavLink>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                      <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/recipes">
                      Recipes
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="../container/login.js">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }

export default Navigation;