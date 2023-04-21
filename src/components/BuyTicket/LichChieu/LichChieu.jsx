/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/app.context";

export default function LichChieu() {
  const { isActive } = useContext(AppContext);

  return (
    <>
      {isActive ? (
        <div className="non-showtimes">Bạn chưa chọn rạp.</div>
      ) : (
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

            <div className="alert">
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
                  rel="noreferrer"
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
      )}
    </>
  );
}
