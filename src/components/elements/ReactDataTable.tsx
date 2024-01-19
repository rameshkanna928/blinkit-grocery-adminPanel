
import DataTables, { Config } from "datatables.net-dt";
import { useEffect, useRef } from "react";
import "datatables.net-dt/css/jquery.dataTables.css";
export function ReactDataTables({ ...props }: Config) {
  const tableRef = useRef<HTMLTableElement>(null);
 
  useEffect(() => {
    const dt = new DataTables(tableRef.current!, props);
    return () => {
      dt.destroy();
    };
  }, []);

  return <table ref={tableRef}></table>;
}

export default ReactDataTables;
