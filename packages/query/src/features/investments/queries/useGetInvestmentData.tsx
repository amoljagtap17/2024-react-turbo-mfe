import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeysEnum } from "../../../constants";

interface IInvestmentData {
  id: string;
  investmentName: string;
  investmentType: string;
  currentValue: number;
  purchaseDate: string;
  returnRate: number;
  sector: string;
  riskLevel: string;
  duration: string;
  broker: string;
  dividendsReceived: boolean;
  capitalGainsTaxApplied: boolean;
}

const getInvestmentData = async (userId: string) => {
  const { data } = await axios.get<IInvestmentData>(
    `http://localhost:5001/investments?userId=${userId}`
  );

  return data;
};

export function useGetInvestmentData(userId: string) {
  return useQuery({
    queryKey: [QueryKeysEnum.INVESTMENT, userId],
    queryFn: () => getInvestmentData(userId),
  });
}
