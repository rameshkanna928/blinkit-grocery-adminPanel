import { useEffect, useState } from "react";

function UseFetchQuery(LoadQuery: ({}) => {}, variables: {}) {
  const [ApiResults, setApiResults] = useState({
    data:{
      getOrdersChart:{
        total:0
      },
      getCategoryCharts:{
        total:0
      },
      getSaleThisMonthChart:{
        total:0
      },
      getOrderDetailsCount:[],
      
    },
    refetch:({})=>{}
  });
  const fetchdatas = (params: {}) => {
    console.log("paramsDYNHook", params);

    return new Promise((res, rej) => {
      const response = LoadQuery({
        variables: params,
      });
      if (response) {
        res(response);
      } else {
        rej((Err: {}) => console.log(Err));
      }
    })
      .then((res:any) =>
        setApiResults((prev) => ({
          ...prev,
          data: res?.data,
          refetch: res?.refetch,
        }))
      )
      .catch((err) => console.log("APIError", err));
  };
  useEffect(() => {
    fetchdatas(variables);
  }, []);
  return { ApiResults, fetchdatas };
}

export default UseFetchQuery;
