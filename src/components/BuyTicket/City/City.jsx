/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/app.context";
import { useQuery } from "@tanstack/react-query";
import { getCity } from "../../../api/lichchieu.api";
import { Link } from "react-router-dom";

export default function City() {
  const { data } = useQuery({
    queryKey: ["cities"],
    queryFn: () => getCity(),
  });
  // console.log(data);

  const { setCityName } = useContext(AppContext);

  const handleOnclick = (cityName) => {
    setCityName(cityName);
    // console.log(cityName);
  };
  return (
    <div className="col-1">
      {/* <a href="#" className="list-group-item  list-group-region">
        Khu vực
      </a> */}
      <ul className="list-group">
        <li className="list-group-item  list-group-region">Khu vực</li>
        {data?.map((city) => (
          <li
            key={city.id}
            className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region"
          >
            <Link
              to="#"
              onClick={() => handleOnclick(city.name)}
              className="item"
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
