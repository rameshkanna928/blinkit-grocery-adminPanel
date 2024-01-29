import React from 'react'
import { ParentStack } from '../../assets/styles';
import TableComponent from '../../components/elements/table';
import PageHeaderComponent from '../../components/parts/pageheader';
import { refundRequestDatas, rejectedRefundDatas } from '../../utils';

function RejectedRefunds() {
  return (
    <ParentStack>
    <PageHeaderComponent pageName={"Rejected Refunds"}>
      <></>
    </PageHeaderComponent>
    <TableComponent
      tableData={rejectedRefundDatas}
      setPageNumber={function (value: number): void {
        throw new Error("Function not implemented.");
      }}
      totalRows={null}
      page={0}
      children={false}
    />
  </ParentStack>
  )
}

export default RejectedRefunds
