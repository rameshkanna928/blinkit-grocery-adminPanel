import React from "react";
import { ParentStack } from "../../assets/styles";
import TableComponent from "../../components/elements/table";
import PageHeaderComponent from "../../components/parts/pageheader";
import { approvedRefundDatas, refundRequestDatas } from "../../utils";

function ApprovedRefunds() {
  return (
    <ParentStack>
      <PageHeaderComponent pageName={"Approved Refunds"}>
        <></>
      </PageHeaderComponent>
      <TableComponent
        tableData={approvedRefundDatas}
        setPageNumber={function (value: number): void {
          throw new Error("Function not implemented.");
        }}
        totalRows={null}
        page={0}
        children={false}
      />
    </ParentStack>
  );
}

export default ApprovedRefunds;
