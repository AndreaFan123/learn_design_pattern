import React, { FunctionComponent, useEffect, useState } from "react";
// import { Product } from "../types/product";

// Version 1 -  Not generic HOC
// export default function HocFetchData(
//   Component: FunctionComponent<{
//     products?: Product[];
//     error: boolean;
//     isLoading: boolean;
//   }>,
//   url: string
// ) {
//   function ComponentWithProps(props) {
//     const [data, setData] = useState({
//       data: props.products,
//       error: props.error,
//       isLoading: props.isLoading,
//     });

//     const fetchData = async () => {
//       setData({ data: null, error: false, isLoading: true });
//       try {
//         const res = await fetch(url);
//         const data = await res.json();
//         if (data) {
//           setData({
//             data: data,
//             error: false,
//             isLoading: false,
//           });
//         }
//       } catch (error) {
//         setData({
//           data: null,
//           error: error,
//           isLoading: false,
//         });
//       }
//     };

//     useEffect(() => {
//       fetchData();
//     }, []);

//     if (data.isLoading) {
//       return <div>Loading...</div>;
//     }

//     if (data.error) {
//       return <div>Something went wrong</div>;
//     }

//     return (
//       <Component
//         products={data.data?.products}
//         error={data.error}
//         isLoading={data.isLoading}
//       />
//     );
//   }
//   return ComponentWithProps;
// }

// Version 2 - Generic HOC

interface HocFetchDataProps<T> {
  data?: T[];
  error: boolean;
  isLoading: boolean;
}

export default function HocFetchData<T>(
  Component: FunctionComponent<HocFetchDataProps<T>>,
  url: string
) {
  function ComponentWithProps(props) {
    const [data, setData] = useState({
      data: props.products,
      error: props.error,
      isLoading: props.isLoading,
    });
    const fetchData = async () => {
      setData({ data: undefined, error: false, isLoading: true });
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data) {
          setData({
            data: data,
            error: false,
            isLoading: false,
          });
        }
      } catch (error) {
        setData({
          data: undefined,
          error: error,
          isLoading: false,
        });
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    if (data.isLoading) {
      return <div>Loading...</div>;
    }

    if (data.error) {
      return <div>Something went wrong</div>;
    }

    return (
      <Component
        {...props}
        data={data.data?.products || data.data?.users}
        error={data.error}
        isLoading={data.isLoading}
      />
    );
  }
  return ComponentWithProps;
}
