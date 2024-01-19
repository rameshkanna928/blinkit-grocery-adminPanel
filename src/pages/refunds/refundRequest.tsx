import React from "react";
import { ParentStack } from "../../assets/styles";
import TableComponent from "../../components/elements/table";
import PageHeaderComponent from "../../components/parts/pageheader";
import { allLocationsDatas, refundRequestDatas } from "../../utils";

function RefundRequest() {
  return (
    <ParentStack>
        <PageHeaderComponent  pageName={"Refund Requests"}>
            <></>
        </PageHeaderComponent>
      <TableComponent
              tableData={refundRequestDatas}
              setPageNumber={function (value: number): void {
                  throw new Error("Function not implemented.");
              } }
              totalRows={null}
              page={0} children={false}      />
    </ParentStack>
  );
}

export default RefundRequest;
