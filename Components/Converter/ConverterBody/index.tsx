import React, { FunctionComponent, useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useConverterContext } from "Services/Context/Converter";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import ClearIcon from "@mui/icons-material/Clear";

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

export const ConverterBody = () => {
  const [rows, setRows] = useState<Row[]>([] as Row[]);
  const { state } = useConverterContext();

  useEffect(() => {
    setRows(state.map(({ url = "" }, id) => ({ url, id })));
  }, [state, setRows]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default ConverterBody;
