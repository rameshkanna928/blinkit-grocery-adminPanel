import CustomTooltip from './CustomTooltip'
import { RxPencil1 } from "react-icons/rx";
import { ColorDarkGray } from '../../../assets/styles/color';

function ViewNotes() {
  return (
    <CustomTooltip
    text={<RxPencil1 size={18} color={ColorDarkGray} />}
    tipText={"View Notes"}
  />
  )
}

export default ViewNotes
