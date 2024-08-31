import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ColDef, ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { useMemo } from "react";

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);

interface IDataGridProps<T> {
  rowData: T[];
  columnDefs: ColDef[];
  autoGroupColumnDefCustom: ColDef;
}

export function DataGrid<T>({
  rowData,
  columnDefs,
  autoGroupColumnDefCustom,
}: IDataGridProps<T>) {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: 500, width: "100%" }), []);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 150,
      sortable: true,
      filter: false,
      resizable: false,
      pinned: false,
    };
  }, []);
  const autoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      minWidth: 200,
      headerName: "",
      cellRendererParams: {
        suppressCount: true,
      },
      ...autoGroupColumnDefCustom,
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div className="ag-theme-quartz" style={gridStyle}>
        <AgGridReact
          groupDefaultExpanded={-1}
          animateRows={true}
          rowGroupPanelShow="always"
          defaultColDef={defaultColDef}
          rowData={rowData}
          columnDefs={columnDefs}
          autoGroupColumnDef={autoGroupColumnDef}
          groupDisplayType="singleColumn"
          suppressCellFocus
          suppressExpandablePivotGroups
          suppressRowClickSelection
          suppressMovableColumns
          suppressGroupRowsSticky
          suppressMakeColumnVisibleAfterUnGroup
          suppressAggFuncInHeader
        />
      </div>
    </div>
  );
}
