import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRow.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    ></div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class MultipleRows extends Component {
  renderFilm = () => {
    return this.props.arrFilm.map((item, index) => {
      return (
        <div className={styleSlick["width-item"]} key={index}>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={item.hinhAnh}
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {item.tenPhim}
              </h1>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      preArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}
