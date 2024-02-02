import { FlexBox, InputLabel } from "../../../assets/styles";
import {
  ColorGray,
  ColorLightAsh,
  ColorWhite,
  LightBorderColor,
} from "../../../assets/styles/color";
import { FiPlus } from "react-icons/fi";
import { Stack } from "@mui/material";
import { onOpen } from "../../../redux/slices/DrawerSlide";
import { useDispatch } from "react-redux";

interface IProps {
  labelName: string;
  inputName?:string;
}
function ImageSelector({ labelName,inputName }: IProps) {
  const dispatch = useDispatch();
  return (
    <>
      <InputLabel>{inputName}</InputLabel>
      <FlexBox
        style={{
          border: `2px dashed ${LightBorderColor}`,
          padding: "32px 16px",
          borderRadius: "6px",
        }}
      >
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
        >
          <InputLabel style={{ color: ColorGray, fontWeight: 600 }}>
            {labelName}
          </InputLabel>
          <FlexBox
            onClick={() => {
              dispatch(onOpen());
            }}
            style={{
              borderRadius: "50%",
              backgroundColor: ColorLightAsh,
              width: 60,
              height: 60,
            }}
          >
            <FiPlus color={ColorWhite} size={25} />
          </FlexBox>
        </Stack>
      </FlexBox>
    </>
  );
}

export default ImageSelector;
