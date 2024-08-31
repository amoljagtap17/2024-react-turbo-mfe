import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ColDef, ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface IDataGridProps<T> {
  rowData: T[];
  columnDefs: ColDef[];
  autoGroupColumnDef: ColDef;
}

export function DataGrid<T>({
  rowData,
  columnDefs,
  autoGroupColumnDef,
}: IDataGridProps<T>) {
  return (
    <div className="ag-theme-quartz" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        groupDefaultExpanded={-1}
        animateRows={true}
        rowGroupPanelShow="always"
        defaultColDef={{
          flex: 1,
          minWidth: 100,
          sortable: true,
          filter: true,
        }}
        rowData={rowData}
        columnDefs={columnDefs}
        autoGroupColumnDef={autoGroupColumnDef}
      />
    </div>
  );
}
