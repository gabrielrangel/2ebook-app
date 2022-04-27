import React, { FunctionComponent, useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useConverterContext } from "Hooks/Converter/Context";

const columns: GridColDef[] = [
  { field: "index", headerName: "ID", width: 90, hide: true },
  {
    field: "url",
    headerName: "URL",
    editable: true,
    flex: 10,
  },
];

interface Row {
  id: number;
  url: string;
}

export const ConverterUrlInputStep: FunctionComponent = () => {
  return (
    <DataGrid
      rows={[]}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
    />
  );
};

export default ConverterUrlInputStep;
