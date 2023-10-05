import TrendingSwipperCard from "./TrendingSwipperCard";
import HeroSection from "./HeroSection";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import TrendingSwipper from "./TrendingSwipper";
function Home() {
  return (
    <>
      <div className="mt-0">
        <TrendingSwipper />
      </div>
      <div className="mt-10 mr-5">
        <HeroSection />
      </div>
    </>
  );
}

export default Home;
