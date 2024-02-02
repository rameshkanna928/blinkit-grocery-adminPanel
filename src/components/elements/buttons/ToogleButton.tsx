import { SetStateAction, useEffect, useState } from "react";
import {
  ColorGray,
  ColorGreen,
  ColorWhite,
} from "../../../assets/styles/color";
import { FlexStart, SpanTag } from "../../../assets/styles";

interface IProps {
  value: SetStateAction<boolean>;
  label?: string;
  onChange?:(value:boolean)=>void
}
function ToogleButton({ value, label, onChange }: IProps) {
  return (
    <FlexStart
      sx={{ padding: "10px 0", cursor: "pointer", userSelect: "none" }}
      onClick={() =>  onChange(!value)}
      direction={"row"}
    >
      <div
        style={{
          position: "relative",
          width: "35px",
          height: "20px",
          backgroundColor: !value ? "white" : ColorGreen,
          borderRadius: "12px",
          border: value ? `1px solid ${ColorGreen} ` : "1px solid gray",
          transition: "all .7s",
          opacity: value ? 1 : 0.2,
        }}
      >
        <div
          style={{
            backgroundColor: value ? ColorWhite : ColorGray,
            position: "absolute",
            left: value ? "unset" : "3px",
            top: "50%",
            right: value ? "3px" : "unset",
            display: "flex",
            padding: "7px",
            borderRadius: "50%",
            transition: "all .7s",
            transform: "translateY(-50%)",
          }}
        ></div>
      </div>
      {label && (
        <SpanTag style={{ color: ColorGreen, fontWeight: 500 }}>
          {label}
        </SpanTag>
      )}
    </FlexStart>
  );
}

export default ToogleButton;
