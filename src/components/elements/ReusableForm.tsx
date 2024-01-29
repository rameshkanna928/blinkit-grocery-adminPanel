import React from "react";
import { ParentStack } from "../../assets/styles";

function ReusableForm({ children }) {
  return (
    <form>
      <ParentStack>{children}</ParentStack>
    </form>
  );
}

export default ReusableForm;
