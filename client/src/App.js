import Navbar from "./components/Navbar";
import CreateRecipe from "./pages/create-recipes";
import SavedRecipes from "./pages/saved-recipes";
import Auth from "./pages/auth";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path="/auth" element={<Auth />}></Route> */}
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route
              exact
              path="/create-recipe"
              element={<CreateRecipe />}
            ></Route>
            <Route
              exact
              path="/saved-recipes"
              element={<SavedRecipes />}
            ></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
