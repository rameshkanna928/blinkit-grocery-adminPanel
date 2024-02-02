import { CustomSelectInput, Heading6, SpanTag } from "../../../assets/styles";
import {
  ColorBlack,
  ColorGreen,
  LightBorderColor,
} from "../../../assets/styles/color";
import { useSelector } from "react-redux";
import { darkTheme } from "../../theme";
import { TextField } from "@mui/material";

interface IProps {
  inputProps: {
    options: string[];
    defaultValue?:string
  };
  type?: string;
}

function CustomSelect({ inputProps, type }: IProps) {
  const { status } = useSelector(
    (state: { mode: { status: string } }) => state.mode
  );

  return (
    <CustomSelectInput
      size="small"
      disablePortal
      id="combo-box-demo"
      {...inputProps}
      sx={{
        "& fieldset": {
          borderColor: LightBorderColor,
        },
        "&:hover fieldset": {
          borderColor: `${
            status === "light" ? LightBorderColor : darkTheme.cardBorder
          } !important`,
        },
        "&.Mui-focused fieldset": {
          borderColor: `${ColorGreen} !important`,
          borderWidth: "1px !important",
        },
        "&.MuiAutocomplete-input": {
          padding: "0px !important",
        },
      }}
      renderInput={(params) => <TextField {...params} label="" />}
      clearIcon={<></>}
      renderOption={(props, option) => (
        <>
          {type ? (
            type === "HTML" && (
              <div style={{ padding: "0px 15px" }} {...props}>
                <SpanTag style={{ color: ColorBlack }}>{option}</SpanTag>
              </div>
            )
          ) : (
            <Heading6 {...props}>{option}</Heading6>
          )}
        </>
      )}
    />
  );
}

export default CustomSelect;
