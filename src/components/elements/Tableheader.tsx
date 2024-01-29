import React from 'react'
import { TableHeaderContainer } from '../../assets/styles'

function TableHeader({children}) {
  return (
    <TableHeaderContainer direction={"row"}>
     {children}
    </TableHeaderContainer>
  )
}

export default TableHeader
