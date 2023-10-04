import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import SearchBar from "./components/SearchBar";
import TrendingSwipper from "./components/TrendingSwipper";
import TrendingSwipperCard from "./components/TrendingSwipperCard";
import movieImage from "./assets/thumbnails/asia-in-24-days/regular/large.jpg";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="flex bg-darkBlue text-pureWhite">
      <div className="relative w-2/12 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-10/12 mt-10 mr-4">
        <SearchBar />
        <div className="mt-0">
          <h3 className="text-2xl font-bold mt-4 p-0">Trending</h3>
          <TrendingSwipper />
        </div>
        <div className="mt-10">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

export default App;
