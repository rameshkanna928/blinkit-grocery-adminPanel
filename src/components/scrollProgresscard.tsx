import React, { useEffect, useState } from "react";
import {
  ColorLightAsh,
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
  ColorBlack,
  ColorDarkGray,
  ColorGray,
} from "../assets/styles/color";
import { Box, Grid, Stack } from "@mui/material";
import {
  CommonCard,
  CommonContainer,
  Heading2,
  SpanTag,
} from "../assets/styles";

const ScrollProgresscard = ({
  progressName,
  progressValArr,
  refContainer,
}) => {
  let dep = window.scrollY;
  let navbar = document.querySelector("#nav-wrapper");
  const [windowTop, setWindowTop] = useState(dep);
  const handleProgressConnectorHeight = (arr) => {
    if (arr.length >= 5) {
      return "100%";
    } else if (arr.length >= 2) {
      return "70%";
    } else {
      return "30%";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowTop(Math.ceil(window.scrollY));
    });
  }, [dep]);
  useEffect(() => {
    console.log("topValue", windowTop);
  }, [windowTop]);
  const applyStyleByRef = (index, arrLength, trueColor, falseColor) => {
    let navbar = document.querySelector("#nav-wrapper");

    if (index === 0) {
      if (arrLength > 1) {
        if (
          windowTop <
          refContainer?.current[index + 1]?.offsetTop -
            (navbar?.scrollHeight + 15)
        ) {
          return trueColor;
        } else {
          return falseColor;
        }
      } else {
        return trueColor;
      }
    } else {
      if (index < arrLength - 1) {
        if (
          windowTop >=
            refContainer?.current[index]?.offsetTop -
              (navbar?.scrollHeight + 15) &&
          windowTop <
            refContainer?.current[index + 1]?.offsetTop -
              (navbar?.scrollHeight + 15)
        ) {
          return trueColor;
        } else {
          return falseColor;
        }
      } else {
        if (
          windowTop >=
          refContainer?.current[index]?.offsetTop - (navbar?.scrollHeight + 15)
        ) {
          return trueColor;
        } else {
          return falseColor;
        }
      }
    }
  };
  return (
    <Box
      maxWidth={{ sm: "100%", lg: "300px" }}
      width={"100%"}
      position={"sticky"}
      top={{ lg: 80 }}
      display={{ xs: "none", lg: "flex" }}
    >
      <CommonCard p={2}>
        <CommonContainer style={{ gap: 10 }}>
          <Heading2
            style={{ padding: "0 12px" }}
          >{`${progressName} `}</Heading2>
          <div
            className="progress"
            style={{ display: "flex", position: "relative" }}
          >
            <span
              style={{
                width: "2px",
                height: handleProgressConnectorHeight(progressValArr),
                backgroundColor: ColorLightAsh,
                display: "flex",
                position: "absolute",
                left: "16px",
                top: "22px",
                transition: "all .7s",
                maxHeight: "370px",
              }}
              className="line"
            ></span>
            <ul style={{ margin: " 0 10px", padding: 0, zIndex: 1 }}>
              {refContainer?.current?.length > 0 &&
                progressValArr?.map((progrees, i) => (
                  <SpanTag
                    onClick={() => {
                      console.log(
                        refContainer?.current[i]?.offsetTop -
                          (navbar?.scrollHeight + 15)
                      );

                      console.log(
                        "navdetails",
                        refContainer?.current[i]?.scrollY,
                        "wiii",
                        window
                      );
                      // navbar.

                      window.scrollTo({
                        top:
                          refContainer?.current[i]?.offsetTop -
                          (navbar?.scrollHeight + 15),
                      });
                    }}
                    key={i}
                    style={{
                      display: "flex",
                      columnGap: "10px",
                      alignItems: "center",
                      margin: "15px 0",
                      color: applyStyleByRef(
                        i,
                        progressValArr?.length,
                        ColorDarkGreen,
                        ColorDarkGray
                      ),
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    <span
                      style={{
                        display: "flex",
                        width: "14px",
                        height: "14px",
                        backgroundColor: applyStyleByRef(
                          i,
                          progressValArr?.length,
                          ColorDarkGreen,
                          ColorLightAsh
                        ),
                        borderRadius: "50%",
                        border: `3px solid ${applyStyleByRef(
                          i,
                          progressValArr?.length,
                          ColorWhite,
                          "transparent"
                        )}`,
                        padding: "2px",
                        outline: `1px solid ${applyStyleByRef(
                          i,
                          progressValArr?.length,
                          ColorGreen,
                          "transparent"
                        )} `,
                        transition: "all .7s",
                      }}
                    ></span>
                    {progrees}
                  </SpanTag>
                ))}
            </ul>
          </div>
        </CommonContainer>
      </CommonCard>
    </Box>
  );
};

export default ScrollProgresscard;
