import { Popover } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ButtonTransparent, CustomLink } from "../../assets/styles";
// function CustomDropDown({
//   children,
//   value,
// }: {
//   children: React.ReactNode;
//   value: any;
// }) {
//   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? " " : undefined;

//   return (
//     <>
//       <ButtonTransparent aria-describedby={id} onClick={handleClick}>
//         <CustomLink to={""}>{value}</CustomLink>
//       </ButtonTransparent>
//       <Popover
//         PaperProps={{
//           sx: {
//             boxShadow:
//               "rgba(145, 158, 171, 0.16) 0px 16px 32px -4px !important ",
//           },
//         }}
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={() => {
//           setAnchorEl(null);
//           console.log("AStatus", anchorEl);
//         }}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         <div onClick={() => setAnchorEl(null)}>{children}</div>
//       </Popover>
//     </>
//   );
// }

// export default CustomDropDown;
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { ColorBlue, ColorWhite } from "../../assets/styles/color";
export default function CustomDropDown({ value, children }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const currentRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!currentRef?.current?.contains(e.target)) {
        setAnchorEl(null);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <>
        <ButtonTransparent
          ref={currentRef}
          aria-describedby={id}
          onClick={handleClick}
        >
         {value}
        </ButtonTransparent>
        <Popper
          sx={{
            boxShadow:
              "rgba(145, 158, 171, 0.5) 0px 16px 32px -4px !important ",
            borderRadius: "6px",
          }}
          open={open}
          anchorEl={anchorEl}
          placement="bottom-end"
        >
          <div
            style={{
              backgroundColor: ColorWhite,
              borderRadius: "6px",
              height: open ? "auto" : 0,
              opacity: open ? 1 : 0,
              transition: "all .7s",
            }}
            onClick={() => setAnchorEl(null)}
          >
            {children}
          </div>
        </Popper>
    </>
  );
}
