import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../redux/actions/CarouselActions";

const contentStyle = {
  height: "100%",
  color: "#fff",
  // lineHeight: "800px",
  textAlign: "center",
  backgroundPosition: "fixed",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};
export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  console.log("arrImg", arrImg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              className="w-full opacity-0"
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };

  return <Carousel autoplay>{renderImg()}</Carousel>;
}
