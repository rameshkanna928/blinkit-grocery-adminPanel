import React from "react";
import IconText from "../elements/iconText";
import { RxDotsVertical } from "react-icons/rx";
import { ColorBlack, ColorWhite } from "../../assets/styles/color";
import { editIcon, deleteIcon } from "../../utils/icons";
import CustomDropDown from "../elements/CustomDropDown";
import { CustomLink, FlexBox } from "../../assets/styles";
import { useSelector } from "react-redux";

function ToolDropdown({ arr, width }) {
  const { status } = useSelector((state) => state.mode);
  return (
    <CustomDropDown
      value={
        <RxDotsVertical
          style={{ cursor: "pointer" }}
          color={status === "light" ? ColorBlack : ColorWhite}
          size={20}
        />
      }
    >
      <div style={{ width: width, padding: "10px 0" }}>
        {arr?.map((data) =>
          data?.routePath ? (
            <CustomLink to={`${data?.routePath}`}>
              <IconText icon={data?.icon} startIcon={true} text={data?.text} />
            </CustomLink>
          ) : (
            <IconText icon={data?.icon} startIcon={true} text={data?.text} />
          )
        )}
      </div>
    </CustomDropDown>
  );
}

export default ToolDropdown;
