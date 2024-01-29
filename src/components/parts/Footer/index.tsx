import { Stack } from "@mui/material";
import { FlexBox, FooterContainer, TableSpan } from "../../../assets/styles";

function index({ sideBarOpen }) {
  return (
    <FooterContainer $open={sideBarOpen}>
      <Stack direction={"row"} maxWidth={"1300px"} width={"100%"} justifyContent={"space-between"}>
        <TableSpan>
          © All Designed, Developed and 💕 by{" "}
          <b style={{ color: "rgb(255, 156, 0)" }}>ThemeTags</b>{" "}
        </TableSpan>
        <TableSpan>
          Grostore Online Store
          <b>v3.0.0</b>
        </TableSpan>
      </Stack>
    </FooterContainer>
  );
}

export default index;
