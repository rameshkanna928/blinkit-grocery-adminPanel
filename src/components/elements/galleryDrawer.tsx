import { useDispatch, useSelector } from "react-redux";
import {
  FlexBetween,
  Heading2,
  Heading6,
  ParentStack,
} from "../../assets/styles";
import {
  ColorGray,
  LightBorderColor,
} from "../../assets/styles/color";
import { IoCloseOutline } from "react-icons/io5";
import { onClose } from "../../redux/slices/DrawerSlide";
import { Box, Stack } from "@mui/material";
import CustomDrawer from "./CustomDrawer";
function GalleryDrawer() {
  const dispatch = useDispatch();
  const { open } = useSelector((state:{drawer:{open:boolean}}) => state.drawer);
  console.log("gc", open);

  return (
    <CustomDrawer
      position={"bottom"}
      open={open}
      onclose={function () {
        dispatch(onClose());
      }}
    >
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
    </CustomDrawer>
  );
}

export default GalleryDrawer;
