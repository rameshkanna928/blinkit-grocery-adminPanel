import React from 'react'
import { TableHeaderContainer } from '../../assets/styles'

function TableHeader({children}) {
  return (
    <TableHeaderContainer>
     {children}
    </TableHeaderContainer>
  )
}

export default TableHeader
