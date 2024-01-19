import { Avatar, Stack } from "@mui/material";
import React from "react";
import { Heading6, SmallSpan } from "../../assets/styles";
interface IProps {
  data: {
    name: string;
    image: string;
    span: string;
  };
  space: any;
  imgW?: string;
  imgH?: string;
}
function TableItems({ data, space, imgW, imgH }: IProps) {
  return (
    <Stack
      columnGap={space ? 2 : 1}
      direction={"row"}
      alignItems={"center"}
      py={space & 1}
      minWidth={180}
    >
      {data?.image && (
        <Avatar
          sx={{ width: imgW ? imgW : 40, height: imgH ? imgH : 40 }}
          src={data?.image}
        />
      )}

      <Stack rowGap={space & 1}>
        {data?.name && <Heading6>{data?.name}</Heading6>}
        {data?.span && <SmallSpan>{data?.span}</SmallSpan>}
      </Stack>
    </Stack>
  );
}

export default TableItems;
