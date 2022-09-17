import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const TableAg = ({ rowData, columnDefs }) => {
  //   const [columnDefs, setColumnDefs] = useState([
  //     { headerName: "Row ID", valueGetter: "node.id" },
  //     { field: "make" },
  //     { field: "model" },
  //     { field: "price" },
  //   ]);
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));

  return (
    <div>
      <div
        style={{
          height: 400,
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};
export default TableAg;
