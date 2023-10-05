import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TrendingSwipperCard from "./TrendingSwipperCard";
import data from "../assets/local-data/data.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Styles.css";

export default function App() {
  const [maxWidth, setMaxWidth] = useState(window.innerWidth);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }); // Empty dependency array ensures that this effect runs once after the initial render

  useEffect(() => {
    if (maxWidth <= 475) {
      setItemsPerView(1);
    } else if (maxWidth <= 768) {
      setItemsPerView(1);
    } else {
      setItemsPerView(2);
    }
  }, [maxWidth]); // Re-run the effect whenever maxWidth changes

  const trendingMovies = data.filter((movie) => movie.isTrending === true);

  return (
    <>
      <h3 className="text-2xl font-bold mt-4 p-0">Trending</h3>
      <Swiper
        slidesPerView={itemsPerView}
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
        {trendingMovies.map((movie) => (
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
