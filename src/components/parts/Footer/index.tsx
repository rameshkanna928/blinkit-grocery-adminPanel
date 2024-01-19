import { FooterContainer, TableSpan } from '../../../assets/styles'

function index({sideBarOpen}) {
  return (
    <FooterContainer $open={sideBarOpen}>
    <TableSpan>
      © All Designed, Developed and 💕 by{" "}
      <b style={{ color: "rgb(255, 156, 0)" }}>ThemeTags</b>{" "}
    </TableSpan>
    <TableSpan>
      Grostore Online Store
      <b>v3.0.0</b>
    </TableSpan>
  </FooterContainer>
  )
}

export default index
