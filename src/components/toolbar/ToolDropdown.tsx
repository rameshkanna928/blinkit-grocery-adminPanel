import React from "react";
import IconText from "../elements/iconText";
import { RxDotsVertical } from "react-icons/rx";
import { ColorBlack } from "../../assets/styles/color";
import { editIcon, deleteIcon } from "../../utils/icons";
import CustomDropDown from "../elements/CustomDropDown";
import { FlexBox } from "../../assets/styles";

function ToolDropdown({ arr, width }) {
  return (
    <FlexBox style={{justifyContent:"flex-end"}}>
    <CustomDropDown value={<RxDotsVertical color={ColorBlack} size={20} />}>
      <div style={{ width: width,padding:"10px 0" }}>
        {arr?.map((data) => (
          <IconText  icon={data?.icon} startIcon={true} text={data?.text} />
        ))}
      </div>
    </CustomDropDown>
    </FlexBox>
  );
}

export default ToolDropdown;
