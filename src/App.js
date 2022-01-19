import React from "react";
import React, { useState } from "react";
const [isAuthenticated, userHasAuthenticated] = useState(false);

{isAuthenticated ? (
    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
  ) : (
    <>
      <LinkContainer to="/signup">
        <Nav.Link>Signup</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    </>
  )}