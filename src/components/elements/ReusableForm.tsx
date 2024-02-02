import { ReactNode } from "react";
import { ParentStack } from "../../assets/styles";

function ReusableForm({ children }:{children:ReactNode}) {
  return (
    <form >
      <ParentStack>{children}</ParentStack>
    </form>
  );
}

export default ReusableForm;
