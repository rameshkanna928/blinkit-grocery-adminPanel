import React from "react";
import {
  CommonCard,
  FlexBox,
  ImgWrapper,
  SmallSpan,
  SpanTag,
} from "../../assets/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ColorBlack, ColorWhite } from "../../assets/styles/color";
import { useSelector } from "react-redux";
function SliderComponent() {
  const { status } = useSelector((state) => state.mode);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map((data) => (
        <div>
          <CommonCard width={"90%"}>
            <FlexBox p={2} spacing={1}>
              <ImgWrapper $open={true} width={50} height={50}>
                <img src="https://grostore.themetags.com/public/uploads/media/WQJjaqXZXNnUHaubvRhHh5c3m4knHkCSwHWCIPWd.png" />
              </ImgWrapper>
              <SpanTag
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: status === "light" ? ColorBlack : ColorWhite,
                }}
              >
                Category Name {data}
              </SpanTag>
              <SmallSpan style={{ fontSize: 11 }}>2 items</SmallSpan>
            </FlexBox>
          </CommonCard>
        </div>
      ))}
    </Slider>
  );
}

export default SliderComponent;
