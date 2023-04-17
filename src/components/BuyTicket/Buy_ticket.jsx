/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Buy_ticket.scss";

export default function Buy_ticket() {
  return (
    <div>
      <div className="row">
        <div className="col-1">
          {/* <a href="#" className="list-group-item  list-group-region">
              Khu vực
            </a> */}
          <ul className="list-group">
            <li className="list-group-item  list-group-region">Khu vực</li>
            <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
              <a href="#" className="item">
                Tp. Hồ Chí Minh
              </a>
            </li>
            <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
              <a href="#" className="item">
                Tp. Hồ Chí Minh
              </a>
            </li>
            <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
              <a href="#" className="item">
                Tp. Hồ Chí Minh
              </a>
            </li>
            <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
              <a href="#" className="item">
                Tp. Hồ Chí Minh
              </a>
            </li>
            <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
              <a href="#" className="item">
                Tp. Hồ Chí Minh
              </a>
            </li>
            <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
              <a href="#" className="item">
                Tp. Hồ Chí Minh
              </a>
            </li>
            <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
              <a href="#" className="item">
                Tp. Hồ Chí Minh
              </a>
            </li>
            <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
              <a href="#" className="item">
                Tp. Hồ Chí Minh
              </a>
            </li>
          </ul>
        </div>

        <div className="col-1">
          <ul className="list-group">
            <li className="list-group-item list-group-region list-cinema-item">
              <a
                href="#"
                className="list-group-item list-group-item-action disabled bg-light"
              >
                <img
                  src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png"
                  alt
                  className="rounded-circle float-left mr-3"
                  width={24}
                />
              </a>
              <span>Cinestar</span>
            </li>
            <li className="list-group-item ">
              <a href="#" className="list-group-item item" data-cinema={118366}>
                Cinestar Quốc Thanh
              </a>
            </li>

            <li className="list-group-item ">
              <a href="#" className="list-group-item item" data-cinema={126681}>
                Cinestar Hai Bà Trưng
              </a>
            </li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item list-group-region list-cinema-item">
              <a href="#" className="list-group-item ">
                <img
                  src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/4e2f8af9e4d780495cbc387e5868c2a48c7f82c2.png"
                  alt
                  className="rounded-circle float-left mr-3"
                  width={24}
                />
              </a>
              <span> Mega GS Cinemas</span>
            </li>
            <li className="list-group-item ">
              <a href="#" className="list-group-item item" data-cinema={123414}>
                Mega GS Cao Thắng
              </a>
            </li>
            <li className="list-group-item ">
              <a href="#" className="list-group-item item" data-cinema={126815}>
                Mega GS Lý Chính Thắng
              </a>
            </li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item list-group-region list-cinema-item">
              <a href="#" className="list-group-item ">
                <img
                  src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/a1cd7de61579e7bca68c7bee4d76c4c7388478cb.png"
                  alt
                  className="rounded-circle float-left mr-3"
                  width={24}
                />
              </a>
              <span> Dcine</span>
            </li>
            <li className="list-group-item ">
              <a href="#" className="list-group-item item" data-cinema={126807}>
                Beta Quang Trung
              </a>
            </li>
          </ul>
          {/* 
          <div className="list-group">
            <div className="d-block d-sm-none mb-4"></div>
            <div className="card d-none d-sm-block">
              <div className="list-group list-group-flush list">
                <div>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    Cinestar
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={118366}
                  >
                    Cinestar Quốc Thanh
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={126681}
                  >
                    Cinestar Hai Bà Trưng
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/4e2f8af9e4d780495cbc387e5868c2a48c7f82c2.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    Mega GS Cinemas
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={123414}
                  >
                    Mega GS Cao Thắng
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={126815}
                  >
                    Mega GS Lý Chính Thắng
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/a1cd7de61579e7bca68c7bee4d76c4c7388478cb.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    Dcine
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={126763}
                  >
                    DCINE Bến Thành
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/5fffb2fcaf3c1018282624.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    Beta Cinemas
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={126807}
                  >
                    Beta Quang Trung
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/5fffb30b3194c340097683.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    Galaxy Cinema
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={4}
                  >
                    Galaxy Nguyễn Du
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={6}
                  >
                    Galaxy Tân Bình
                  </a>

                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/524ba157cd271c9c24d15f367a57c13abc26af06.jpg"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    CGV Cinemas
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={7}
                  >
                    CGV CT Plaza
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={8}
                  >
                    CGV Hùng Vương Plaza
                  </a>
                  <a>
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/dcc08eb55eca8002f729ae0dff98a2ae6c031db0.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    BHD Star Cineplex
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={10}
                  >
                    BHD Star 3/2
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={17529}
                  >
                    BHD Star Bitexco
                  </a>

                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/38fee9d0c0a533a3d4fb4779d4efa8842a6d5bae.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    Lotte Cinema
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={151}
                  >
                    Lotte Nam Sài Gòn
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={18992}
                  >
                    Lotte Cộng Hoà
                  </a>

                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/6397446bee6da982816422.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    Đống Đa Cinema
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={154}
                  >
                    Đống Đa Cinema
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action disabled bg-light"
                  >
                    <img
                      src="https://moveek.com/bundles/ornweb/img/no-thumbnail.png"
                      alt
                      className="rounded-circle float-left mr-3"
                      width={24}
                    />
                    Viện Trao Đổi Văn Hóa Pháp
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-truncate btn-choose-cinema"
                    data-cinema={126808}
                  >
                    Viện Trao đổi Văn Hóa Pháp - IDECAF
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="col-2">
          <div id="showtimes">
            <div className="showtimes">
              <a href="#" className="showtimes_date" data-date="2023-04-11">
                11/4
                <br />
                <span className="small text-nowrap">Th 3</span>
              </a>
              <a href="#" className="showtimes_date" data-date="2023-04-12">
                12/4
                <br />
                <span className="small text-nowrap">Th 4</span>
              </a>
              <a href="#" className="showtimes_date" data-date="2023-04-13">
                13/4
                <br />
                <span className="small text-nowrap">Th 5</span>
              </a>
              <a href="#" className="showtimes_date" data-date="2023-04-14">
                14/4
                <br />
                <span className="small text-nowrap">Th 6</span>
              </a>
              <a href="#" className="showtimes_date" data-date="2023-04-15">
                15/4
                <br />
                <span className="small text-nowrap">Th 7</span>
              </a>
              <a href="#" className="showtimes_date" data-date="2023-04-16">
                16/4
                <br />
                <span className="small text-nowrap">CN</span>
              </a>
            </div>

            <div className="alert alert-warning">
              <i className="alert_icon">ℹ️</i>
              <span> Nhấn vào suất chiếu để tiến hành mua vé</span>
            </div>

            <div className="cinema_inf">
              <p className="cinema_content">
                <a href="/rap/cinestar-quoc-thanh/" className="text-dark">
                  Cinestar Quốc Thanh
                </a>
                {"  "}·<span className="text-muted">Thứ Ba, 11/04/2023</span>
              </p>

              <p className="cinema_content">
                271 Nguyễn Trãi, P. Nguyễn Cư Trinh, Q.1, Tp. Hồ Chí Minh
                {"  "}-{"  "}
                <a
                  href="https://maps.google.com/?q=Cinestar Quốc Thanh"
                  target="_blank"
                  className="cinema_content_direction"
                >
                  Bản đồ
                </a>
                {"  "}-{"  "}
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#ticketModal"
                  data-ticket-image="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/full/5c8723dc1bc51547219229.jpg"
                  className="cinema_content_direction"
                >
                  Giá vé
                </a>
              </p>
            </div>

            <div className="card-body">
              <div className="card_image">
                <a href="/phim/chuyen-toi-va-ma-quy-thanh-nguoi-mot-nha/">
                  <img
                    src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/mini/6418044511034680650502.jpeg"
                    alt="Chuyện Tôi Và Ma Quỷ Thành Người Một Nhà"
                    className="rounded img-fluid"
                  />
                </a>
              </div>

              <div className="card_buyTicket">
                <h4 class="card-title mb-1 name">
                  <a href="/phim/chuyen-toi-va-ma-quy-thanh-nguoi-mot-nha/">
                    Chuyện Tôi Và Ma Quỷ Thành Người Một Nhà
                  </a>
                </h4>

                <p className="card_content">
                  Marry My Dead Body · NC18 · 2h10' ·
                  <a href="/video/17985/" className="trailer">
                    Trailer
                  </a>
                </p>

                <div>
                  <label className="small mb-2 font-weight-bold d-block text-dark ">
                    2D Phụ Đề Việt
                  </label>

                  <div className="card_price">
                    <div className="card_content">
                      <a
                        href="/mua-ve/cinestar/118366/3b68ce31-0606-4d83-9eff-1d23708c95da"
                        className="card_datePrice"
                      >
                        <span className="time">14:00</span>
                        <span className="amenity price">65K</span>
                      </a>{" "}
                    </div>
                    <div>
                      <a
                        href="/mua-ve/cinestar/118366/7d5a9bff-658e-4410-b60e-1c5703b05c22"
                        className="card_datePrice"
                      >
                        <div className="card_content">
                          <span className="time">15:35</span>
                          <span className="amenity price">65K</span>
                        </div>
                      </a>{" "}
                    </div>
                    <div>
                      <a
                        href="/mua-ve/cinestar/118366/e6ed1bd9-4b6f-444f-81d1-d71093a699f5"
                        className="card_datePrice"
                      >
                        <div className="card_content">
                          <span className="time">16:35</span>
                          <span className="amenity price">65K</span>
                        </div>
                      </a>{" "}
                    </div>

                    <div>
                      <a
                        href="/mua-ve/cinestar/118366/80053869-3caf-4c75-85af-85bf237fabe0"
                        className="card_datePrice"
                      >
                        <div className="card_content">
                          <span className="time">18:15</span>
                          <span className="amenity price">70K</span>
                        </div>
                      </a>{" "}
                    </div>

                    <div>
                      <a
                        href="/mua-ve/cinestar/118366/267524c9-621f-454b-b6eb-5259da4c2f60"
                        className="card_datePrice"
                      >
                        <div className="card_content">
                          <span className="time">19:15</span>
                          <span className="amenity price">70K</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
