import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeysEnum } from "../../../constants";

const getDashboardData = async (userId: string) => {
  return axios.get(`http://localhost:5001/dashboard?userId=${userId}`);
};

export function useGetDashboardData(userId: string) {
  return useQuery({
    queryKey: [QueryKeysEnum.DASHBOARD, userId],
    queryFn: () => getDashboardData(userId),
  });
}
