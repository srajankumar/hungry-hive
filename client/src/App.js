import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddRecipes from "./pages/addRecipes";
import MyRecipes from "./pages/myRecipes";
import Home from "./pages/Home";


import Footer from "./components/Footer";
import { Login } from "./components/Auth/Login";
import Search from "./pages/Search";
import { Switch } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";

import { Register } from "./components/Auth/Register";
import AboutUs from "./pages/AboutUs"; 


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs/>}/>

          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/add-recipes" element={<AddRecipes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:recipeName" component={<RecipeDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
