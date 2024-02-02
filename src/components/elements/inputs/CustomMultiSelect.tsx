import Select, { StylesConfig } from "react-select";
import {
  ColorBlack,
  ColorDarkGray,
  ColorDullWhite,
  ColorGray,
  ColorGreen,
  ColorWhite,
  LightBorderColor,
  darkBodyBackground,
} from "../../../assets/styles/color";
import { SmallSpan } from "../../../assets/styles";
import { useSelector } from "react-redux";
interface Iprops {
  options: {}[];
  defaultValue: string;
  placeHolderText: string;
}
function CustomMultiSelect({ options, defaultValue, placeHolderText }: Iprops) {
  const { status } = useSelector(
    (state: { mode: { status: string } }) => state.mode
  );

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      // This line disable the blue border
      backgroundColor: status === "light" ? ColorWhite : darkBodyBackground,
      outline: "none",
      border: `1px solid ${LightBorderColor}`,
      boxShadow: "none",

      "&:hover": {
        outline: `none`,
        border: `1px solid ${LightBorderColor}`,
      },
      "&:focus": {
        outline: "none",
        border: `1px solid ${ColorGreen}`,
      },
    }),
    option: (styles: any, { isDisabled }: any) => {
      return {
        ...styles,
        // backgroundColor: isDisabled ? 'red' : "green",
        color: ColorDarkGray,
        cursor: isDisabled ? "not-allowed" : "default",
        backgroundColor: status === "light" ? ColorWhite : ColorBlack,
        "&:hover": {
          backgroundColor: status === "light" ? ColorDullWhite : ColorGray,
        },
      };
    },
  };
  return (
    <Select
      isClearable={false}
      closeMenuOnSelect={false}
      defaultValue={defaultValue}
      isMulti
      options={options}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={colourStyles}
      placeholder={
        <SmallSpan>{placeHolderText ? placeHolderText : ""}</SmallSpan>
      }
    />
  );
}

export default CustomMultiSelect;
