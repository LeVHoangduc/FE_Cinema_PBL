/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import Button, { OutlineButton } from "../button/button";
// import Modal, { ModalContent } from "../modal/Modal";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";

import "./hero-slide.scss";

import bg from "../../assets/images/zyro-image.png";
import { useHistory } from "react-router-dom";
const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = {
        page: 1,
      };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 4));
        // console.log(response);
      } catch {
        console.log("error useEffect");
      }
    };
    getMovies();
  }, []);

  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
  };

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        <SwiperButtonNext>
          <box-icon name="right-arrow-alt"></box-icon>
          <img src={bg} />
        </SwiperButtonNext>
        {movieItems.map((movie, index) => (
          <SwiperSlide key={index}>
            {(isActive) => (
              // <img src={apiConfig.originalImage(movie.backdrop_path)} />
              <HeroSlideItem
                item={movie}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSlideItem = (props) => {
  let history = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={() => console.log("TRAILER")}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
