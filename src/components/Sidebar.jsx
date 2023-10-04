import SideBarIcon from "./SideBarIcon";
import logo from "../assets/logo.svg";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import series from "../assets/icon-nav-tv-series.svg";
import avatar from "../assets/image-avatar.png";

function Sidebar() {
  return (
    <div className="absolute bg-semiDarkBlue top-12 rounded-xl left-12 h-5/6 w-20  flex flex-col items-center justify-between bg-white border-r border-gray-200">
      <SideBarIcon icon={logo} text="Home" />
      <div>
        <SideBarIcon icon={home} text="Home" />
        <SideBarIcon icon={movies} text="Movies" />
        <SideBarIcon icon={series} text="Series" />
      </div>
      <div>
        <SideBarIcon icon={avatar} text="Avatar" />
      </div>
    </div>
  );
}
// const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
