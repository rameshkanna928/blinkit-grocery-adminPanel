import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchWrapper, FlexBox, SpanTag } from "../../../assets/styles";
import {
  ColorBlack,
  ColorDullWhite,
  ColorGray,
  ColorLightAsh,
  ColorLightWhite,
} from "../../../assets/styles/color";
import { useSelector } from "react-redux";

interface IProps {
  changeFunction: (value: string) => void;
  iconState: boolean;
  holderText?: string;
  inputLabel?: string;
  type?: string;
}
function CustomTextInput({
  changeFunction,
  iconState,
  holderText,
  inputLabel,
  type,
}: IProps) {
  const [getFocus, setGetFocus] = useState(false);
  const [value,setValue] =useState("")
  const {status} =useSelector(state=>state.mode)
  return (
    <SearchWrapper
    direction={"row"}
      onFocus={() => setGetFocus(true)}
      onBlur={() => setGetFocus(false)}
      $focusState={getFocus}
      $Variant={"productsSearch"}
      style={{ padding: inputLabel && 0 }}
    >
      {iconState && (
        <FlexBox>
          <FiSearch color ={status ==="light"?ColorBlack: ColorGray} />
        </FlexBox>
      )}
      {inputLabel && (
        <div
          style={{
            backgroundColor: ColorLightWhite,
            minWidth: "100px",
            padding: "10px 5px",
            borderRadius: "6px 0  0 6px ",
          }}
        >
          <SpanTag style={{ color: ColorBlack }}>{inputLabel}</SpanTag>
        </div>
      )}
      <input value={value}
        onChange={(e: any) => {
          e.preventDefault();
          if (type === "number") {
            const result = e.target.value.replace(/\D/g, "");
            changeFunction(result);
            setValue(result)
          } else {
            changeFunction(e.target.value);
            setValue(e.target.value)

          }
        }}
        type="text"
        placeholder={holderText ? holderText : "Search"}
      />
    </SearchWrapper>
  );
}

export default CustomTextInput;
