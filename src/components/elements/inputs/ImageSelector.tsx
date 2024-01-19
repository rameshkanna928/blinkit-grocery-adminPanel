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
import { setCurrentRouteId } from "../../../redux/slices/SideBarSlice";
import { useDispatch } from "react-redux";

interface IProps {
  labelName: string;
}
function ImageSelector({ labelName }: IProps) {
  const dispatch = useDispatch();
  return (
    <FlexBox
      style={{
        border: `2px dashed ${LightBorderColor}`,
        padding: "32px 16px",
        borderRadius: "6px",
      }}
    >
      <Stack justifyContent={"space-between"} alignItems={"center"} spacing={2}>
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
  );
}

export default ImageSelector;
