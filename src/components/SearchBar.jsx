import SideBarIcon from "./SideBarIcon";
import search from "../assets/icon-search.svg";

function SearchBar() {
  return (
    <div className="flex items-center  justify-between w-full h-14 bg-transparent rounded-lg md:-mr-4">
      <div className="flex items-center justify-center w-14 h-14">
        <SideBarIcon icon={search} />
      </div>
      <input
        className="w-full h-full px-4 text-sm text-gray-500 bg-transparent outline-none focus:border-b-2"
        type="text"
        placeholder="Search for a movie, tv show......"
      />
    </div>
  );
}

export default SearchBar;
