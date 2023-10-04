import React, { useState } from "react";
import movie1 from "../assets/thumbnails/112/regular/medium.jpg";
import logo from "../assets/icon-category-movie.svg";
import BookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import BookmarkFilled from "../assets/icon-bookmark-full.svg";
import playButton from "../assets/icon-play.svg";
import moviesLogo from "../assets/icon-category-movie.svg";
import tvShowsLogo from "../assets/icon-category-tv-series.svg";
import PropTypes from "prop-types";

function Card({ title, year, category, rating, img }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col justify-between h-full bg-darkBluen group relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-white max-w-[250px] min-h-[180px] relative rounded-xl overflow-hidden">
        <img className="w-full h-full" src={img} alt="thumbnail" />

        <div className="absolute top-4 right-4 z-10 flex items-center justify-center h-10 w-10 rounded-full bg-black opacity-50 hover:bg-white group">
          <img
            className={`w-5 h-5 text-red`}
            src={BookmarkEmpty}
            alt="bookmark"
          />
        </div>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100">
            <img className="h-12" src={playButton} alt="play" />
          </div>
        )}
      </div>
      <div className="flex justify-start mb">
        <span>{year}</span>
        <div className="flex items-center justify-center px-2 py-1 text-xs rounded-md">
          <img
            className="mr-2 h-4"
            src={category == "Movie" ? moviesLogo : tvShowsLogo}
            alt="kuch nahi"
          />
          <span className="mr-1">|</span>
          <span className="mr-1">{category}</span>
          <span className="mr-1">|</span>
          <span>{rating}</span>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-lg font-bold">{title}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  isBookmarked: PropTypes.bool,
  title: PropTypes.string,
  year: PropTypes.number,
  category: PropTypes.string,
  rating: PropTypes.string,
  img: PropTypes.string,
};
