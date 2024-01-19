import { useDispatch } from "react-redux";
import {
  FlexBetween,
  FlexBox,
  Heading2,
  Heading6,
  ParentStack,
} from "../../assets/styles";
import {
  ColorGray,
  ColorLightAsh,
  LightBorderColor,
} from "../../assets/styles/color";
import ReUseDrawer from "./ReusableDrawer";
import { IoCloseOutline } from "react-icons/io5";
import { onClose } from "../../redux/slices/DrawerSlide";
import { Box, Stack } from "@mui/material";
function GalleryDrawer() {
  const dispatch = useDispatch();
  return (
    <ReUseDrawer position={"bottom"}>
      <Box height={"85vh"}>
        <FlexBetween
          style={{
            padding: "20px",
            borderBottom: `1px solid ${LightBorderColor}`,
          }}
        >
          <Heading2>Media Files</Heading2>
          <IoCloseOutline
            onClick={() => dispatch(onClose())}
            size={30}
            color={ColorGray}
          />
        </FlexBetween>
        <Stack px={2.5} py={3}>
          <ParentStack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack width={"48%"}>
                <Heading6 style={{ fontSize: 16 }}>
                  Recently uploaded files
                </Heading6>
              </Stack>
              <Stack width={"48%"}>
                <Heading6 style={{ fontSize: 16 }}>Add files here</Heading6>
              </Stack>
            </Stack>
          </ParentStack>
        </Stack>
      </Box>
    </ReUseDrawer>
  );
}

export default GalleryDrawer;
