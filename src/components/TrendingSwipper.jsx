// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingSwipperCard from "./TrendingSwipperCard";
// import IconMovie from "../assets/icon-category-movie.svg";
// import IconTv from "../assets/icon-category-tv.svg";
import movie1 from "../assets/thumbnails/112/regular/large.jpg";
import movie2 from "../assets/thumbnails/asia-in-24-days/regular/large.jpg";
import data from "../assets/local-data/data.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Styles.css";

// [
//   { "id" : 1,
//     "title": "Beyond Earth",
//     "thumbnail": {
//       "trending": {
//         "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
//         "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
//       },
//       "regular": {
//         "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
//         "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
//         "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
//       }
//     },
//     "year": 2019,
//     "category": "Movie",
//     "rating": "PG",
//     "isBookmarked": false,
//     "isTrending": true
//   }]

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function App() {
  const [itemsPerviw, setItemsPerview] = useState("3");
  const maxWidth = window.innerWidth;
  const TrendingMovies = data.filter((movie) => movie.isTrending === true);

  //   const icons = {
  //     movie: IconMovie,
  //     tv: IconTv,
  //   };
  useEffect(() => {
    if (maxWidth <= 475) {
      setItemsPerview("1");
    } else if (maxWidth <= 768) {
      setItemsPerview("1.5");
    } else {
      setItemsPerview("2.2");
    }
  }, [maxWidth]);

  return (
    <>
      <Swiper
        slidesPerView={itemsPerviw}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {TrendingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <TrendingSwipperCard
              movie={movie.thumbnail.regular.large}
              category={movie.category}
              tag={movie.rating}
              year={movie.year}
              rating={movie.rating}
              title={movie.title}
              book={movie.isBookmarked}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
