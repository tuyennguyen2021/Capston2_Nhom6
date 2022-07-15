import React from "react";
import { NavLink } from "react-router-dom";
import "./FilmsHover.css";

export default function FilmsHover(props) {
  const { phim } = props;
  return (
    <section className="page-contain">
      <div className="data-card">
        <div
          style={{
            background: `url(${phim.hinhAnh})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg"
        >
          <img
            className="h-[320px] w-full opacity-0 rounded-lg"
            src={phim.hinhAnh}
            alt={phim.tenPhim}
          />
        </div>
        <h4 className="text-center">{phim.tenPhim}</h4>
        <p className="mt-[-1em] desmotA">
          {phim.moTa.length > 50 ? (
            <span>{phim.moTa.slice(0, 60)} ...</span>
          ) : (
            <span>{phim.moTa}</span>
          )}
        </p>
        <div className="grid grid-cols-2 mt-[-4rem]">
          <NavLink to={`/detail/${phim.maPhim}`}>
            <button className="cardin bg-transparent py-2 px-4 border rounded">
              Đặt Vé
            </button>
          </NavLink>
          <button className="cardin bg-transparent py-2 px-4 border rounded">
            Xem Trailer
          </button>
        </div>
      </div>
    </section>
  );
}
