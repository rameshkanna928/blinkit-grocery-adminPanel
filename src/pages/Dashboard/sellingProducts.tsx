import { Stack, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTopSellingProducts } from "../../API/query";
import { FetchQuery } from "../../API/service";
import UseFetchQuery from "../../Hooks/useFetchQuery";
import { CommonCard, NumberTag, SpanTag, CountTag } from "../../assets/styles";
import TableItems from "../../components/elements/TableItems";

function SellingProducts() {
  const [sellingProducts, setSellingProducts] = useState([]);
  const { LoadQuery } = FetchQuery(getTopSellingProducts);
  const { ApiResults: ApiSellingProducts } = UseFetchQuery(LoadQuery, {});

  useEffect(() => {
    let ApiData = ApiSellingProducts?.data?.getTopSellingProducts;
    if (ApiData) {
      setSellingProducts(ApiData);
    }
  }, [ApiSellingProducts]);

  return (
    <CommonCard>
      <Stack width={"100%"}>
        <Stack m={"20px"}>
          <NumberTag>Top Selling Products</NumberTag>
          <SpanTag>We have listed count total products.</SpanTag>
        </Stack>
        <Stack
          className="hide-scroll"
          sx={{ maxHeight: "51vh", overflow: "auto" }}
        >
          {sellingProducts?.map((products, index) => (
            <>
              <Stack
                key={index}
                direction={"row"}
                px={2}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <TableItems
                  data={{
                    image: products?.image?.image,
                    name: products?.name,
                    span: `Category: ${products?.ProductType?.name}`,
                  }}
                  space={true}
                  imgW={undefined}
                  imgH={undefined}
                />
                <CountTag>({products.sellingCount})</CountTag>
              </Stack>
              <Divider />
            </>
          ))}
        </Stack>
      </Stack>
    </CommonCard>
  );
}

export default SellingProducts;
