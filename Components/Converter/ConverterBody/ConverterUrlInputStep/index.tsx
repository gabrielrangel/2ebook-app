import React, { FunctionComponent, useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useConverterContext } from "Services/Context/Converter";

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
  const [rows, setRows] = useState<Row[]>([] as Row[]);
  const { state } = useConverterContext();

  useEffect(() => {
    setRows(state.links?.map(({ url = "" }, id) => ({ url, id })));
  }, [state, setRows]);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
    />
  );
};

export default ConverterUrlInputStep;
