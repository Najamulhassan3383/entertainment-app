import PropTypes from "prop-types";
import play from "../assets/icon-play.svg";
import bookmarkFilled from "../assets/icon-nav-bookmark.svg";
import bookmark from "../assets/icon-bookmark-empty.svg";
import tv from "../assets/icon-category-tv-series.svg";
import movieicon from "../assets/icon-category-movie.svg";

function TrendingSwipperCard({ movie, year, category, rating, title, book }) {
  const logo = category == "Movie" ? movieicon : tv;
  const divStyle = {
    backgroundImage: `url(${movie})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const bookmark1 = book ? bookmarkFilled : bookmark;

  return (
    <div
      className="text-white max-w-[500px] min-h-[250px] relative rounded-xl overflow-hidden group"
      style={divStyle}
    >
      {/* <img className="w-full h-full" src={img} alt="thumbnail" /> */}
      <div className="absolute top-0 right-0 p-4 z-10">
        <img
          className="w-6 h-6 hover:opacity-100 opacity-50"
          src={bookmark1}
          alt="bookmark"
        />
      </div>

      <div className="absolute bottom-0 left-0 p-4 w-full">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-start mb-2">
            <span>{year}</span>
            <div className="flex items-center justify-center px-2 py-1 text-xs  rounded-md">
              <img className="mr-2 h-4" src={logo} alt="kuch nahi" />
              <span className="mr-1">{category}</span>
              <span className="mr-1">|</span>
              <span>{rating}</span>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-lg font-bold">{title}</span>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group hover:opacity-100">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="h-12 hidden group-hover:flex" src={play} alt="play" />
        </div>
      </div>
    </div>
  );
}

TrendingSwipperCard.propTypes = {
  img: PropTypes.string.isRequired,
  category: PropTypes.string,
  tag: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TrendingSwipperCard;
