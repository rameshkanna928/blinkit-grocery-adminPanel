import Select, { StylesConfig } from "react-select";
import {
  ColorDarkGray,
  ColorDullWhite,
  ColorGray,
  ColorGreen,
  LightBorderColor,
} from "../../../assets/styles/color";
import { SmallSpan } from "../../../assets/styles";

function CustomMultiSelect({options,defaultValue,placeHolderText}) {
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];
  const colourStyles = {
    control: (styles: any,) => ({
      ...styles,
      // This line disable the blue border
      backgroundColor: "white",
      outline: "none",
      border: `1px solid ${LightBorderColor}`,
      boxShadow:"none",
      
      "&:hover": {
        outline: `none`,
        border: `1px solid ${LightBorderColor}`,
      },
      "&:focus": {
        outline: "none",
        border: `1px solid ${ColorGreen}`,
      },
    }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        // backgroundColor: isDisabled ? 'red' : "green",
        color: ColorDarkGray,
        cursor: isDisabled ? "not-allowed" : "default",
        "&:hover": {
          backgroundColor: ColorDullWhite,
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
      placeholder={<SmallSpan>{placeHolderText?placeHolderText:""}</SmallSpan>}
    />
  );
}

export default CustomMultiSelect;
