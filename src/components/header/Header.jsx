import React, { useRef,useEffect, useState } from 'react'

 import { Link, useLocation } from 'react-router-dom';

 import './header.scss';
 

 import logo from '../../assets/tmovie.png';
  //
//         display: 'Lịch Chiếu',
//         path: '/schedule'
//      },
//      {
//         display: 'Blog Phim',
//         path: '/blog'
//      },
//      {
//         display:' Khuyến Mãi',
//         path: '/sale'
//      },

//      {
//         display:'Thành Viên',
//         path:'/member'
//      }
     
     
// ];
const Header = () => {

    const { pathname }= useLocation();
    const headerRef= useRef(null);
   // const active = headerNav.findIndex(e=>e.path === pathname);
    

    useEffect(()=>{
        const shrinkHeader=()=>{
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop>100){
                headerRef.current.classList.add('shrink');

            } else{
                headerRef.current.classList.remove('shrink');
            }

        }
        window.addEventListener('scroll',shrinkHeader);
        return()=>{
            window.removeEventListener('scroll',shrinkHeader);
        }
    },[]);
         const [ selectedItem, setSelectedItem]=useState(null);
        
    return (
       
         <div ref={headerRef} className="header">
             <div className="header_wrap container">
                 <div className="logo">
                    <Link to="">
                        <img src="https://metiz.vn/static/assets/websites/images/Metiz_logo/METIZ_LOGO_WEB.png" alt="" />
                    </Link>
                     
                 </div>

                <ul className="header__nav">
                
                    {/* // headerNav.map((e,setSelectedItem)=>(
                    //     <li key={selectedItem} className={`${selectedItem===active? 'active':''}`}>
                    //         <Link to={e.path}>
                    //             {e.display}
                    //         </Link>
                    //     </li>
                    // )) */}
                
                    <li className='dropdown'>
                       <a href='#' className='dropdown-toggle'data-toggle="dropdown" role="button" aria-aria-haspopup="true" aria-expanded="false">Phim</a>
                       <ul className='dropdown-menu' >
                            <li >
                                <a>Phim đang chiếu</a>
                            </li>
                            <li >
                                <a>Phim sắp chiếu</a>
                            </li>
                        </ul> 
                    </li>

                    <li>
                        <a>Lịch Chiếu</a>
                    </li>

                    <li>
                        <a>Blog Phim</a>
                    </li>
                    <li>
                        <a href='#'>
                            Khuyến mãi
                        </a>
                    </li>

                    <li className='dropdown'>
                        <a href='#' className='dropdown-toggle'data-toggle="dropdown" role="button" aria-aria-haspopup="true" aria-expanded="false">
                            Thành viên
                        </a>
                        <ul className='dropdown-menu'>
                            <li>
                                <a>Tài khoản</a>
                            </li>
                            <li>
                                <a>Quyền lợi</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className='header__user'>
                    <li className='dropdown__user' >
                        <a>Đăng nhập</a>
                    </li>
                    <span>/</span>
                    <li>
                        <a>Đăng ký</a>
                    </li>
                </ul>
                
             </div>
            
        </div>
    )
}

export default Header
