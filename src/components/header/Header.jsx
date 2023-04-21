import React, { useRef, useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";

import logo from "../../assets/tmovie.png";
const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  // const active = headerNav.findIndex(e=>e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div ref={headerRef} className="header">
      <div className="header_wrap container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://metiz.vn/static/assets/websites/images/Metiz_logo/METIZ_LOGO_WEB.png"
              alt=""
            />
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

          <li className="dropdown">
            <Link
              to="/"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              //   aria-aria-haspopup="true"
              aria-expanded="false"
            >
              Phim
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/">Phim đang chiếu</Link>
              </li>
              <li>
                <Link to="/">Phim sắp chiếu</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/buyticket">Lịch Chiếu</Link>
          </li>

          <li>
            <Link to="/blog">Blog Phim</Link>
          </li>
          <li>
            <Link to="/blog">Khuyến mãi</Link>
          </li>

          <li className="dropdown">
            <Link
              to="/blog"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              //   aria-aria-haspopup="true"
              aria-expanded="false"
            >
              Thành viên
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/blog">Tài khoản</Link>
              </li>
              <li>
                <Link to="/blog">Quyền lợi</Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="header__user">
          <li className="dropdown__user">
            <Link to="/login">Đăng nhập</Link>
          </li>
          <span>/</span>
          <li>
            <Link to="/register">Đăng ký</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
