import React from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton} from '../components/button/button'
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

export default Home