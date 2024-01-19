import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { onClose } from "../../redux/slices/DrawerSlide";

interface IProps {
  children: React.ReactNode;
  position: "left" | "top" | "right" | "bottom" | undefined;
}
export default function ReUseDrawer({ children, position }: IProps) {
  const { drawer }: any = useSelector((state) => state);
  console.log("redState", drawer);
  const dispatch = useDispatch();
  return (
    <Drawer
      anchor={position}
      open={drawer?.open}
      onClose={() => {
        dispatch(onClose());
      }}
    >
      {children}
    </Drawer>
  );
}
