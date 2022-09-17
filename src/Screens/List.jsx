import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TableAg from "../components/TableAg";
import API from "../config/API";
export default function Test() {
  const [data, setData] = useState([]);
  useEffect(() => {
    API.getProduct()
      .then((res) => {
        console.log(res);
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div
      // className="ag-theme-alpine"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TableAg
        rowData={data}
        columnDefs={[{ field: "id" }, { field: "title" }, { field: "price" }]}
      />
    </div>
  );
}
