import { Stack } from '@mui/material'
import { CommonCard, SalesCard, RoundedIcons, NumberTag, SpanTag } from '../../assets/styles'

function OrdersCard({data}:any) {
  return (
    <CommonCard>
    <SalesCard direction={"row"} justifyContent={"flex-start"}>
      <RoundedIcons $background={data?.background}>
        {data?.icon}
      </RoundedIcons>

      <Stack>
        <NumberTag>{data?.count}</NumberTag>
        <SpanTag>{data.label}</SpanTag>
      </Stack>
    </SalesCard>
  </CommonCard>
  )
}

export default OrdersCard
