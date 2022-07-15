import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import HomeCarousel from "../../components/HomeCarousel";

const contentStyle = {
  backgroundPosition: "top",
  backgroundsize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};
export default function HomeTemplate() {
  return (
    <div
      style={{
        ...contentStyle,
        backgroundImage:
          "url(https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg)",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
