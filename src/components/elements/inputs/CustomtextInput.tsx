import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchWrapper, FlexBox, SpanTag } from "../../../assets/styles";
import {
  ColorBlack,
  ColorGray,
  ColorLightGray,
} from "../../../assets/styles/color";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../../theme";

interface IProps {
  changeFunction?: (value: string) => void;
  iconState?: boolean;
  holderText?: string;
  inputLabel?: string;
  type?: string;
  disable?:boolean;
  inputProps:any;
}
function CustomTextInput({
  iconState,
  inputLabel,
  inputProps
}: IProps) {
  const [getFocus, setGetFocus] = useState(false);
  const [value, setValue] = useState("");
  const { status } = useSelector(
    (state: { mode: { status: string } }) => state.mode
  );
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
          <FiSearch color={status === "light" ? ColorBlack : ColorGray} />
        </FlexBox>
      )}
      {inputLabel && (
        <div
          style={{
            backgroundColor:
              status === "light"
                ? lightTheme.bodyBackground
                : darkTheme.partBackground,
            minWidth: "100px",
            padding: "10px 5px",
            borderRadius: "6px 0  0 6px ",
            borderRight: `1px solid ${
              status === "light" ? lightTheme.cardBorder : darkTheme.cardBorder
            }`,
          }}
        >
          <SpanTag style={{ color: ColorLightGray }}>{inputLabel}</SpanTag>
        </div>
      )}
      <input
      {...inputProps}
        // value={value}
        // onChange={(e: any) => {
        //   e.preventDefault();
        //   if (type === "number") {
        //     const result = e.target.value.replace(/\D/g, "");
        //     changeFunction(result);
        //     setValue(result);
        //   } else {
        //     changeFunction(e.target.value);
        //     setValue(e.target.value);
        //   }
        // }}
        // type={type && type !== "number" ? type : "text"}
        // placeholder={holderText ? holderText : "Search"}
      />
    </SearchWrapper>
  );
}

export default CustomTextInput;
