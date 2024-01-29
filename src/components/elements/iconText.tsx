import React from "react";
import { CustomSubList, FlexStart } from "../../assets/styles";

function IconText({ icon, startIcon, text }) {
  return (
    <div>
      {startIcon ? (
        <CustomSubList style={{padding:0}}>
          <FlexStart direction={"row"} style={{ columnGap: "10px",padding:"5px 15px" }}>
            {icon}
            {text}
          </FlexStart>
        </CustomSubList>
      ) : (
        <FlexStart>
          <CustomSubList>{text}</CustomSubList>
          <span> {icon}</span>
        </FlexStart>
      )}
    </div>
  );
}

export default IconText;
