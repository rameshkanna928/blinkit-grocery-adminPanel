import { useLazyQuery } from "@apollo/client";

export const FetchQuery = (query: any) => {
  const [LoadQuery, { data }] = useLazyQuery(query,{
    fetchPolicy:"no-cache"
  });
  return {
    LoadQuery,
    data,
  };
};


