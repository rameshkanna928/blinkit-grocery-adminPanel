import React, { ReactNode, useEffect, useRef } from "react";

import Popper from "@mui/material/Popper";
import { ColorWhite } from "../../assets/styles/color";
import { useSelector } from "react-redux";
import { darkTheme } from "../theme";
interface Iprops {
  value: ReactNode;
  children: ReactNode;
}
export default function CustomDropDown({ value, children }: Iprops) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const currentRef = useRef<HTMLDivElement>(null);
  const { status } = useSelector(
    (state: { mode: { status: string } }) => state.mode
  );
  useEffect(() => {
    const handler = (e:any) => {
      if (currentRef) {
        if (!currentRef?.current?.contains(e.target)) {
          setAnchorEl(null);
        }
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <>
      <div ref={currentRef} onClick={handleClick}>
        {value}
      </div>
      <Popper
        sx={{
          boxShadow: `${
            status === "light"
              ? "rgba(145, 158, 171, 0.5)"
              : "rgba(0, 0, 0, 0.35)"
          } 0px 16px 32px -4px !important `,
          borderRadius: "6px",
        }}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
      >
        <div
          style={{
            backgroundColor:
              status === "light" ? ColorWhite : darkTheme.partBackground,
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
