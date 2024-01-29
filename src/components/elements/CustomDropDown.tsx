import React, { useEffect, useRef } from "react";
import { ButtonTransparent } from "../../assets/styles";

import Popper from "@mui/material/Popper";
import { ColorWhite } from "../../assets/styles/color";
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
      <div ref={currentRef}  onClick={handleClick}>
        {value}
      </div>
      <Popper
        sx={{
          boxShadow: "rgba(145, 158, 171, 0.5) 0px 16px 32px -4px !important ",
          borderRadius: "6px",
        }}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
      >
        <div
          style={{
            backgroundColor: ColorWhite,
            borderRadius: "3px",
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
