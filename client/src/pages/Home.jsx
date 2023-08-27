import Hero from "../components/Home/Hero";
import Cards from "../components/allRecipes";

function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <Hero />
        <div className="bg-[#212121] min-h-screen">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Home;
