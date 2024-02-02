import  { ReactSVGElement } from "react";
import { CustomSubList, FlexStart } from "../../assets/styles";

interface IProps{
  icon:ReactSVGElement;
  text:string;
  startIcon:boolean;
}
function IconText({ icon, startIcon, text }:IProps) {
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
