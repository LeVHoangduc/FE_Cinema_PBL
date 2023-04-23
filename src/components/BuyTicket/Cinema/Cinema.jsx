/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCinemas } from "../../../api/lichchieu.api";
import { Link } from "react-router-dom";
import { AppContext } from "../../../contexts/app.context";

/* eslint-disable jsx-a11y/alt-text */
export default function Cinema() {
  const { data } = useQuery({
    queryKey: ["Cinemas"],
    queryFn: () => getCinemas(),
  });

  const { cityName } = useContext(AppContext);
  // console.log(data);
  return (
    <div className="col-1">
      {data?.map((cinema) => {
        return (
          <ul key={cinema.logo_path} className="list-group">
            <li className="list-group-item list-group-region list-cinema-item">
              <a
                href="#"
                className="list-group-item list-group-item-action disabled bg-light"
              >
                <img
                  src={cinema.logo_path}
                  alt
                  className="rounded-circle float-left mr-3"
                  width={24}
                />
              </a>
              <span>{cinema.name}</span>
            </li>
            {cinema.cinemas?.map((subcinema) => {
              {
                return (
                  subcinema.city_name === cityName && (
                    <li key={subcinema.id} className="list-group-item ">
                      <Link
                        to="#"
                        className="list-group-item item"
                        data-cinema={118366}
                      >
                        {subcinema.name}
                      </Link>
                    </li>
                  )
                );
              }
            })}

            {/* <li key={cinema.cinemas[0].id} className="list-group-item ">
            <a
              href="#"
              alt="true"
              className="list-group-item item"
              data-cinema={118366}
            >
              {cinema.cinemas[0].name}
            </a>
          </li> */}

            {/* <li className="list-group-item ">
            <a href="#" className="list-group-item item" data-cinema={118366}>
              Cinestar Quốc Thanh
            </a>
          </li>
  
          <li className="list-group-item ">
            <a href="#" className="list-group-item item" data-cinema={126681}>
              Cinestar Hai Bà Trưng
            </a>
          </li> */}
          </ul>
        );
      })}
    </div>
  );
}
