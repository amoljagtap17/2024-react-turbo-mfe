import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeysEnum } from "../../../constants";

interface IDashboardData {
  totalInvestments: number;
  totalDeposits: number;
  investmentsByType: {
    type: "Bonds" | "Mutual Funds" | "Stocks";
    value: number;
  }[];
}

const getDashboardData = async (userId: string) => {
  const { data } = await axios.get<IDashboardData>(
    `http://localhost:5001/dashboard?userId=${userId}`
  );

  return data;
};

export function useGetDashboardData(userId: string) {
  return useQuery({
    queryKey: [QueryKeysEnum.DASHBOARD, userId],
    queryFn: () => getDashboardData(userId),
  });
}
