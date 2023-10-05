import PropTypes from "prop-types";
import { RiLoginBoxLine, RiUserAddLine } from "react-icons/ri";

const SideBarIcon = ({ icon, text = "tooltip 💡", avatar = false }) => (
  <div className="sidebar-icon group">
    <img src={icon} alt="logo" />
    <div className="sidebar-tooltip group-hover:scale-100 hidden sm:block">
      {/* make a box for login, signup  */}
      {avatar ? (
        <div className="flex flex-col space-y-4 z-20">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center">
            <RiLoginBoxLine className="mr-2" />
            Sign In
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center">
            <RiUserAddLine className="mr-2" />
            Sign Up
          </button>
        </div>
      ) : (
        <span className="text-xs font-bold">{text}</span>
      )}
    </div>
  </div>
);

SideBarIcon.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string.isRequired,
  avatar: PropTypes.bool,
};

export default SideBarIcon;
