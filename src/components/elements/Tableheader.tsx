import React from 'react'
import { TableHeaderContainer } from '../../assets/styles'

function TableHeader({children}) {
  return (
    <TableHeaderContainer direction={"row"} columnGap={2}>
     {children}
    </TableHeaderContainer>
  )
}

export default TableHeader
