import { DataGrid } from "@repo/grid";
import { useGetInvestmentData } from "@repo/query";
import { Box, ErrorRetry, Spinner } from "@repo/ui";
import React from "react";

const columnDefs = [
  {
    headerName: "Investment Type",
    field: "investmentType",
    rowGroup: true,
    hide: true,
  },
  { headerName: "Investment Name", field: "investmentName" },
  { headerName: "Current Value", field: "currentValue", type: "rightAligned" },
  {
    headerName: "Purchase Date",
    field: "purchaseDate",
    cellRenderer: (params: { value: string }) => (
      <span>{params.value ? new Date(params.value).toDateString() : null}</span>
    ),
  },
  { headerName: "Return Rate (%)", field: "returnRate", type: "rightAligned" },
  { headerName: "Sector", field: "sector" },
  { headerName: "Risk Level", field: "riskLevel" },
];

const autoGroupColumnDef = {
  headerName: "Investment Type",
};

export function InvestmentGrid() {
  const { status, data, refetch } = useGetInvestmentData(
    "bce7d90e-552a-406f-9923-273593b6cb25"
  );

  return status === "pending" ? (
    <Spinner />
  ) : status === "error" ? (
    <ErrorRetry onClickHandler={() => refetch()} />
  ) : (
    <Box minHeight={600}>
      <DataGrid
        rowData={data}
        columnDefs={columnDefs}
        autoGroupColumnDefCustom={autoGroupColumnDef}
      />
    </Box>
  );
}
