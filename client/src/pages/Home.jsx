// import Background from "../components/Background";
import Hero from "../components/Home/Hero";
// import Search from "../components/Home/Search";
// import Toast from "../components/Home/Toast";
import Cards from "../components/allRecipes";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <div className="bg-green-500 flex">
        <video className="absolute" autoPlay loop muted>
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute flex drop-shadow-lg shadow-black bg-[#00000010] flex-col justify-center items-center text-white w-full h-screen px-5 z-50">
          <div className="md:text-5xl sm:text-4xl text-[1.7rem] drop-shadow-lg shadow-black py-3">
            <div className="drop-shadow-lg shadow-black main-heading">
              Hungry Hive
            </div>
          </div>
          <div className="md:text-2xl sm:text-xl text-sm text-center drop-shadow-lg shadow-black tracking-wider font-semibold">
            <div className="drop-shadow-lg shadow-black">
              Your Ultimate Recipe Destination for Foodie Adventures!
            </div>
          </div>

          <Link
            to="/login"
            className="bg-red-500 mt-4 hover:bg-red-600 main-heading px-5 py-2 text-lg rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div> */}

      <div>
        <Hero />
        <div className="w-full h-52 ">
          <span className="md:text-7xl text-4xl bg-[#0000006a] flex justify-center items-center w-full h-full main-heading text-green-400 drop-shadow-lg">
            Vegetarian
          </span>
        </div>
        <div className="bg-white">
          <Cards />
        </div>
        <div className="w-full h-52 ">
          <span className="md:text-7xl text-4xl bg-[#0000006a] flex justify-center items-center w-full h-full main-heading text-red-400 drop-shadow-lg">
            Non-Vegetarian
          </span>
        </div>
        <div className="bg-white">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Home;
