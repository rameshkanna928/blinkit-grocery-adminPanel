import { useEffect, useState } from "react";

function UseFetchQuery(LoadQuery: ({}) => {}, variables: {}) {
  const [ApiResults, setApiResults] = useState({
    data: {
       getAllCategories:[]
    },
    refetch: () => {},
  });
  const fetchdatas = (params: {}) => {
    console.log("paramsDYNHook",params);
    
    return new Promise(async (res, rej) => {
      const response = await LoadQuery({
        variables: params,
      });
      if (response) {
        res(response);
      } else {
        rej((Err: {}) => console.log(Err));     
      }
    })
      .then((res) =>
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
