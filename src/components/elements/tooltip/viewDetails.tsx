import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ColorDarkGray } from "../../../assets/styles/color";
import CustomTooltip from "./CustomTooltip";
import { FlexBox } from "../../../assets/styles";

function ViewDetails() {
  return (
    <FlexBox>

    <CustomTooltip
      text={<MdOutlineRemoveRedEye size={18} color={ColorDarkGray} />}
      tipText={"View Details"}
    />
    </FlexBox>

  );
}

export default ViewDetails;
