/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";

import SwiperCore, { Autoplay, FreeMode, Thumbs, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Button, { OutlineButton } from "../button/button";
import Modal, { ModalContent } from "../modal/modal";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";

import "./hero-slide.scss";

import { useHistory } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const HeroSlide = () => {
  SwiperCore.use([Autoplay, Navigation, FreeMode, Thumbs]);

  const [movieItems, setMovieItems] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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

  // const SwiperButtonNext = ({ children }) => {
  //   const swiper = useSwiper();
  //   return (
  //     <button className="btn-next" onClick={() => swiper.slideNext()}>
  //       {children}
  //     </button>
  //   );
  // };

  return (
    <div className="hero-slide">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        // loop={true}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="hero-slide2"
      >
        {movieItems.map((movie, index) => (
          <SwiperSlide key={index}>
            {(isActive) => (
              <HeroSlideItem
                item={movie}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="hero-slide__thumb"
      >
        {movieItems.map((movie, index) => (
          <SwiperSlide key={index}>
            {(isActive) => (
              <HeroSlideThumbs
                item={movie}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

console.log("re render");
const HeroSlideItem = (props) => {
  let history = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    // console.log("modal", modal);

    const videos = await tmdbApi.getVideos(category.movie, item.id);
    // console.log(videos);

    if (videos.results.length > 0) {
      const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key; //can

      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }
    modal.classList.toggle("active");
  };

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
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const HeroSlideThumbs = (props) => {
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div className={`hero-slide__thumbs `}>
      <img src={background} />
      <div className={`thumb_hover`}>
        <span className="a">⊕</span>
      </div>
    </div>
  );
};

// render modal , invisible
const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");
  return (
    <Modal active={props.active} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose} class="modal__content">
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
