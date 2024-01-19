import React, { useRef } from "react";

function useRefContainer() {
  const refHolder = useRef<HTMLDivElement[]>([]);
  const pushrefFn = (ref: HTMLDivElement|null) => {
    if (ref && !refHolder?.current?.includes(ref)) {
      refHolder.current.push(ref);
    }
  };
  return { refHolder, pushrefFn };
}

export default useRefContainer;
