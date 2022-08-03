import React from "react";
import { NavLink } from "react-router-dom";
import "./FilmsHover.css";
import Swal from "sweetalert2";

export default function FilmsHover(props) {
  const { phim } = props;
  return (
    <section className="page-contain">
      <div className="data-card">
        <div className="rounded-lg h-[320px]">
          <img
            className="h-full w-full opacity-1 rounded-lg"
            src={phim.hinhAnh}
            alt={phim.tenPhim}
          />
        </div>
        <h4 className="text-center">
          {phim.tenPhim.split(" ").length > 3 ? (
            <span>{phim.tenPhim.split(" ").slice(0, 3).join(" ")} ...</span>
          ) : (
            <span>{phim.tenPhim}</span>
          )}
        </h4>
        <div className="grid grid-cols-2 mt-[-4rem]">
          <NavLink
            to={`/detail/${phim.maPhim}`}
            className="cardin bg-transparent py-2 px-4 border rounded text-center"
          >
            <button className="">Đặt Vé</button>
          </NavLink>
          <button
            className="cardin bg-transparent px-4 border rounded"
            onClick={() => {
              Swal.fire({
                html: `<iframe allow="autoplay" allowfullscreen=${true} width=100% height=${600} src=${
                  phim.trailer
                } iframeborder=${0}></iframe>`,
                width: "1000px",
                background: "transparent",
              });
            }}
          >
            Xem Trailer
          </button>
        </div>
      </div>
    </section>
  );
}
