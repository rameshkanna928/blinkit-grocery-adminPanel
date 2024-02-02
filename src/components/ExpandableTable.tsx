import { Table, TableBody, TableCell, TableRow } from '@mui/material'

function ExpandableTable({data}) {
  return (
    <Table>
    <TableBody>
      {Object.entries(data).map((dataHeader,i) => (
        <TableRow key={i}>
          <TableCell>{dataHeader[0]}</TableCell>
          <TableCell>{dataHeader[1]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default ExpandableTable
