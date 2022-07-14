import React, { Component } from "react";
import Slider from "react-slick";
import Films from "../Film/Films";
import styleSlick from "./MultipleRow.module.css";
import FilmsHover from "../Film/FilmsHover";

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
          {/* <Films phim={item} /> */}
          <FilmsHover phim={item} />
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
      autoplay: false,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings}>
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
