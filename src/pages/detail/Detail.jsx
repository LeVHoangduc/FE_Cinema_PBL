import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';

import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';



const Detail = () => {

    console.log("details page");

    const{category, id}= useParams();

    const[item, setItem]=useState(null);

    useEffect(()=>{
        const getDetail= async()=>{
            const response = await tmdbApi.detail(category,id,{params:{}});
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail();


    },[category,id]);
    return (
        <>
            
            {
              true &&(
                
                <>
                    <div className='banner' style={{backgroundImage: "url('https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/full/64056738cc4fb719491203.jpg')"}} ></div>
                        <div className="mb-3 movie-content container">
                            <div className='movie-content__poster'>
                                <div className='movie-content__poster__img' style={{backgroundImage: "url('https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/full/64056738cc4fb719491203.jpg')" }}></div>
                            </div>
                            <div className='movie-content__info'>
                                <h1 className='title'>
                                    Tên Phim
                                </h1>
                                <div className='genres'>
                                    <span className='genres__item'>Tình cảm </span>
                                    <span className='genres__item'>Học đường </span>
                                    <span className='genres__item'>Phiêu lưu </span>
                                    
                                </div>
                                <p className='overview'>DESCRIPTION OF FILM</p>
                                <div className='moreinfo'>
                                    <div>
                                        <span> Hài lòng </span>
                                        <br></br>
                                        <strong> 93% </strong>
                                    </div>
                                    <div>
                                        <span> Khởi chiếu </span>
                                        <br></br>
                                        <strong> 2/4/2023 </strong>
                                    </div>
                                    <div >
                                        <span> Thời lượng</span>
                                        <br></br>
                                        <strong> 130 phút</strong>
                                    </div>
                                    <div>
                                        <span> Giới hạn tuổi</span>
                                        <br></br>
                                        <strong> 18 tuổi </strong>
                                    </div>
                                </div>
                                <div className='cast'>
                                    <div className='section__header'>
                                        <h2>Casts</h2>
                                    </div>
                                 {/* <CastList id={true.id}/> */}
                                </div> 
                            </div>
                        </div>
                     {/* <div className='container'>
                         <div className='section mb-3'>
                             <VideoList id={item.id}/>

                         </div>
                     </div>
                     <div className='section mb-3'>
                         <div className='section__header mb-2'>
                             <h2>Similar</h2>

                         </div>
                         <MovieList category={category} type="similar"  id={item.id}/>

                     </div> */}
                </>
              )
            }
        </>
    )
}

export default Detail;