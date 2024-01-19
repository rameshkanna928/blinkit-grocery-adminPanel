import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchWrapper, FlexBox, SpanTag } from "../../../assets/styles";
import {
  ColorBlack,
  ColorDullWhite,
  ColorLightAsh,
  ColorLightWhite,
} from "../../../assets/styles/color";

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
  return (
    <SearchWrapper
      onFocus={() => setGetFocus(true)}
      onBlur={() => setGetFocus(false)}
      $focusState={getFocus}
      $Variant={"productsSearch"}
      style={{ padding: inputLabel && 0 }}
    >
      {iconState && (
        <FlexBox>
          <FiSearch />
        </FlexBox>
      )}
      {inputLabel && (
        <div
          style={{
            backgroundColor: ColorLightWhite,
            width: "100px",
            padding: "10px 5px",
            borderRadius: "6px 0  0 6px ",
          }}
        >
          <SpanTag style={{ color: ColorBlack }}>{inputLabel}</SpanTag>
        </div>
      )}
      <input value={value}
        onChange={(e: any) => {
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
