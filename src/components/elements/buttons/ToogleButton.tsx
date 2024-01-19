import  { SetStateAction, useEffect, useState } from "react";
import {
  ColorGray,
  ColorGreen,
  ColorWhite,
} from "../../../assets/styles/color";

interface IProps{
  value:SetStateAction<boolean>
}
function ToogleButton({ value }:IProps) {
  const [toogle, setToogle] = useState<boolean>(false);
  useEffect(() => setToogle(value), [value]);
  return (
    <div
      onClick={() => setToogle(!toogle)}
      style={{
        position: "relative",
        width: "35px",
        height: "20px",
        backgroundColor: !toogle ? "white" : ColorGreen,
        borderRadius: "12px",
        border: toogle ? `1px solid ${ColorGreen} ` : "1px solid gray",
        transition: "all .7s",
        opacity: toogle ? 1 : 0.2,
      }}
    >
      <div
        style={{
          backgroundColor: toogle ? ColorWhite : ColorGray,
          position: "absolute",
          left: toogle ? "unset" : "3px",
          top: "50%",
          right: toogle ? "3px" : "unset",
          display: "flex",
          padding: "7px",
          borderRadius: "50%",
          transition: "all .7s",
          transform: "translateY(-50%)",
        }}
      ></div>
    </div>
  );
}

export default ToogleButton;
