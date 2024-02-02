import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ColorDarkGray } from "../../../assets/styles/color";
import CustomTooltip from "./CustomTooltip";

function ViewDetails() {
  return (
    <CustomTooltip
      text={<MdOutlineRemoveRedEye size={18} color={ColorDarkGray} />}
      tipText={"View Details"}
    />
  );
}

export default ViewDetails;
