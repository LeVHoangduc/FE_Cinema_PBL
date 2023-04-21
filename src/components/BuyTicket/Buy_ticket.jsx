/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Buy_ticket.scss";
import City from "./City/City";
import Cinema from "./Cinema/Cinema";
import LichChieu from "./LichChieu/LichChieu";
import { AppProvider } from "../../contexts/app.context";

export default function Buy_ticket() {
  return (
    <div className="buyticket">
      <AppProvider>
        <City />
        <Cinema />
        <LichChieu />
      </AppProvider>
    </div>
  );
}
