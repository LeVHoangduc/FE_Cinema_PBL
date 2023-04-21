/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/app.context";
import { useQuery } from "@tanstack/react-query";
import { getCity } from "../../../api/lichchieu.api";

export default function City() {
  const { data } = useQuery({
    queryKey: ["cities"],
    queryFn: () => getCity(),
  });
  console.log(data);
  return (
    <div className="col-1">
      {/* <a href="#" className="list-group-item  list-group-region">
        Khu vực
      </a> */}
      <ul className="list-group">
        <li className="list-group-item  list-group-region">Khu vực</li>
        {data?.map((city) => (
          <li className="list-group-item  d-flex justify-content-between align-items-center btn-choose-region">
            <a href="#" className="item">
              {city.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
