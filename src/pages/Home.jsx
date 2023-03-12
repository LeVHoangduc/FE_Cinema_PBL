import React from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import Slide from "../components/Testcode/slide.jsx";
import { Link } from 'react-router-dom'
import { OutlineButton} from '../components/button/button'// import SlideNextButton from "../components/Testcode/swiper";
const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className='container'>
                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small"></OutlineButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
