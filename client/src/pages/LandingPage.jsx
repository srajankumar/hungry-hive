// import Background from "../components/Background";
import Hero from "../components/Home/Hero";
// import Search from "../components/Home/Search";
// import Toast from "../components/Home/Toast";
import Cards from "../components/allRecipes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Homee from "../pages/Home";
function Home() {
  return (
    <div>
      <div className="fixed flex z-50">
        <video autoPlay loop muted>
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="fixed flex z-40">
        <img src="/assets/heroM.jpg" className="hero-image" alt="backgound" />
      </div>
      <div>
        <div className="flex backdrop-blur-sm sm:backdrop-blur-0 drop-shadow-lg shadow-black bg-[#00000010] flex-col justify-center items-center text-white w-screen h-screen px-5 absolute z-50">
          <div className="md:text-5xl text-4xl drop-shadow-lg shadow-black py-3">
            <div className="drop-shadow-lg shadow-black main-heading">
              Hungry Hive
            </div>
          </div>
          <div className="md:text-2xl text-lg text-center drop-shadow-lg shadow-black tracking-wider font-semibold">
            <div className="drop-shadow-lg shadow-black">
              Your Ultimate Recipe Destination for Foodie Adventures!
            </div>
          </div>

          <Link
            to="/login"
            className="bg-red-500 md:mt-4 mt-5 hover:bg-red-600 main-heading px-5 py-2 md:text-lg rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
