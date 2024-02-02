import Drawer from "@mui/material/Drawer";

interface IProps {
  children: React.ReactNode;
  position: "left" | "top" | "right" | "bottom" | undefined;
  open: boolean;
  onclose: () => void;
}
export default function CustomDrawer({
  children,
  position,
  open,
  onclose,
}: IProps) {
  return (
    <Drawer anchor={position} open={open} onClose={onclose}>
      {children}
    </Drawer>
  );
}
