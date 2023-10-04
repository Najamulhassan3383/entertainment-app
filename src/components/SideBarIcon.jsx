import PropTypes from "prop-types";

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    <img src={icon} alt="logo" />
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

SideBarIcon.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default SideBarIcon;
