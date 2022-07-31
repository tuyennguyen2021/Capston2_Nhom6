import React from "react";
import { NavLink } from "react-router-dom";
import "./FilmsHover.css";
import Swal from "sweetalert2";
import ReactPlayer from "react-player/youtube";

export default function FilmsHover(props) {
  const { phim } = props;
  return (
    <section className="page-contain">
      <div className="data-card">
        <div
          // style={{
          //   background: `url(${phim.hinhAnh})`,
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          // }}
          className="rounded-lg h-[350px]"
        >
          <img
            className="h-full w-full opacity-1 rounded-lg"
            src={phim.hinhAnh}
            alt={phim.tenPhim}
          />
        </div>
        <h4 className="text-center">{phim.tenPhim}</h4>
        <p className="mt-[-1em] desmotA">
          {phim.moTa.split(" ").length > 20 ? (
            <span>{phim.moTa.split(" ").slice(0, 13).join(" ")} ...</span>
          ) : (
            <span>{phim.moTa}</span>
          )}
        </p>
        <div className="grid grid-cols-2 mt-[-4rem]">
          <NavLink
            to={`/detail/${phim.maPhim}`}
            className="cardin bg-transparent py-2 px-4 border rounded text-center"
          >
            <button>Đặt Vé</button>
          </NavLink>
          <button
            className="cardin bg-transparent py-2 px-4 border rounded"
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
