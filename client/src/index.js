import React from "react";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from './cache';
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Recipes,
} from "./components";

const client = new ApolloClient({
  cache,
  uri: "http://localhost:3000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </Router>
  </ApolloProvider>,

  document.getElementById("root")
);